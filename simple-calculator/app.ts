document.addEventListener("DOMContentLoaded", function () {
  const display: HTMLInputElement = document.getElementById(
    "display"
  ) as HTMLInputElement;
  const buttonsContainer: HTMLDivElement = document.querySelector(
    ".buttons"
  ) as HTMLDivElement;

  let currentValue = "";

  buttonsContainer.addEventListener("click", (e: any) => {
    if (e.target.tagName === "BUTTON") {
      const value = e.target.dataset.value;

      if (
        ![
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          ".",
          "=",
          "+",
          "-",
          "*",
          "/",
          "C",
        ].includes(value)
      ) {
        return;
      }

      if (value === "=") {
        try {
          currentValue = eval(currentValue);
          display.value = currentValue;
        } catch (error) {
          display.value = "Error";
        }
        return;
      }

      if (value === "C") {
        currentValue = "";
        display.value = "";
        return;
      }

      currentValue += value;
      display.value = currentValue;
    }
  });
});