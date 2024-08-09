document.getElementById('compareForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    const isGreaterThan = number1 > number2;
    const isLessThan = number1 < number2;
    const isEqual = number1 === number2;

    console.log(`Is Number 1 greater than Number 2? ${isGreaterThan}`);
    console.log(`Is Number 1 less than Number 2? ${isLessThan}`);
    console.log(`Is Number 1 equal to Number 2? ${isEqual}`);

    displayResult(isGreaterThan, isLessThan, isEqual);
});

function displayResult(isGreaterThan, isLessThan, isEqual) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Is Number 1 greater than Number 2? ${isGreaterThan}</p>
        <p>Is Number 1 less than Number 2? ${isLessThan}</p>
        <p>Is Number 1 equal to Number 2? ${isEqual}</p>
    `;
}