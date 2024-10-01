"use client";

import {PropsWithChildren} from "react";
import {createPortal} from "react-dom";

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function ModalWrapper({isOpen, onClose, title, children}: PropsWithChildren<ModalWrapperProps>) {
  if (!isOpen) return null;

  // Modal을 body에 렌더링
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title d-flex justify-content-between">
          <span>{title}</span>
          <button className="btn-close btn-close-white" onClick={onClose}/>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );

}

