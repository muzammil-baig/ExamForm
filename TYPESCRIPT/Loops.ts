// var count: number = 0;
// while (count < 5) {
//     console.log("Count is:", count);
//     count++;  // Increment count to avoid infinite loop
// }



// for (let i = 0; i < 5; i++) {
//     console.log("Iteration:", i);
// }

// Basic Types
let message: string = "Hello, TypeScript!";
let count1: number = 42;
let isActive: boolean = true;
let notSure: any = "Could be anything";
let numbers: number[] = [1, 2, 3, 4, 5];

// Array of mixed types using tuple
let person: [string, number] = ["John", 30];

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Blue;

// Control Flow Statements
// 1. If-else
if (count1 > 40) {
    console.log("Count is greater than 40");
} else {
    console.log("Count is less than or equal to 40");
}

// 2. For loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 3. While loop
let index: number = 0;
while (index < 3) {
    console.log(`Index is ${index}`);
    index++;
}

// Functions
// Basic function with type annotations
function add(x: number, y: number): number {
    return x + y;
}

// Arrow function with optional parameter
const greet = (name: string, greeting?: string): string => {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
};

// Function with default parameter
function multiply(a: number, b: number = 1): number {
    return a * b;
}

// Interface
interface User {
    name: string;
    age: number;
    email?: string; // Optional property
}

// Function using interface
function createUser(user: User): void {
    console.log(`Created user ${user.name}`);
}

// Usage examples
console.log(add(5, 3));  // 8
console.log(greet("Alice")); // Hello, Alice!
console.log(greet("Bob", "Good morning")); // Good morning, Bob!
console.log(multiply(5)); // 5
console.log(multiply(5, 2)); // 10

createUser({
    name: "John Doe",
    age: 30,
    email: "john@example.com"
});