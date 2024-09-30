const pizzaPlace = "Tinos";
let numberOfToppings = 4;
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

console.log(
  `Welcome to ${pizzaPlace}, we have the best crusted pizza in town.`
);
if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
