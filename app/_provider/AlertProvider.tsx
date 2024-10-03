"use client";

import {createContext, useContext, useMemo, useState} from "react";

const AlertContext = createContext<any>(null);

function AlertProvider({children}: any) {
  const [title, setTitle] = useState('');
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const openAlert = (title: string) => {
    setTitle(title);
    setIsAlertOpen(true);
    setTimeout(() => setIsAlertOpen(false), 1000);
  };
  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const contextValue = useMemo(
    () => ({
      title,
      isAlertOpen,
      openAlert,
      closeAlert,
    }),
    [title, isAlertOpen],
  )

  return <AlertContext.Provider value={contextValue}>{children}</AlertContext.Provider>;
}

export function useAlert() {
  return useContext(AlertContext);
}

export default AlertProvider;