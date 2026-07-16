const cars = ["Mazda", "Seat", "BMW", "Subaru"];
let len = cars.length;

let text = "";
for (let i = 0; i < len; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
