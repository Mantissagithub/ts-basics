interface PersonInterface1 extends Nationality1{
    name : string;
    age : number;
}

interface Nationality1{
    country :string;
}

function greet2(Person : PersonInterface1) : string{
    return Person.name + Person.age + Person.country;
}

console.log(greet2({
    name : "Pradheep",
    age : 19,
    country : "India",
}))