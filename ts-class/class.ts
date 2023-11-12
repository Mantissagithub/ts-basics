interface PersonInterface{
    name : string;
    age : number;
    nation : Nationality;
}

interface Nationality{
    country :string;
}

function greet1(Person : PersonInterface){
    return Person.name + Person.age + Person.nation.country;
}

console.log(greet1({
    name : "Pradheep",
    age : 19,
    nation : {
        country : "India",
    }
}))