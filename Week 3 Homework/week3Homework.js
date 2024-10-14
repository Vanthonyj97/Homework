// Description

// Create an array of pizzaToppings with at least four different toppings
// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings
// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.
let pizzaToppings = ["pepperoni", "bacon", "green peppers", "chicken"];

function greetCustomer() {
  console.log("Welcome to Tinos Pizza, are toppings are: ");

  for (let topping of pizzaToppings) {
  message += `${topping}`;
}
greetCustomer();

function getPizzaOrder(size, crust, toppings) {
  let message = `One ${size} ${crust} pizza with `;

  for (let topping of pizzaToppings) {
    message += `${topping}`;
  }
  message += "... coming up!";

  console.log(message);
  return [size, crust, toppings];
}
getPizzaOrder("large", "stuffed", "pepperoni", "bacon");

function preparePizza([size, crust, toppings]) {
  console.log("...Cooking pizza...");

  return {
    size,
    crust,
    toppings
  };
}

function servePizza(pizza) {
  let size = "";
  if (pizza.size) {
    size = pizza.size;
  }

  let message = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;

  for (let topping of pizza.toppings) {
    message += `${topping},`;
  }

  message += "... Enjoy";

  console.log(message);

  return pizza;
}

const orderArray = getPizzaOrder("medium", "stuffed", "pepperoni", "bacon");
const orderObject = preparePizza(orderArray);
const orderSameObject = servePizza(orderObject);

servePizza(
  preparePizza(getPizzaOrder("medium", "stuffed", "pepperoni", "bacon"))
);
