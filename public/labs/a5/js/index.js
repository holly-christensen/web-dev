// ALERTS AND CONSOLE
alert("Hello World! This is an alert from loading an external js file.");
console.log("Hello World! Writing to console. ");

// VARIABLES AND CONSTANTS
console.log("Variables and Constants");
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped - blockScoped;
console.log(`${global1} \n${functionScoped} \n${blockScoped} \n${constant1}`);

// VARIABLE TYPES
console.log("Variable types");
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = "Hello World!";
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
console.log(
  `${numberVariable} \n${floatingPointNumber} \n${stringVariable} \n${booleanVariable} \n${isNumber} \n${isString} \n${isBoolean}`
);

// BOOLEAN VARIABLES
console.log("Boolean Variables");
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
console.log(
  `${true1} \n${false1} \n${false2} \n${true2} \n${true3} \n${true4} \n${true5} \n${false3}`
);

// CONDITIONALS
console.log("If else");
if (true1) {
  console.log(true);
}
if (!false1) {
  console.log("!false1");
} else {
  console.log("false1");
}

// TERNARY CONDITIONAL OPERATOR
const loggedInTernary = true;
const greeting = loggedInTernary ? "Welcome!" : "Please login";
console.log(greeting);

// FUNCTIONS
console.log("Legacy ES5 Function");
function add(a, b) {
  return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

console.log("New ES6 Functions");
const subtract = (a, b) => {
  return a - b;
};
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

console.log("Implied Return");
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

console.log("Parentheses and Parameters");
const square = (a) => a * a;
const plusOne = (a) => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

// ARRAYS
console.log("Arrays");
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ["string1", "string2"];
let variableArray1 = [
  functionScoped,
  blockScoped,
  constant1,
  numberArray1,
  stringArray1,
];
console.log(`(${numberArray1.length}) [${numberArray1}]`);
console.log(`(${stringArray1.length}) [${stringArray1}]`);
for (let i = 0; i < variableArray1.length; i++) {
  if (variableArray1[i].length > 1) {
    console.log(`${i}: (${variableArray1[i].length}) [${variableArray1[i]}]`);
  } else {
    console.log(`${i}: ${variableArray1[i]}`);
  }
}

// ARRAY INDEX AND LENGTH
console.log("Array Index and Length");
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log(`${length1} \n${index1}`);

console.log("Adding and Removing Data to/from Arrays");
// adding new items
numberArray1.push(6);
stringArray1.push("string3");

// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

// FOR LOOPS
console.log("For Loops");
for (let i = 0; i < stringArray1.length; i++) {
  const string1 = stringArray1[i];
  console.log(string1);
}

// MAP FUNCTION
console.log("Map Function");
const squares = numberArray1.map(square);
const cubes = numberArray1.map((a) => a * a * a);
const printArray = (arrayToPrint) => {
  for (let i = 0; i < arrayToPrint.length; i++) {
    console.log(`(${arrayToPrint.length}) [${arrayToPrint}]`);
  }
};
printArray(numberArray1);
printArray(squares);
printArray(cubes);

// FIND FUNCTION
console.log("Find Function");
const four = numberArray1.find((a) => a === 4);
const string3 = stringArray1.find((a) => a === "string3");
console.log(`${four} \n${string3}`);

// FIND INDEX FUNCTION
console.log("Find Index");
const fourIndex = numberArray1.findIndex((a) => a === 4);
const string3Index = stringArray1.findIndex((a) => a === "string3");
console.log(`${fourIndex} \n${string3Index}`);

// FILTER FUNCTION
const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);
printArray(numbersGreaterThan2);
printArray(evenNumbers);
printArray(oddNumbers);

// TEMPLATE STRINGS
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

const loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;

// JQUERY
const init = () => {
  console.log("Hello world from jQuery");

  // BINDING TO THE DOM
  const bindById = $("#bind-by-id");
  const bindByClass = $(".bind-by-class");
  console.log("Binding to DOM");
  console.log(bindById);
  console.log(bindByClass);

  // CHANGING STYLE PROGRAMMATICALLY
  const changeStyle = $("#change-style");
  const changeStyle2 = $(".change-style");
  changeStyle.css("color", "red");
  changeStyle2.css("color", "blue");

  // GETTING AND SETTING ATTRIBUTES
  const getIdAttr = $("#get-id-attr");
  const id = getIdAttr.attr("id");
  console.log(id);

  const setClassAttr = $("#set-class-attr");
  setClassAttr.attr("class", "class-0");

  // ADDING AND REMOVING CLASSES
  const addClass1Example = $("#add-class-1");
  addClass1Example.addClass("class-1");
  const removeClass1Example = $("#remove-class-1");

  // HIDING AND SHOWING CONTENT
  const hideMe = $("#hide-me");
  hideMe.hide();
  const showMe = $("#show-me");
  showMe.show();

  // CREATING NEW ELEMENTS
  const newLineItem = $("<li>Line item 1</li>");
  const anotherLineItem = $("<li>Line item 2</li>");

  // APPENDING NEW ELEMENTS
  const ul = $("#append-new-elements");
  ul.append(newLineItem);
  ul.append(anotherLineItem);

  // REMOVING AND EMPTYING CONTENT
  const removeThisLi = $("#remove-this");
  const emptyThisUl = $("#empty-this");
  removeThisLi.remove();
  emptyThisUl.empty();

  // CHANGING CONTENT
  const changeThisText = $("#change-this-text");
  const changeThisHtml = $("#change-this-html");
  changeThisText.html("New text");
  changeThisHtml.html(`
    <li>Line item A</li>
    <li>Line item B</li>
    <li>Line item C</li>
`);

  // NAVIGATING UP AND DOWN THE DOM HIERARCHY
  const child2 = $("#child-2");
  const parent1 = child2.parents("#parent");
  parent1.css("background-color", "red").css("color", "white");

  const parent = $("#parent");
  const child = parent.find("#child-2");
  child.css("background-color", "blue");

  // HANDLING CLICK EVENTS
  const handleClick = () => console.log("Handle click");
  const clickable = $(".clickable");
  clickable.click(handleClick);

  // EVENT TARGET
  const handleEventTarget = (event) => {
    const target = event.target;
    console.log(target);
    $(target).css("background-color", "blue").css("color", "white");
  };
  const eventTarget = $("#event-target");
  eventTarget.click(handleEventTarget);

  // HIDING AND SHOWING CONTENT
  let hideBtn, showBtn, hideShowHeader;
  hideBtn = $("#hide");
  showBtn = $("#show");
  hideShowHeader = $("#hide-show");
  const hideHandler = () => {
    hideShowHeader.hide();
  };
  const showHandler = () => {
    hideShowHeader.show();
  };
  hideBtn.click(hideHandler);
  showBtn.click(showHandler);
};
$(init);
