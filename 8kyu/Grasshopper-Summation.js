// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


//MY SOLUTION

//return not needed as it's implied with arrow function
//this is a more optimized method for collecting sum of an array than looping through
//O(1) rather than O(N)
var summation = num => num * (num + 1) / 2