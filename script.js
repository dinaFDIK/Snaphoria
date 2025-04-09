const startButton = document.getElementById("startButton");
const container = document.querySelector(".container");
const photobooth = document.getElementById("photobooth");

startButton.addEventListener("click", () => {
    container.classList.add("hidden");
    photobooth.classList.remove("hidden");
});
