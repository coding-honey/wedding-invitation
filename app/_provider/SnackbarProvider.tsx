"use client";

import {createContext, SyntheticEvent, useContext, useEffect, useMemo, useState} from "react";
import {AlertColor} from "@mui/material/Alert/Alert";
import {SnackbarCloseReason} from "@mui/material";

const SnackbarContext = createContext<any>(null);

export interface SnackbarMessage {
  message: string;
  severity: AlertColor;
  key: number;
  vertical: SnackBarVertical;
}

export type SnackBarVertical = 'top' | 'bottom';

function SnackbarProvider({children}: any) {
  const [snackPack, setSnackPack] = useState<readonly SnackbarMessage[]>([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState<SnackbarMessage | undefined>(
    undefined,
  );

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({...snackPack[0]});
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleOpen = (message: string, severity: AlertColor = 'success', vertical: SnackBarVertical = 'bottom') => {
    setSnackPack((prev) => [...prev, {message, severity, vertical, key: new Date().getTime()}]);
  };
  const handleClose = (
    event: SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const contextValue = useMemo(
    () => ({
      messageInfo,
      isOpenSnackbar: open,
      handleOpenSnackbar: handleOpen,
      handleCloseSnackbar: handleClose,
      handleExitedSnackbar: handleExited,
    }),
    [messageInfo, open],
  )

  return <SnackbarContext.Provider value={contextValue}>{children}</SnackbarContext.Provider>;
}

export function useSnackbar() {
  return useContext(SnackbarContext);
}

export default SnackbarProvider;