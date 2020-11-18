const leftDiv = document.getElementById("left");
const rightDiv = document.getElementById("right");
const currentNumberElement = document.getElementById("currentNumber");
const format = new Intl.NumberFormat().format;

applyNumber();

function typeNumber(inputNumber) {
    currentNumberElement.textContent = currentNumberElement.textContent + inputNumber;
    applyNumber();
}

function deleteNumber() {
    currentNumberElement.textContent = currentNumberElement.textContent.substring(0, currentNumberElement.textContent.length - 1)
    applyNumber();
}

function addStatement(multiplier, input) {
    const answer = input * multiplier;
    const div = document.createElement("div");
    div.innerHTML = `${format(input)} x ${multiplier} = ${format(answer)}`;
    if (multiplier <= 10) {
        leftDiv.appendChild(div);
    } else {
        rightDiv.appendChild(div);
    }
}



function applyNumber() {
    leftDiv.textContent = " ";
    rightDiv.textContent = "";
    console.log(currentNumberElement.textContent);
    let input = currentNumberElement.textContent;
    if (!input) {
        input = 0
    }

    for (let multiplier = 1; multiplier <= 20; multiplier++) {
        addStatement(multiplier, input);
    }


}

