function greet(Person) {
    return Person.name + Person.age + Person.nation.country;
}
console.log(greet({
    name: "Pradheep",
    age: 19,
    nation: {
        country: "India",
    }
}));
