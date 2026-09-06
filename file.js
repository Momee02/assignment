/*let word=prompt("check word for palindrome")
//if (word){
//let resultingWord= word.split('').reverse().join('');
//if (word.toLowerCase()===resultingWord.toLowerCase())

//console.log($(word),'is a palidrome')
//}
//else{
    //console.log($(word),'is not a palindrome')
//}

You get an array of numbers, return the sum of all of the positives ones.
*/

/*Example
[1, -4, 7, 12] => 
1
+
7
+
12
=
20
1+7+12=20
Note
//If there is nothing to sum, the sum is default to 0.
*/

//solution
const arr=[1, -4, 7, 12]

function sumOfPositive(arr){
   for(let i=0;i<arr.length;i++);
   
   if  (arr[i]>0)
   total+=i;

   else
    total=0;
}
console.log(sumOfPositive)


/*Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/


const arr=[34,15,88,2]
let smallest=arr[0]

function minNumber(arr){
   for(let i=1;i<arr.length;i++)
    
    if (arr[i]<smallest)
    return(smallest);

}
console.log(minNumber)

/*Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

//solution
let firstAlphabet=str[0]
//this is what i wrote initially ->firstAlphabet++
count=0

function countOfReccuringAlphabet(str){
    for(let i=1;i<str.length;i++)

        if(str[i].toLowerCase ===firstAlphabetalphabet.toLowerCase);
        count++
    return(firstAlphabet, count)
}

//this i don't understand
Description:
**I have currently only implemented basic tests and am publishing with the goal of getting feedback on viability of the general idea. Still writing tests but would love to know what people think. Thank you!
The goal of this kata is to use object destructuring to define the parameters of a function.

In this example you will take an object representing facts about a city, structured as follows ...

let city1 = {
  name: "London",
  capital: [true, "England"],
  facts: {
    pop: 8825000,
    area: 607,
  },
}
...and then return a string that matches the following:

If the city is not a capital city:
"London has a population of 8825000 people over an area of 607 square miles."

If the city is a capital city:
"London has a population of 8825000 people over an area of 607 square miles. It is the capital city of England"