import React from "react";

export interface ModalProps {
  onOk: Function;
  onCancel: Function;
}

export const Modal: React.FC<ModalProps> = ({ onOk, onCancel }) => {};
