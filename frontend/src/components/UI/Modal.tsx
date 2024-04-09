import React, { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
  open: boolean;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ children, open, className = "" }) => {
  // extracting the dialog element from the DOM
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (open && dialog.current) {
      dialog.current.showModal();
    }
  }, [open]);

  // creating a portal to the modal element
  const modalElement = document.getElementById("modal");
  if (!modalElement) return null;

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}></dialog>,
    modalElement
  );
};

export default Modal;
