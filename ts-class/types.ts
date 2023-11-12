type Person = {
    name: string;
    age: number;
}

function greet(person: Person) {
    return "hi " + person.name + "yor age is " + person.age;
}

console.log(greet({
    name: "Pradheep",
    age: 19
}));
