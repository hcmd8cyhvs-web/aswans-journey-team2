const assemblyImage = document.querySelector("#assembly-image");
const stageButtons = document.querySelectorAll("[data-stage]");
const stages = {
  apart: {
    src: "plaque-separated.webp",
    alt: "The silver medal and blue backing shown before assembly",
  },
  joined: {
    src: "plaque.webp",
    alt: "The silver medal seated on the blue backing to form the completed plaque",
  },
};

for (const button of stageButtons) {
  button.addEventListener("click", () => {
    const stage = stages[button.dataset.stage];
    assemblyImage.src = stage.src;
    assemblyImage.alt = stage.alt;

    for (const stageButton of stageButtons) {
      stageButton.setAttribute("aria-pressed", String(stageButton === button));
    }
  });
}
