/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  // Put your solution here
 if (!Array.isArray(caze)) {
    caze = [caze];
  }

  const firstPriority = ["camel", "pascal", "snake", "kebab", "title"];
  const secondPriority = ["vowel", "consonant"];
  const thirdPriority = ["upper", "lower"];

  let result = input;

  const applyCaze = (style) => {

    const words = result.split(" ");

    switch (style) {

      case "camel":
        result = words
          .map((word, index) =>
            index === 0
              ? word.toLowerCase()
              : word[0].toUpperCase() + word.slice(1).toLowerCase()
          )
          .join("");
        break;

      case "pascal":
        result = words
          .map(word =>
            word[0].toUpperCase() + word.slice(1).toLowerCase()
          )
          .join("");
        break;

      case "snake":
        result = words.join("_");
        break;

      case "kebab":
        result = words.join("-");
        break;

      case "title":
        result = words
          .map(word =>
            word[0].toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ");
        break;

      case "vowel":
        result = result.replace(/[aeiou]/gi, char =>
          char.toUpperCase()
        );
        break;

      case "consonant":
        result = result.replace(/[^aeiou\s]/gi, char =>
          char.toUpperCase()
        );
        break;

      case "upper":
        result = result.toUpperCase();
        break;

      case "lower":
        result = result.toLowerCase();
        break;
    }
  };

  // 1️⃣ first priority
  for (const style of firstPriority) {
    if (caze.includes(style)) {
      applyCaze(style);
    }
  }

  // 2️⃣ second priority
  for (const style of secondPriority) {
    if (caze.includes(style)) {
      applyCaze(style);
    }
  }

  // 3️⃣ third priority
  for (const style of thirdPriority) {
    if (caze.includes(style)) {
      applyCaze(style);
    }
  }

  return result;
};

// Space Complexity: ?? O(R*n) ; R is the size of array caze,;
// Time Complexity: O(n) n is the size of string input;

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
