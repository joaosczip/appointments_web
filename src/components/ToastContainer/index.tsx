import React from "react";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";

import { Container, Toast } from "./styles";
import { ToastMessage, useToast } from "../../hooks/toast";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();

  return (
    <Container>
      {messages.map(({ id, type, description, title }) => (
        <Toast key={id} hasDescription={!!description} type={type}>
          <FiAlertCircle />
          <div>
            <strong>{title}</strong>
            {description && <p>{description}</p>}
          </div>
          <button onClick={() => removeToast(id)} type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
