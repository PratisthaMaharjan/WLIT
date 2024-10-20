// Using callback
function sumNatural(n, callback) {
    return new Promise((resolve, reject) =>{
        let sum = 0;
        if (n < 1)
            return reject("Error"); //parameter of reject will be argument for arrow function in catch.
        for (let i = 1; i <= n; i++)
            sum += i;
        resolve(sum); //parameter of resolve will be argument of successful callback.
    })
        .then(callback)
        .catch((err) => {
            console.log(err);
        })
    
}



/*------------------------------------------------------------------------------------------------*/

// Async/ await
async function sumNaturalAsync(n, callback) {
    try {
        const sumNum = await new Promise((resolve, reject) =>{
            let sum = 0;
            if (n < 1)
                return reject("Error"); 
            for (let i = 1; i <= n; i++)
                sum += i;
            resolve(sum); //parameter of resolve will be value stored in sumNum.
        });
        callback(sumNum);
    }
    catch (error) {
        console.log("Error");
    }
}

function getSumNaturalNum(sum){
    console.log("\nWithout using async/await");
    console.log(`Sum of natural number is ${sum}`);
}

function getSumNaturalNumAsync(sum){
    console.log("\nUsing async/await");
    console.log(`Sum of natural number is ${sum}`);
}

sumNatural(4, getSumNaturalNum);

sumNaturalAsync(4, getSumNaturalNumAsync);