import globalVariable from "../global_variable.mjs";
import { validateFieldsValue } from "./validator.mjs";

export function resetCounterValues() {
  globalVariable.hoursCountDownElement.textContent = "00";
  globalVariable.minutesCountDownElement.textContent = "00";
  globalVariable.secondsCountDownElement.textContent = "00";
}

export function countDown() {
  if (!validateFieldsValue()) return validateFieldsValue();

  if (+globalVariable.secondsCountDownElement.textContent > 0) {
    globalVariable.secondsCountDownElement.textContent =
      +globalVariable.secondsCountDownElement.textContent >= 0 &&
      +globalVariable.secondsCountDownElement.textContent <= 10
        ? "0" + --globalVariable.secondsCountDownElement.textContent
        : --globalVariable.secondsCountDownElement.textContent;
  }

  if (
    +globalVariable.secondsCountDownElement.textContent === 0 &&
    +globalVariable.minutesCountDownElement.textContent >= 1
  ) {
    globalVariable.minutesCountDownElement.textContent =
      +globalVariable.minutesCountDownElement.textContent >= 0 &&
      +globalVariable.minutesCountDownElement.textContent <= 10
        ? "0" + --globalVariable.minutesCountDownElement.textContent
        : --globalVariable.minutesCountDownElement.textContent;

    globalVariable.secondsCountDownElement.textContent = 60;
  }

  if (
    +globalVariable.secondsCountDownElement.textContent === 0 &&
    +globalVariable.minutesCountDownElement.textContent === 0 &&
    +globalVariable.hoursCountDownElement.textContent >= 1
  ) {
    globalVariable.hoursCountDownElement.textContent =
      +globalVariable.hoursCountDownElement.textContent >= 0 &&
      +globalVariable.hoursCountDownElement.textContent <= 10
        ? "0" + --globalVariable.hoursCountDownElement.textContent
        : --globalVariable.hoursCountDownElement.textContent;

    globalVariable.secondsCountDownElement.textContent = 60;
    globalVariable.minutesCountDownElement.textContent = 60;
  }

  if (
    +globalVariable.secondsCountDownElement.textContent === 0 &&
    +globalVariable.minutesCountDownElement.textContent === 0 &&
    +globalVariable.hoursCountDownElement.textContent === 0
  ) {
    globalVariable.alarmAudio.play();
    globalVariable.alarmMessage.style.display = "flex";

    setTimeout(() => {
      stopAlertMessage();
    }, 10000);
  }
}

export function setButtonAttribute(elementName, attributeName, attributeValue) {
  globalVariable[elementName].setAttribute(attributeName, attributeValue);
}

export function removeButtonAttribute(elementName, attributeName) {
  globalVariable[elementName].removeAttribute(attributeName);
}

export function stopAlertMessage() {
  globalVariable.alarmMessage.style.display = "none";
  globalVariable.alarmAudio.pause();
  globalVariable.alarmAudio.currentTime = 0;
}
