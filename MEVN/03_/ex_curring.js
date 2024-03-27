const cl = console.log;
const R = require("ramda");
const a = R.add(1);
cl(`a : \n${a}`);
const b = a(2);
cl(`b : ${b}`);

const R2 = require("ramda");
const addNumbers = (a, b, c, d) => a + b + c + d;
const fun_1 = R2.curry(addNumbers);
const x = fun_1(1, 2);
cl(`x\n${x}`);
// const y = x(3);
// cl(`y\n${y}`);
// const z = y(4);
// cl(`z\n${z}`);

const z2 = x(3, 4);
cl(z2);
