function greet1(Person) {
    return Person.name + Person.age + Person.country;
}
console.log(greet1({
    name: "Pradheep",
    age: 19,
    country: "India",
}));
