// 1

function add(a,b){
    return a + b;
}
function multiply(a,b){
    return a * b;
}

// 2

function greet(name){
    return console.log("Hello " + name)
}

// 3

function numbers(a,b,c){
    return (a + b) * c
}

// 4

function evenOrOdd(a){
    if (a % 2 == 0){
        return console.log(a + "is an even number")
    }
    else{
        return console.log(a + "is an odd number")
    }
}

// 5

function triangle(a,b,c){
    if (a + b < c){
        return console.log("Proportions are off")
    } 
    if (b + c < a){
        return console.log("Proportions are off")
    }
    if (a + c < b){
        return console.log("Proportions are off")
    }
    else{
        return
    }
}

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "blue",
    start: function() {
      console.log("Start");
    },
    break: function() {
      console.log("Break");
    }
  };
  
  const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      console.log(this.firstName + " " + this.lastName);
    }
  };
  
