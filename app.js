
let foods = [];

// Exercise 2
foods.unshift('pizza');
foods.push('cheeseburger');

console.log('Exercise 2 result:', foods);

let array = [2, 3, 4];
array.unshift(1); // Adds 1 to the beginning of the array
console.log('Exercise 2 bonus result:', array); // Output: [1, 2, 3, 4]

// Exercise 3
foods.unshift('taco');
console.log('Exercise 3 result:', foods);

// Exercise 4
let favFood = foods[0];
console.log('Exercise 4 result:', favFood);

// Exercise 5
foods.splice(1, 0, 'tofu');
console.log('Exercise 5 result:', foods);

// Exercise 6
foods.splice(0, 1, 'sushi', 'cupcake');
console.log('Exercise 6 result:', foods);

// Exercise 7
let yummy = foods.slice(0, 2);
console.log('Exercise 7 result:', yummy);

// Exercise 8
let soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);

// Exercise 9
let allFoods = foods.join(' -> ');
console.log('Exercise 9 result:', allFoods);

// Exercise 10
let hasSoup = foods.includes('soup');
console.log('Exercise 10 result:', hasSoup);

// Exercise 11
let nums1 = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]; // Rename to nums1
let odds = [];

nums1.forEach(num => {
    if (num % 2 !== 0) {
        odds.push(num);
    }
});

console.log('Exercise 11 result:', odds);

// Exercise 12
let nums2 = [3, 5, 15, 9, 25, 10, 30]; // Rename to nums2
let fizz = [];
let buzz = [];
let fizzbuzz = [];

nums2.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        fizzbuzz.push(num);
    } else if (num % 3 === 0) {
        fizz.push(num);
    } else if (num % 5 === 0) {
        buzz.push(num);
    }
});

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

// Exercise 13
let numArrays1 = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];

// Get the last nested array using negative indexing
const numList = numArrays1[numArrays1.length - 1];
console.log('Exercise 13 result:', numList);

// Exercise 14
const numArrays2 = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];

const num = numArrays2[2][1];
console.log('Exercise 14 result:', num);

// Exercise 15
const numArrays3 = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];

let total = 0;

for (let i = 0; i < numArrays3.length; i++) {
    for (let j = 0; j < numArrays3[i].length; j++) {
        total += numArrays3[i][j];
    }
}

console.log('Exercise 15 result:\n', total);
