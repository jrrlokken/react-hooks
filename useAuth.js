import { useCallback, useState, useEffect, useContext, createContext } from 'react';

const authContext = createContext();

// Hook for child components to get the auth object and re-render
// when it changes
export default () => {
  return useContext(authContext);
}

// Provider component that wraps components and makes useAuth() available
export function ProvideAuth({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Provide auth hook that creates auth object and handles state
function useAuthProvider() {
  const [user, setUser] = useState(null)

  // Get the logged in user when created
  useEffect(() => {
    const user = getLoggedInUser();
    setUser(user);
  }, []);

  const login = async (...) => {
    const user = ...;
    setUser(user);
  }

  const logout = async () => {
    ...
    setUser(user);
  }

  const resetPassword = async () => {
    ...
  }

  return {
    resetPassword,
    login,
    logout,
    user
  }
}


// In top level App.js:
// import { ProvideAuth } from 'hooks/useAuth'
//
// export default () => {
  // return <ProvideAuth>
  //  <RestOfApplication />
  // </ProvideAuth>
// }

// In a component that wants to use auth:
// import useAuth from 'hooks/useAuth';
// 
// export default () => {
  // const { user, login, logout, resetPassword } = useAuth();
  //
  // return <>{user}</>
// }