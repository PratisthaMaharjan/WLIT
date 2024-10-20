const display = document.getElementById("display");
const DEMO_URL = "https://jsonplaceholder.typicode.com/posts";

function fetchData(url, callback){
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {callback(data)})
        .catch((error)=> {console.log(error);})
}

function handleData(data){
    console.log("Recieved data");
    
    for (let x in data[0]) {
        const element = document.createElement("p");
        console.log(x, data[0].x, data[0]);
        element.textContent = `${x}: ${data[0][x]}`;
        display.appendChild(element);
    }
    
}

fetchData(DEMO_URL, handleData);

