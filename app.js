const cars = ["Mazda", "Seat", "BMW", "Ford"];
let len = cars.length;

let text = "";
for (let i = 0; i < len; i++) {
  text += cars[i] + "<br>";
}

const model = ["Mazda 3", "Seat Ibiza", "BMW", "Ford"];
let len2 = model.length;

let text2 = "";
for (let i = 0; i < len2; i++) {
  text2 += model[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
document.getElementById("demo2").innerHTML = text2;