import globalVariable from "../global_variable.mjs";

export function intervalCount(func) {
  globalVariable.countdownIntervalTimer = setInterval(func, 1000);
}
