// var count: number = 0;
// while (count < 5) {
//     console.log("Count is:", count);
//     count++;  // Increment count to avoid infinite loop
// }
// for (let i = 0; i < 5; i++) {
//     console.log("Iteration:", i);
// }
// Basic Types
var message = "Hello, TypeScript!";
var count1 = 42;
var isActive = true;
var notSure = "Could be anything";
var numbers = [1, 2, 3, 4, 5];
// Array of mixed types using tuple
var person = ["John", 30];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Blue;
// Control Flow Statements
// 1. If-else
if (count1 > 40) {
    console.log("Count is greater than 40");
}
else {
    console.log("Count is less than or equal to 40");
}
// 2. For loop
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// 3. While loop
var index = 0;
while (index < 3) {
    console.log("Index is ".concat(index));
    index++;
}
// Functions
// Basic function with type annotations
function add(x, y) {
    return x + y;
}
// Arrow function with optional parameter
var greet = function (name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    return "Hello, ".concat(name, "!");
};
// Function with default parameter
function multiply(a, b) {
    if (b === void 0) { b = 1; }
    return a * b;
}
// Function using interface
function createUser(user) {
    console.log("Created user ".concat(user.name));
}
// Usage examples
console.log(add(5, 3)); // 8
console.log(greet("Alice")); // Hello, Alice!
console.log(greet("Bob", "Good morning")); // Good morning, Bob!
console.log(multiply(5)); // 5
console.log(multiply(5, 2)); // 10
createUser({
    name: "John Doe",
    age: 30,
    email: "john@example.com"
});
