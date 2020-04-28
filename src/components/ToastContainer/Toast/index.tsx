import React from "react";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";

import { Container } from "./styles";
import { ToastMessage, useToast } from "../../../hooks/toast";

interface ToastProps {
  message: ToastMessage;
}

export const Toast: React.FC<ToastProps> = ({
  message: { description, type, id, title },
}) => {
  const { removeToast } = useToast();

  return (
    <Container hasDescription={!!description} type={type}>
      <FiAlertCircle />
      <div>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
      </div>
      <button onClick={() => removeToast(id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};
