// In JS Objects are in key-value pair
var person = {
  firstName: "Priyansu",
  LastName: "Sahoo",
  age: 22,
  ownsCar: false,
};

console.log("object =", person);

// dot notation
console.log("Accessing using dot notation :", person.age);

// bracket notation
console.log("Accessing using bracket notation :", person["age"]);

// Objects for captain-America
/**
 * Nested-objects
 * Arrays inside objects
 */
var cap = {
  firstName: "Steve",
  lastName: "Rogers",
  age: 102,

  isAvenger: true,
  friends: ["Bruce Banner", "Tony", "Bucky"],

  address: {
    state: "Odisha",
    city: {
      name: "Bhubaneswar",
      pincode: 123456,
    },
  },
};

console.log(cap.friends[1]); // Tony
console.log("Name of the city :", cap.address.city.name); // Bhubaneswar

// Update value in onjects
cap.isAvenger = false;

console.log(cap);

// Add properties
cap.movies = ["age of ultron", "Civil War", "First avenger"];
console.log(cap);

// Delete properties
delete cap.age;
console.log(cap);
