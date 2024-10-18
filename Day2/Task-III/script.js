const animal = ["dogs", "cats", "rabbits", "mice"];

for (let x of animal) {
    let result = x.includes("a");
    console.log(`${x}: ${result}`);
}