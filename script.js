const btnElement = document.querySelector("button");
const spanElement = document.querySelector("span");

btnElement.addEventListener("click", () => {
    const yourName = prompt("Type in name:")
    spanElement.textContent = yourName;
});