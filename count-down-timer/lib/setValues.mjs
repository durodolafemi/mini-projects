import globalVariable from "../global_variable.mjs";
import { validateFieldsValue } from "./validator.mjs";

export function setCounterValue() {
  globalVariable.hoursInputElement.addEventListener("change", () => {
    globalVariable.hoursCountDownElement.textContent =
      +globalVariable.hoursInputElement.value >= 0 &&
      +globalVariable.hoursInputElement.value <= 9
        ? "0" + globalVariable.hoursInputElement.value
        : globalVariable.hoursInputElement.value;

    if (!validateFieldsValue()) return validateFieldsValue();
  });

  globalVariable.minutesInputElement.addEventListener("change", () => {
    globalVariable.minutesCountDownElement.textContent =
      +globalVariable.minutesInputElement.value >= 0 &&
      +globalVariable.minutesInputElement.value <= 9
        ? "0" + globalVariable.minutesInputElement.value
        : globalVariable.minutesInputElement.value;

    if (!validateFieldsValue()) return validateFieldsValue();
  });

  globalVariable.secondsInputElement.addEventListener("change", () => {
    globalVariable.secondsCountDownElement.textContent =
      +globalVariable.secondsInputElement.value >= 0 &&
      +globalVariable.secondsInputElement.value <= 9
        ? "0" + globalVariable.secondsInputElement.value
        : globalVariable.secondsInputElement.value;

    if (!validateFieldsValue()) return validateFieldsValue();
  });
}
