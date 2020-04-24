import { ValidationError } from "yup";

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(error: ValidationError): Errors {
  const validationErrors: Errors = {};
  error.inner.forEach(
    ({ path, message }) => (validationErrors[path] = message)
  );

  return validationErrors;
}
