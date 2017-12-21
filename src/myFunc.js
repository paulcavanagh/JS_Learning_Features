'use strict'

function add(x, y){
  return x + y;
};

function outer() {
  function inner() {
      console.log('inner Function this:', this); // undefined
  };
  console.log('outer function this:', this); // 'outer'
  inner();
};


function outerX() {
  const inner = () => {
      console.log('XInside Inner this', this); // 'outer'
  };
  console.log('Xoutside outer this:', this); // 'outer'
  inner();
}



module.exports = {
                    add,
                    outer,
                    outerX
                    };