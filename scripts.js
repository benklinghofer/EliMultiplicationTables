const box = document.getElementById("box");
const leftDiv = document.getElementById("left");
const rightDiv = document.getElementById("right");
console.log(box);
const format = new Intl.NumberFormat().format;

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
    console.log(box.value);
    let input = box.value;
    if (!input) {
        input = 0
    }

    for (let multiplier = 1; multiplier <= 20; multiplier++) {
        addStatement(multiplier, input);
    }


}

