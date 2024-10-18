const button = document.querySelector("button");
const input = document.querySelector("input");

function palin(str) {
    for (let i = 0; i<str.length/2; i++) {
        if (str[i] != str[str.length-1-i])
            return false;
    }
    return true;
}


button.addEventListener("click", () => {
    let result = palin(input.value);
    const element = document.createElement("div");
    element.textContent = `${input.value} : ${result? "Palindrome" : "Not palindrome"}`;
    document.body.appendChild(element);
});
