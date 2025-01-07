import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

 export const AppContext = createContext();

const AppContextProvider = (props ) => {
const[employee, setEmployee] = useState({})
 const navigate = useNavigate();
    
  const viewSpecificEmployee = async (id) => {
    try {
      const response = await axios.get(`/employee/${id}`);
      setEmployee(response.data.data);
      if (response) {
        navigate(`/contact-us/${id}`);
      }
    } catch (error) {
      console.error("Error fetching specific data", error);
    }
  };
  return <AppContext.Provider value={{viewSpecificEmployee, employee}}>
    {props.children}
    </AppContext.Provider>;
};

export default AppContextProvider;
