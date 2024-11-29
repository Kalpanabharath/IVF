import React, { createContext, useState } from "react";

// Create the context
export const SuccessContext = createContext();

// Create the provider component
export const SuccessProvider = ({ children }) => {
  const [successRate, setSuccessRate] = useState(0);

  return (
    <SuccessContext.Provider value={{ successRate, setSuccessRate }}>
      {children}
    </SuccessContext.Provider>
  );
};
