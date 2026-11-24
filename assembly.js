const assemblyImage = document.querySelector("#assembly-image");
const assemblyBefore = document.querySelector("#assembly-before");
const stageButtons = document.querySelectorAll("[data-stage]");

for (const button of stageButtons) {
  button.addEventListener("click", () => {
    const isJoined = button.dataset.stage === "joined";
    assemblyBefore.hidden = isJoined;
    assemblyImage.hidden = !isJoined;

    for (const stageButton of stageButtons) {
      stageButton.setAttribute("aria-pressed", String(stageButton === button));
    }
  });
}
