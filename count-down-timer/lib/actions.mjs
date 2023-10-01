import globalVariable from "../global_variable.mjs";
import {
  resetCounterValues,
  countDown,
  setButtonAttribute,
  removeButtonAttribute,
} from "./actionHelpers.mjs";

export function startCounter() {
  countDown();

  if (
    +globalVariable.secondsCountDownElement.textContent <= 0 &&
    +globalVariable.minutesCountDownElement.textContent <= 0 &&
    +globalVariable.hoursCountDownElement.textContent <= 0
  ) {
    clearInterval(globalVariable.countdownIntervalTimer);

    removeButtonAttribute("startCountButton", "disabled");
    setButtonAttribute("pauseCountButton", "disabled", true);
    setButtonAttribute("stopCountButton", "disabled", true);
    return;
  }
  setButtonAttribute("startCountButton", "disabled", true);
  removeButtonAttribute("pauseCountButton", "disabled");
  removeButtonAttribute("stopCountButton", "disabled");
}

export function pauseCounter() {
  clearInterval(globalVariable.countdownIntervalTimer);

  globalVariable.startCountButton.removeAttribute("disabled");
  globalVariable.pauseCountButton.setAttribute("disabled", true);
  globalVariable.stopCountButton.removeAttribute("disabled");
}

export function stopCounter() {
  clearInterval(globalVariable.countdownIntervalTimer);
  resetCounterValues();

  globalVariable.startCountButton.removeAttribute("disabled");
  globalVariable.pauseCountButton.setAttribute("disabled", true);
  globalVariable.stopCountButton.setAttribute("disabled", true);
}
