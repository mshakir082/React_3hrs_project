import React, { createContext,useState} from "react";

export const DataContext = createContext();

const ContextProvider = ({ children }) => {
//   const data = { name: "John", age: 30 }; // Replace this with your own data
  const [data,setData] = useState([])

  return (
    <DataContext.Provider value={{setData,data}}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;