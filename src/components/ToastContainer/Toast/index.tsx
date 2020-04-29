import React, { useEffect } from "react";
import {
  FiAlertCircle,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
} from "react-icons/fi";

import { Container } from "./styles";
import { ToastMessage, useToast } from "../../../hooks/toast";

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

export const Toast: React.FC<ToastProps> = ({
  message: { description, type, id, title },
  style,
}) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [removeToast, id]);

  return (
    <Container style={style} hasDescription={!!description} type={type}>
      {icons[type || "info"]}
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
