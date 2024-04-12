// 1

const firstParagraph = document.getElementById('first');
const lastParagraph = document.getElementById('last');

console.log("First Paragraph:", firstParagraph.textContent);
console.log("Last Paragraph:", lastParagraph.textContent);

// 2

const myInfo = {
    name: "Alex",
    age: 14,
    hobby: "Playing piano",
    location: "Georgia, Tbilisi"
};

const friendInfo = {
    name: "Data",
    age: 15,
    hobby: "Dancing",
    location: "Georgia, Zugdidi"
};

console.log("Your Info:", myInfo);
console.log("Friend's Info:", friendInfo);

//3

const first = document.getElementById("p1")
const second = document.getElementById("p2")

function textSwap(){
    const Value = p1.textContent;
    p1.textContent = p2.textContent;
    p2.textContent = Value;
}
const button1 = document.getElementById('button1');
button1.addEventListener('click', textSwap);
