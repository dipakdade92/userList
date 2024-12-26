import { ERROR_MESSAGES } from "./constant";

export const logError = (error: Error): void => {
    console.error('Logged Error:', error);
  };

  export const handleError = (): string => {
    // Customize error handling logic as needed
    return ERROR_MESSAGES.FETCH_FAILED;
  };