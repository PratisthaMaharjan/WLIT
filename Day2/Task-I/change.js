const color = document.getElementById("color");
const change = document.getElementById("change");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    change.style.backgroundColor = color.value;
})