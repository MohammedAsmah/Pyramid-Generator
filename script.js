const character = "#";
const count = 10;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
    if(i===count){inverted=false;
    i=1}
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}



for(i=1;i<=22;i++){
    let My_pyramid = document.createElement("div");
    My_pyramid.innerHTML = `<pre>${result}</pre>`;
    document.body.appendChild(My_pyramid);
}

