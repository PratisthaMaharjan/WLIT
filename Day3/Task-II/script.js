const DEMO_URL = "https://jsonplaceholder.typicode.com/posts"

function fetchData(url, callback){
    fetch(url).then((response) => {
        console.log(response);
        return response.json();
    })
        .then((data) => {callback(data)})
        .catch((error)=> {console.log(error);})
}

function handleData(data){
    console.log("Recieved data id and title");
    for (let x of data){
        console.log(x.id, x.title);
    }
}

fetchData(DEMO_URL, handleData);