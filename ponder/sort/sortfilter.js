/*This is a simple function to organize numbers in a list by smallest to largest. The function can be reused again and again*/
nums = [12, 10, 3];

console.log(nums.sort(compareFn));

function compareFn(a,b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
 return 0;
}

/*This sorts the items in a list. The default simpleList.sort() organizes by capital letters first and then lowercases.*/
const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

let simpleSort = simpleList.sort();

console.log(simpleSort);

/*This changes all list items to lowercase so that they can be sorted properly without worrying about the default cap vs no cap. b*/
let lowerList = simpleList.map(function(fruit) {
    return fruit.toLowerCase();
})

let lowerSort = lowerList.sort();
console.log(lowerSort);

/*This lets me search a list for particular characters.*/
let searchTerm = 'co';

let filterFruit = lowerSort.filter(searchFruit);

function searchFruit(item){
    return item.includes(searchTerm);
}

console.log(filterFruit);

/*sorts properties in an object array. Uses the compare function from earlier. Edited the function to compare the constant's price directly*/
function compareFn(a,b) {
  if (a.productName < b.productName) {
    return -1;
  } else if (a.productName > b.productName) {
    return 1;
  }
 return 0;
}

const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

let productSort = products.sort(compareFn);

console.log(productSort);

/*This has an array inside of each object.*/

const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];

/*This will search through the specified list*/
let query = 'ox';

let filteredList = animals.filter(searchList);

function searchList(item){
    return item.name.toLowerCase().includes(query.toLowerCase());
}

console.log(filteredList);

/*This will do the same as above but for a different search request. It uses .find to go through each trait in the list. */

let queryTrait = 'strong';

let filteredTraits = animals.filter(searchTraits);

function searchTraits(item){
    return item.traits.find((trait) => trait.toLowerCase().includes(queryTrait.toLowerCase()));
}

console.log(filteredTraits);


/*Part 2 */
