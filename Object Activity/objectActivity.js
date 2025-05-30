// Create an object
let car = {
  type: "sedan",
  model: "Corolla",
  color: "blue"
};

// Check type of object
console.log("Type of car object:", typeof car);

// Update type property
car.type = "Toyota";
console.log("Updated car (type changed):", car);

// Add new property: wheels
car.wheels = 4;
console.log("Updated car (added wheels):", car);