"use client";

import {createContext, useContext, useMemo, useState} from "react";
import {AlertColor} from "@mui/material/Alert/Alert";

const AlertContext = createContext<any>(null);

function AlertProvider({children}: any) {
  const [title, setTitle] = useState('');
  const [severity, setSeverity] = useState<AlertColor>('success');
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const openAlert = (title: string, severity?: AlertColor) => {
    setTitle(title);
    severity && setSeverity(severity);
    setIsAlertOpen(true);
    setTimeout(() => {
      setIsAlertOpen(false);
      setSeverity("success");
    }, 1000);
  };
  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const contextValue = useMemo(
    () => ({
      title,
      severity,
      isAlertOpen,
      openAlert,
      closeAlert,
    }),
    [title, severity, isAlertOpen],
  )

  return <AlertContext.Provider value={contextValue}>{children}</AlertContext.Provider>;
}

export function useAlert() {
  return useContext(AlertContext);
}

export default AlertProvider;