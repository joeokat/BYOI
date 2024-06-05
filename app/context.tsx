import React, { createContext, useState, ReactNode } from 'react';

// Define a type for the context value
interface AppContextType {
  Page: boolean;
  change: () => void;
}

// Define the default context value
const defaultValue: AppContextType = {
  Page: true,
  change: () => {},
};

// Create a Context object
export const AppContext = createContext<AppContextType>(defaultValue);

// Define a type for the provider props
interface AppProviderProps {
  children: ReactNode;
}

// Create a Provider component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [Page, setPage] = useState<boolean>(true);
  

  const change = () => {
    setPage(!Page);
  };

  return (
    <AppContext.Provider value={{ Page, change }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
