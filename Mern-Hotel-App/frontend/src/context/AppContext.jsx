import React, { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [toast, setToast] = useState(undefined);

  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
      }}
    >
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be inside AppContextProvided");
  }
  return context;
};
