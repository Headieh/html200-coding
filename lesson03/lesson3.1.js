//Do a console log after each item

//Create an array, with at least 5 strings
let food = ['grains', 'vegetables', 'fruit', 'protein'];
console.log(food);
//Add an element to the end of the end of the array
food.push('dairy');
console.log(food);
//Remove the third element
food.splice(2, 1);
console.log(food);
//Create a string from the elements and comma separate them
const foodList = food.join(',');
console.log(foodList);