import globalVariable from "../global_variable.mjs";

export function validateFieldsValue() {
  if (
    (+globalVariable.hoursCountDownElement.textContent <= 0 ||
      globalVariable.hoursCountDownElement.textContent === undefined) &&
    (+globalVariable.minutesCountDownElement.textContent <= 0 ||
      globalVariable.minutesCountDownElement.textContent === undefined) &&
    (+globalVariable.secondsCountDownElement.textContent <= 0 ||
      globalVariable.secondsCountDownElement.textContent === undefined)
  ) {
    clearInterval(globalVariable.countdownIntervalTimer);
    return showError("One of the field must be greater than 1 (> 0)");
  }

  if (+globalVariable.hoursCountDownElement.textContent > 24) {
    clearInterval(globalVariable.countdownIntervalTimer);
    return showError("Value for the HOUR can not be greater than 24");
  }

  if (+globalVariable.minutesCountDownElement.textContent > 60) {
    clearInterval(globalVariable.countdownIntervalTimer);
    return showError("Value for the MINUTE can not be greater than 60");
  }

  if (+globalVariable.secondsCountDownElement.textContent > 60) {
    clearInterval(globalVariable.countdownIntervalTimer);
    return showError("Value for the SECOND can not be greater than 60");
  }

  return true;
}

export function showError(message) {
  const errorElement = document.querySelector(".error-message");
  errorElement.textContent = message;

  errorElement.style.display = "block";

  setTimeout(() => {
    errorElement.style.display = "none";
  }, 2500);
}
