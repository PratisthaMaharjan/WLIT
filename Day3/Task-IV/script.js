const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
const DEMO_URL = "https://jsonplaceholder.typicode.com/posts";

function fetchData(url, callback, dom){
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {callback(data, dom)})
        .catch((error)=> {console.log(error);})
}

async function fetchDataAsync(url, callback, dom){
    try {
        const info = await fetch(url);
        const data = await info.json();
        callback(data, dom);
    }
    catch ( err ) {
        console.log(err);
    }
}

function handleData(data, dom){
    console.log("Recieved data");
    
    for (let x in data[0]) {
        const element = document.createElement("p");
        console.log(x, data[0].x, data[0]);
        element.textContent = `${x}: ${data[0][x]}`;
        dom.appendChild(element);
    }
    
}

fetchData(DEMO_URL, handleData, display1);
fetchDataAsync(DEMO_URL, handleData, display2);

