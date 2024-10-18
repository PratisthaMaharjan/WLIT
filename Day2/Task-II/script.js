const bgcolor = document.getElementById("background")
const color = document.getElementById("color")
const content = document.getElementById("content")
const form = document.querySelector("form")
const divElement = document.getElementById("display")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    divElement.textContent = content.value;
    divElement.style.color = color.value;
    divElement.style.backgroundColor = bgcolor.value;
})