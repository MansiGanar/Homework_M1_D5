/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR CODE HERE */

function area(a, b) {
  console.log(a * b); // Area of rectangleis a * b
}

// area(11,12)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR CODE HERE */

function crazySum(c, d) {
  if (c === d) {
    console.log((c + d) * 3);
  } else {
    console.log(c + d);
  }
}
// crazySum(1,1)

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR CODE HERE */

function crazyDiff(numb) {
  if (numb <= 19) {
    console.log(19 - numb);
  } else {
    console.log((numb - 19) * 3);
  }
}
// crazyDiff(20)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

/* WRITE YOUR CODE HERE */

function boundary(number) {
  switch (number) {
    case number >= 20 && number <= 100:
      console.log("ITs first true");
      break;

    case number === 400:
      console.log("its second true");
      break;

    default:
      console.log(false);
      break;
  }
}

boundary(50);

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */

function strivify(name) {
  if (name !== "Strive") console.log(name + " Strive");
  else {
    console.log(name);
  }
}
strivify("Strive");

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

function check3and7(number) {
  if (number % 3 == 0 || number % 7 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
// check3and7(5)

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

function reverseString(string) {
  const reverseArray = [];
  const length = string.length - 1;

  for (let i = length; i >= 0; i--) {
    reverseArray.push(string[i]);
  }
  return reverseArray.join("");
}
// console.log(reverseString("Strive"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */

function upperFirst(stringUpperCase) {
  let capitalizedstring = stringUpperCase.toLowerCase().split(" ");

  for (let i = 0; i < capitalizedstring.length; i++) {
    capitalizedstring[i] =
      capitalizedstring[i].charAt(0).toUpperCase() +
      capitalizedstring[i].substring(1);
  }
  // Directly return the joined string
  return capitalizedstring.join(" ");
}
// console.log(upperFirst("my name is mansi"))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

function cutString(newString) {
  console.log(newString.substring(1, newString.length - 1));
}
// cutString('MANSI')

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

function giveMeRandom(n) {
  console.log(Math.floor(Math.random() * n));
}
// giveMeRandom(11);
