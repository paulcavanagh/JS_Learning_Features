'use strict'

function fizzBuzz (){
  for(var i=1;i < 101; i++){
    if( i % 15 == 0){console.log(i,'FizzBuzz');}
    else if(i % 5 == 0){console.log(i,'Buzz');}
    else if (i % 3 == 0){console.log(i,'Fizz');}
    else{console.log(i);}
  };
  return 'hello';
};

function fizzBuzzB(){
  for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)
  return 'paul';
}

module.exports = {
  fizzBuzz,
  fizzBuzzB
};