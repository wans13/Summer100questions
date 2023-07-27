//1
function createArray() {
  return ["red", "blue", "green"];
}

//2
function getFirstElement(array) {
  return array[0];
}

//3
function changeThirdElement(array, newElement) {
  array[2] = newElement;
  return array;
}

//4
function getArrayLength(array) {
  return array.length;
}

//5
function getLastElement(array) {
  return array[array.length - 1];
}

//6
function addElement(array, element) {
  array.push(element);
  return array;
}

//7
function removeLastElement(array) {
  array.pop();
  return array;
}

//8
function concatenateArrays(array1, array2) {
  array2.forEach(function (item) {
    array1.push(item);
  });
  return array1;
}

//9
function findInArray(array, element) {
  if (array.indexOf(element) >= 0) {
    return true;
  } else {
    return false;
  }
}
//10
function filterGreaterThanFive(array) {
  const filter = (n) => {
    return n > 5;
  };
  array = array.filter(filter);
  return array;
}

//11
function sumArray(array) {
  let sum = 0;
  array.forEach(function (n) {
    sum = sum + n;
    return sum;
  });
  return sum;
}

//12
function sortArray(array) {
  return array.sort((a, b) => a - b);
}

//13
function reverseArray(array) {
  return array.reverse();
}

//14
function doubleArray(array) {
  return array.map(function (n) {
    return n * 2;
  });
}

//15
function multiplyArray(array) {
  let product = 1;
  array.forEach(function (n) {
    product = product * n;
  });
  return product;
}

//16
function countOccurrences(array, element) {
  const occurrence = (item) => {
    return item == element;
  };
  array = array.filter(occurrence);
  return array.length;
}

//17
function getNames(array) {
  const names = array.map(function (person) {
    return person.name;
  });
  return names;
}

//18
function removeElement(array, index) {
  array.splice(index, 1);
  return array;
}

//19
function mergeArrays(array1, array2) {
  array2.forEach(function (item) {
    array1.push(item);
  });
  array3 = [];
  duplicates = [];
  array1.forEach(function (item) {
    if (array3.indexOf(item) > -1) {
      duplicates.push(item);
    }
    array3.push(item);
  });
  duplicates.forEach(function (item) {
    array1.splice(array1.indexOf(item), 1);
  });
  return array1;
}

//20
function sumEvenNumbers(array) {
  const evenFilter = (n) => {
    return n % 2 == 0;
  };
  array = array.filter(evenFilter);
  return sumArray(array);
}

//21
function fillArray(n, element) {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(element);
  }
  return array;
}

//22
function createRange(start, end) {
  const array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

//23
function arraysEqual(array1, array2) {
  let n = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
    } else {
      return false;
    }
  }
  return true;
}

//24
function countArrayElements(array) {
  const object = {};
  array.forEach(function (item) {
    object[item] = 0;
  });
  array.forEach(function (item) {
    object[item] += 1;
  });
  return object;
}

//25
function shuffleArray(array) {
  const swap = (array, a, b) => {
    let c = array[a];
    array[a] = array[b];
    array[b] = c;
  };
  for (let i = 0; i < array.length / 2; i++) {
    let a = Math.floor(Math.random() * 5);
    let b = Math.floor(Math.random() * 5);
    a != b;
    swap(array, a, b);
  }
  return array;
}

//26
function filterStrings(array) {
  const filter = (item) => {
    return typeof item !== "string";
  };
  return array.filter(filter);
}

//27
function findIndex(array, element) {
  if (array.indexOf(element) == -1) {
    return "Element not found";
  }
  return array.indexOf(element);
}

//28
function findMax(array) {
  sortArray(array);
  return array[array.length - 1];
}

//29
function deepCopy(array) {
  return array;
}

//30
function flatten(array) {
  for (let i = 1; i < array.length; i++) {
    array[i].forEach(function (item) {
      array[0].push(item);
    });
  }
  return array[0];
}

//31
function getIntersection(array1, array2) {
  array2.forEach(function (item) {
    array1.push(item);
  });
  array3 = [];
  duplicates = [];
  array1.forEach(function (item) {
    if (array3.indexOf(item) > -1) {
      duplicates.push(item);
    }
    array3.push(item);
  });
  return duplicates;
}

//32
function getUniqueElements(array) {
  array3 = [];
  duplicates = [];
  array.forEach(function (item) {
    if (array3.indexOf(item) > -1) {
      duplicates.push(item);
    }
    array3.push(item);
  });
  duplicates.forEach(function (item) {
    array.splice(array.indexOf(item), 1);
  });
  return array;
}

//33
function getDifference(array1, array2) {
  const array3 = [];
  array2.forEach(function (item) {
    if (array1.indexOf(item) == -1) {
      array3.push(item);
    }
  });
  return array3;
}

//34
function removeElement(array, element) {
  if (array.indexOf(element) == -1) {
    return "Element not found";
  }
  array.splice(array.indexOf(element), 1);
  return array;
}

//35
function sumElements(array) {
  let sum = 0;
  array.forEach(function (n) {
    sum = sum + n;
  });
  return sum;
}

//36
function replaceElement(array, element, newElement) {
  if (array.indexOf(element) == -1) {
    return "Element not found";
  }
  array[array.indexOf(element)] = newElement;
  return array;
}

//37
function largestNumbers(array) {
  array = array.map(function (array) {
    return findMax(array);
  });
  return array;
}

//38
function stringsLength(array) {
  array = array.map(function (string) {
    return string.length;
  });
  return array;
}

//39
function findLongestString(array) {
  let n = -Infinity;
  let string = "";
  array.forEach(function (item) {
    if (item.length > n) {
      n = item.length;
      string = item;
    }
  });
  return string;
}

//40
function oddPositionElements(array) {
  const filter = (item) => {
    if (array.indexOf(item) % 2 == 1) {
      return item;
    }
  };
  return array.filter(filter);
}

//41
function calculateAverage(array) {
  let n = sumArray(array);
  return n / array.length;
}

//42 (we already did this question lmao!)
function ConcatenateArrays(array1, array2) {
  return concatenateArrays(array1, array2);
}

//43
function findSecondLowest(array) {
  const findLowest = (Array) => {
    let n = Infinity;
    Array.forEach(function (item) {
      if (item < n) {
        n = item;
      }
    });
    return n;
  };
  array.splice(array.indexOf(findLowest(array)), 1);
  return findLowest(array);
}

//44
function findSecondLargest(array) {
  array.splice(array.indexOf(findMax(array)), 1);
  return findMax(array);
}

//45
function isPalindrome(array) {
  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] == array[array.length - 1 - i]) {
    } else {
      return false;
    }
  }
  return true;
}

//46
function removeFalsy(array) {
  const filter = (item) => {
    if (
      item !== false &&
      item !== null &&
      item !== undefined &&
      item !== 0 &&
      item !== NaN &&
      item !== 0
    ) {
      return item;
    }
  };
  return array.filter(filter);
}

//47 (thanks for the free question)
function SortArray(array) {
  sortArray(array);
}

//48
function reverseString(array) {
  array.reverse();
}

//49
function compareNumbers(a, b) {
  return a - b;
}

//50
function findByProperty(array, prop, value) {
  props = array.map(function (object) {
    return object[prop];
  });
  return array[props.indexOf(value)];
}

//51
function sqrtArray(array) {
  return array.map(function (n) {
    return Math.sqrt(n);
  });
}

//52
function includesElement(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      return true;
    }
  }
  return false;
}

//53
function allSame(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[0]) {
    } else {
      return false;
    }
  }
  return true;
}

//54
function factorialize(num) {
  let n = 1;
  for (let i = 1; i <= num; i++) {
    n = n * i;
  }
  return n;
}

//55
function findIndexOfSmallest(array) {
  let n = Infinity;
  array.forEach(function (item) {
    if (item < n) {
      n = item;
    }
  });
  return array.indexOf(n);
}

//56
function symmetricDifference(array1, array2) {
  let array3 =
    getDifference(array2, array1) + "," + getDifference(array1, array2);
  array3 = array3.split(",");
  return array3.map((item) => {
    return Number(item);
  });
  //alternative solution vvv
  //   array2.forEach(function (item) {
  //     array1.push(item);
  //   });
  //   array3 = [];
  //   reoccurrences = [];
  //   array1.forEach(function (item) {
  //     if (array3.indexOf(item) > -1) {
  //       reoccurrences.push(item);
  //     }
  //     array3.push(item);
  //   });
  //   for (let index = 0; index < reoccurrences.length; index++) {
  //     reoccurrences.forEach(function (item) {
  //       array1.splice(array1.indexOf(item), 1);
  //     });
  //   }
  //   return array1;
}

//57
function filterByWordLength(array, length) {
  const filter = (item) => {
    if (item.length == length) {
      return item;
    }
  };
  return array.filter(filter);
}

//58
function mapStringLengths(array) {
  return array.map((item) => {
    return item.length;
  });
}

//59
function sumFibs(num) {
  fibonacciSequence = [0];
  n = 1;
  oddFibs = [];
  let sum = 0;
  for (let i = 1; i < num; i++) {
    fibonacciSequence.push(n);
    if (n % 2 == 1) {
      oddFibs.push(n);
    }
    n = fibonacciSequence[i] + fibonacciSequence[i - 1];
  }
  for (let i = 0; i < oddFibs.length; i++) {
    if (sum + oddFibs[i] > num) {
      break;
    }
    sum = oddFibs[i] + sum;
  }
  return sum;
}

//60
function sumPrimes(num) {
  const primes = [];
  const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  };
  for (let i = 2; i < num; i++) {
    if (isPrime(i) == true) {
      primes.push(i);
    }
  }
  return sumArray(primes);
}

//61
function getPrimes(array) {
  const primes = [];
  const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  };
  array.forEach(function (n) {
    if (isPrime(n) == true && n !== 1) primes.push(n);
  });
  return primes;
}

//62        Silly repeat question
function Flatten(array) {
  return flatten(array);
}

//63
function filterArray(array, callback) {
  return array.filter(callback);
}

//64
function isSorted(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
    } else return false;
  }
  return true;
}

//65
function multiplyArray(array, multiplier) {
  return array.map(function (n) {
    return n * multiplier;
  });
}

//66
function countInstances(array, value) {
  let i = 0;
  array.forEach(function (item) {
    if (item == value) {
      i++;
    }
  });
  return i;
}

//67
function MergeArrays(arr1, arr2) {
  return concatenateArrays(arr1, arr2).sort((a, b) => a - b);
}

//68
function shiftElements(array) {
  a = array.shift();
  array.push(a);
  return array;
}

//69
function CountOccurrences(array) {
  return countArrayElements(array);
}

//70
function spliceAndSlice(array, index, amount, insert) {
  array.splice(index, amount);
  a = array.splice(index);
  insert.forEach(function (item) {
    array.push(item);
  });
  a.forEach(function (item) {
    array.push(item);
  });
  return array;
}

//71        too silly
function CreateRange(start, end) {
  return createRange(start, end);
}

//72       💀
function lastElement(array) {
  return getLastElement(array);
}

//73
function uniqueValues(array) {
  return getUniqueElements(array);
}

//74
function repeatString(string, times) {
  let a = "";
  for (let i = 0; i < times; i++) {
    a = a + string;
  }
  return a;
}

//75
function isPalindromeString(string) {
  return isPalindrome(string);
}

//76
function pigLatin(string) {
  words = string.split(" ");
  PLstring = words.map(function (item) {
    return item.slice(1) + item[0] + "ay";
  });
  return PLstring.join(" ");
}

//77
function longestString(array) {
  return findLongestString(array);
}

//78
function findAverage(array) {
  return calculateAverage(array);
}

//79
function findMissing(array) {
  let n = array[0];
  for (let i = 0; i < array.length; i++) {
    if (n !== array[i]) {
      return n;
    }
    n++;
  }
}

//80
function largestInSubArray(array) {
  return largestNumbers(array);
}

//81
function reverseInPlace(array) {
  return array.reverse();
}

//82
function sumAll(array) {
  return sumArray(array);
}

//83
function findLongestWordLength(string) {
  const words = string.split(" ");
  return findLongestString(words).length;
}

//84
function ReplaceElement(array, element, replacement) {
  return replaceElement(array, element, replacement);
}

//85
function squareInPlace(array) {
  return array.map(function (n) {
    return n * n;
  });
}

//86
function FindMax(array) {
  return findMax(array);
}

//87
function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

//88
function caesarCipher(text, shift) {
  while (shift > 26) {
    shift = shift - 26;
  }
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const ALPHABET = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const letters = text.split("");
  cipher = letters.map(function (letter) {
    if (letter == " ") return " ";
    if (alphabet.indexOf(letter) > -1) {
      return alphabet[alphabet.indexOf(letter) + shift];
    } else return ALPHABET[ALPHABET.indexOf(letter) + shift];
  });
  return cipher.join("");
}

//89
function titleCase(sentence) {
  words = sentence.split(" ");
  uppercaseWords = words.map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  });
  return uppercaseWords.join(" ");
}

//90
function countCards(cardSequence) {
  const highCards = ["10", "J", "Q", "K", "A"];
  const lowCards = ["2", "3", "4", "5", "6"];
  let count = 0;
  cardSequence.forEach(function (card) {
    if (highCards.indexOf(card) > -1) {
      count--;
    }
    if (lowCards.indexOf(card) > -1) {
      count++;
    }
    console.log(card);
    console.log(count);
  });
  if (count > -1) {
    return `${count} Hit`;
  } else return `${count} Hold`;
}

//91
function validateUSTelephoneNumber(number) {
  const splitNumber = number.split("-");
  if (
    splitNumber[0].length == 3 &&
    splitNumber[1].length == 3 &&
    splitNumber[2].length == 4 &&
    splitNumber.length == 3
  ) {
    return true;
  } else return false;
}

//92
function pairElement(str) {
  const elements = str.split("");
  return elements.map(function (element) {
    if (element == "G") {
      return ["G", "C"];
    }
    if (element == "C") {
      return ["C", "G"];
    }
    if (element == "A") {
      return ["A", "T"];
    }
    if (element == "T") {
      return ["T", "A"];
    }
  });
}

//93
function missingLetters(str) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const range = alphabet.slice(0, alphabet.indexOf(str[str.length - 1]));
  for (let i = 0; i < range.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (range[i] == str[j]) {
        range.splice(i, 1);
      }
    }
  }
  return range.join(",");
}

//94
function uniteUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    Array.from(arr[i]).forEach(function (item) {
      arr.push(item);
    });
  }
  arr.splice(0, 3);
  let array3 = [];
  for (let i = 0; i < arr.length; i++) {
    if (array3.indexOf(arr[i]) !== -1) {
      arr.splice(i, 1);
      i--;
    }
    array3.push(arr[i]);
  }
  return arr;
}

//95
function convertEntities(str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "&") {
      str[i] = "&amp;";
    }
    if (str[i] == "<") {
      str[i] = "&lt;";
    }
    if (str[i] == ">") {
      str[i] = "&gt;";
    }
    if (str[i] == '"') {
      str[i] = "&quot;";
    }
    if (str[i] == "'") {
      str[i] = "&apos;";
    }
  }
  return str.join("");
}

//96
function spinalCase(str) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].toLowerCase();
  }
  return str.join("-");
}

//97
function translatePigLatin(str) {
  return pigLatin(str);
}

//98
function myReplace(str, before, after) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == before) {
      str[i] = after;
    }
  }
  return str.join(" ");
}

//99
function binaryAgent(str) {
  str = str.split(" ");
  const characters = [
    " ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "[",
    '"',
    "]",
    "^",
    "_",
    "`",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "{",
    "|",
    "}",
    "~",
  ];
  str = str.map(function (binary) {
    return parseInt(binary, 2);
  });
  for (let i = 0; i < str.length; i++) {
    str[i] = characters[str[i] - 32];
  }
  return str.join("");
}

//100
function truthCheck(collection, pre) {
  for (let i = 1; i < collection.length; i++) {
    if (collection[i][pre] !== collection[i - 1][pre]) {
      return false;
    }
  }
  return true;
}

console.log();
