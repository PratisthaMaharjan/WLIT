const animal = ["dogs", "cats", "rabbits", "mice"];

for (let x of animal) {
    let result = x.includes("a");
    console.log(`${x}: ${result}`);
}

const newAnimal = animal.filter((name) => {
    return !name.includes("a");
});

console.log(newAnimal);