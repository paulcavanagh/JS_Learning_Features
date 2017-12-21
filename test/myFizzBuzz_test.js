'use strict'
/*
  JavaScript — Breaking Down The Shortest Possible FizzBuzz Answer

  https://codeburst.io/javascript-breaking-down-the-shortest-possible-fizzbuzz-answer-94a0ad9d128a

  Problem:

  Write a program that prints the numbers from 1 to 100. 
  But for multiples of three print “Fizz” instead of the number and 
  for the multiples of five print “Buzz”. 
  For numbers which are multiples of both three and five print “FizzBuzz”.
*/

const myFizzBzz = require('../src/myFizzBuzz');
const chalk = require('chalk');

describe(chalk.blue('FizzBuzz Problems'), () =>{
  it.only('solve the FixxBuzz problem statement as stated in the header', () =>{
    //expect(myFizzBzz.fizzBuzz()).to.be.equal('hello');
    expect(myFizzBzz.fizzBuzzB()).to.be.equal('paul');
  })
});