import { useState, useEffect } from 'react';

const useStorage = (key, initialValue, storage) => {
  // Pass initial state function to useState so logic
  // is executed only once.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = storage.getItem(key)
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      // Update storage every time the value is changed
      storage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  } [storedValue, storage, key]);

  return [storedValue, setStoredValue];
}

export const useLocalStorage = (key, initialValue) => {
  return useStorage(key, initialValue, window.localStorage);
}

export const useSessionStorage = (key, initialValue) => {
  return useStorage(key, initialValue, window.sessionStorage);
}