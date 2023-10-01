import {
  setCounterValue,
  startCounter,
  stopCounter,
  pauseCounter,
} from "./lib/index.mjs";

import globalVariable from "./global_variable.mjs";
import { intervalCount } from "./lib/timer.mjs";
import { stopAlertMessage } from "./lib/actionHelpers.mjs";

globalVariable.hoursInputElement.focus();

setCounterValue();

globalVariable.startCountButton.addEventListener("click", () => {
  intervalCount(startCounter);
});

globalVariable.pauseCountButton.addEventListener("click", pauseCounter);

globalVariable.stopCountButton.addEventListener("click", stopCounter);

globalVariable.closeAlarmAlertMessage.addEventListener("click", () => {
  stopAlertMessage();
});
