import { useState } from 'react';

const useFormFields = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  const reset = (formObj) => {
    setFormData(formObj);
  };

  return [formData, handleChange, reset]
}

export default useFormFields;