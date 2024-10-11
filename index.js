// Create a prompt asking the user to input numbers separated by commas

const userinput = prompt(`Type in Some Numbers Seperated by a comma!`);

//I kept the console log in to show I used it. I would delete in real setting
//console.log(userinput)

// Turn the user's input into an array

stringArray = userinput.split(`,`);

//I kept the console log in to show I used it. I would delete in real setting
console.log(stringArray)

// Convert the strings in the array into numbers

let numberArray = [];

for (let index = 0; index < stringArray.length; index = index + 1) {
  //console.log(`initial:`, index)
  let internumberArray = Number(stringArray[index]);
  numberArray.push(internumberArray)
}

console.log(numberArray)

// Create the following functions and their returns. Each function will be passed
//in the array of numbers created in step 3.
// getLength -> how many numbers are in the array
const ArrLength = getLength(numberArray)

function getLength(numberArray) {
  let ArrLength = numberArray.length;
 return ArrLength
}

getLength(numberArray);

console.log(ArrLength)
// getSum -> the total when you add up all of the numbers in the array

const ArrSum = getSum(numberArray)

function getSum(numberArray) {
  let ArrSum=0
  for (let index = 0; index < numberArray.length; index= index + 1) {
    ArrSum += numberArray[index];
  }
  return ArrSum
}

getSum(numberArray);

console.log(ArrSum)
// getMean -> the average of all of the numbers in the array

const ArrMean = getMean(ArrLength, ArrSum)

function getMean(ArrLength, ArrSum) {
  const ArrMean = ArrSum / ArrLength;
  return ArrMean;
}

getMean(ArrLength, ArrSum);

console.log(ArrMean)
// getMin -> the smallest number in the array

const ArrMin = getMin(numberArray)

function getMin(numberArray) {
  let ArrMin = numberArray[0];
  for (let index = 1; index < numberArray.length; index = index + 1) { 
    if (numberArray[index] < ArrMin) {
      ArrMin = numberArray[index];
    }
  }
  return ArrMin
}
getMin(numberArray);

console.log(ArrMin)

// getMax -> the largest number in the array

const ArrMax = getMax(numberArray)

function getMax(numberArray) {
  let ArrMax = numberArray[0];
  for (let index=0; index < numberArray.length; index=index+1) {
    if (numberArray[index] > ArrMax) {
      ArrMax = numberArray[index];
    }
  }
  return ArrMax
}

getMax(numberArray);

console.log(ArrMax)
// getRange -> the largest number minus the lowest number in the array

ArrRange = getRange(ArrMax, ArrMin)

function getRange(ArrMax, ArrMin) {
  let ArrRange = ArrMax - ArrMin;
  return ArrRange
}

getRange();

console.log(ArrRange)
// getEvens -> a new array of all the even numbers
EvenArr = []
OddArr= []
function getEvens(numberArray) {
  for (let index = 0; index<numberArray.length; index = index + 1) {
    if (numberArray[index] % 2 == 0) {
      EvenArr.push(numberArray[index])
    } else {
      OddArr.push(numberArray[index])
    }
  }
}

getEvens(numberArray);

console.log(EvenArr)
console.log(OddArr)

//I used an if else loop to combine the last two into one
// getOdds -> a new array of all the odd numbers
// function getOdds(numberArray) {
  
// }
// Push your project to GitHub
//Done!