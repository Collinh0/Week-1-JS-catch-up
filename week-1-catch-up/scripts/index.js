/**
 * Syntax -> rules associated withb a progrsamming language
 * Variables -> containers for storing values for later retrieval
 *
 * Rules:
 *  1. declaration
 *  2. we should use the camelCase naming convention
 *  3. we shouold use let and const and not var
 *  4. dont use keywords
 *  5. JS is  case sensitive (always start your variables with a small later)
 *  6. Always default to using const unless the value might change,use let.never use var.
 */

//declaration,where when using const,you have to declare and assign a value
//immediately -> immutable
const nationalId = "39070309";

//let allows us to reassign the values -> mutable
let age = 18;

//reassignment
age = 19;

/**
 * Datatypes ->allow us to represent real world data in programming language
 * numbers,strings,boolean,undefined,null:primitive
 * objects,arrays:non-primitive
 */

const firstName = "Tony";
const lastName = "Stark";
const fullName = `Tony Stark`;

//string concatenation -> combining one or more strings using the + operator
const name = "Collo";
console.log(name + "Martial");

//string interpolation -> inserting a value(s) into strings
console.log(`${firstName} ${lastName},${100 - 45}`);

//numbers ->
console.log(typeof 12);
console.log(20 + 20);

/**Booleans -> true/false
 *
 * any expression that evaluates true/false
 * 1. Comparison -> 9 (===, !==, !=)
 * strict operators-they compare the value and datatypes while loose compare values only
 *
 * 2.Logical -> (!!, !, &&, ||)
 *
 * 3.Number -> (<,>>=,=<)
 *
 *
 */

console.log(2 == "2");
console.log(2 != "2") * //shortcut to Boolean constructer(Boolean())
  //double banh=g (!!) converts other data types to Boolean
  console.log(Boolean(null));
console.log(!!"");

//Bang (!) operator returns the opposite
console.log(!true);
console.log(!false);

// AND (&&) and OR (||) allow us to combine boolean expressions
//for the AND, every every expression has to evaluate to true in order for the entire expression to be true
//for the OR only one of the expressions needs to be true in order for the entire expression to be true
console.log((2 === 2 && 2 == "2") || 2 !== 3);

//NOR
/**
 * Statements
 *
 * Default sequence -> left to right,top to bottom
 *
 * 1.Selection -> (if, switch)
 * 2.Repetition -> (do/while, while)
 */

const num = 18;
if (num > 18) {
  console.log("can go out");
} else {
  console.log("cannot go out");
}
//ternary operator -> short hand for if/else
const message = num > 18 ? "can go out" : "cannot go out";
console.log(message);

//sitch operator (😂error 404)

//Repetition
let count = 5;
while (count <= 5) {
  console.log("code being repeated");
  count++; //count = count + 1
}
console.log(count);

//do/while -> runs at least once
let countTwo = 7;
do {
  console.log("Running");
  countTwo++;
} while (countTwo < 5);

console.log(countTwo);

//null -> intentionally represent an absent value, whose value can be assigned later on

//undefined -> not yet  assigned to any value

//arrays -> list of vales,we use the square brackets
//The values can be of any data type
const students = ["Jeff", "Dennis", 34];

//objects->collectionn of related data consisting of key/values pairs called properties and are separated by a comma
const user = {
  name: "Jane Doe",
};
