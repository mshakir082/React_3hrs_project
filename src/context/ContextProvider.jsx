import React, { createContext } from "react";

export const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const data = { name: "John", age: 30 }; // Replace this with your own data

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;