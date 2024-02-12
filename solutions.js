// Verbal questions
// What is the difference between a parameter and an argument?
    /// A parameter is one of the a variables in s function, and when the function is called the arguments are the data you pass into the functions parameters 
// Within a function, what is the difference between return and console.log?
    /// console.log() is a function that logs arguments to the console and return is a keyword that is used to end a function \





    ///Palindrome
function palindrome(str) {
    const string = str.toLowerCase()
    const splitString = string.split().reverse().join()
    if (string !== splitString) {
        return false
    }
}




/// sum Array

function sumArray (arr) {
    let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
return sum
}

// prime numbers

const checkPrime = (num) =>  {
    if (num <= 1){
    return false
}
    for (let i < 2  )
}


//Calculate the Cube
//Is a Vowel?
//Get Two Lengths
function twoLengths(str1, str2) {
    const twoString = str1.length + str2.length
}
//Get Multiple Lengths

//Maximum of Three Numbers
    function maxThreeNum (num1, num2, num3) {
        const max = Math.max(num1, num2, num3)
        return max
    }
// //Print Longest Word
    function printLongestWord (arr) {
        const longestString = arr.reduce(accumulator, currentValue)
        return accumulator + currentValue;
        if (accumulator === currentValue) {
            return accumulator
        }
    }
//Transmogrify the Numbers

//Project Euler Problem 2
//A Needle in the Haystack
//Sum the Positive
// -----------------------------------------------------------------------------------------------------------------------------------------------------
//psuedocde
//1) create a function thats called validAnagram that has two parameters
//2) set a conditional that returns false if the length of the two strings are not equal to each other 
//3) create a for loop that iterate through each string starting with the firs string then the same for the second string
//4)  have a conditional inside the for loop for the first string that after iteration if the letter is there give a 1 if there are more then more of that same letter the add 1 more  
//5) set a conditional for the second string that returns false if the letters dont match and if they do to decrement 1 
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // If letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // Can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}