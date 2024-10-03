"use client";

import {createPortal} from "react-dom";
import {Alert} from "@mui/material";
import {useAlert} from "@/app/_provider/AlertProvider";

export default function AlertGlobal() {
  const {title, isAlertOpen, closeAlert} = useAlert();
  if (!isAlertOpen) return null;

  // Modal을 body에 렌더링
  return createPortal(
    <div className="modal-overlay" onClick={closeAlert}>
      <div className="modal-content pb-0" onClick={(e) => e.stopPropagation()}>
        <Alert severity="success">{title}</Alert>
      </div>
    </div>,
    document.body
  );

}

