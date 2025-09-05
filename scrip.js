// misol-1

// function findShortestAndLongest(sentence) {
//     let words = sentence.split(" ");
//     let shortest = words.reduce((a, b) => (a.length <= b.length ? a : b));
//     let longest = words.reduce((a, b) => (a.length >= b.length ? a : b));

//     return { shortest, longest };
// }

// console.log(findShortestAndLongest("I love coding and football"));

// misol-2

// function reverseWord(word) {
//     return word.split("").reverse().join("");
// }

// console.log(reverseWord("javascript"));

// misol-3

// function reverseEachWord(sentence) {
//     return sentence
//         .split(" ")
//         .map((word) => word.split("").reverse().join(""))
//         .join(" ");
// }

// console.log(reverseEachWord("I love coding"));

// misol-4

// function lastWordLength(str) {
//     let words = str.trim().split(" ");
//     let lastWord = words[words.length - 1];
//     return lastWord.length;
// }

// console.log(lastWordLength("Javascript is one of the best coding language"));

// misol-5

// function findDuplicates(arr) {
//     return arr
//         .filter((item, index) => arr.indexOf(item) !== index)
//         .filter((value, index, self) => self.indexOf(value) === index);
// }

// console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 6, 3]));

// misol-6

// function removeSpaces(str) {
//     return str.split(" ").join("");
// }

// console.log(removeSpaces("Hello World! How are you"));

// misol-7

// function sumOfDigits(str) {
//     let sum = 0;
//     for (let char of str) {
//         if (!isNaN(char) && char !== " ") sum += Number(char);
//     }
//     return sum;
// }

// console.log(sumOfDigits("abc123def45"));
