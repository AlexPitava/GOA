// Me
let myInfo = {
    firstName: "Alex",
    lastName: "Pitava",
    age: 14,
    residence: "Tbilisi",
    school: "Gimnasium",
};

//family

let familyMembers = [
    {
        firstName: "Nino",
        lastName: "Kalandadze",
        age: 45
    },
    {
        firstName: "Gogita",
        lastName: "Pitava",
        age: 41
    }
];
 //weather

let weatherForecast = {
    location: "Tbilisi",
    temperature: 20,
    duration: "2 days",
    forecast: "Sunny with occasional clouds",
    conditions: "Mild"
};

console.log(weatherForecast + myInfo + familyMembers);
