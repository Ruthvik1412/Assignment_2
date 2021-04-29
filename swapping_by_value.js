//Pass by Value

let av = 1;
let bv = 2;
console.log(`Before Swapping : av = ${av} bv = ${bv}`);
let tempv;
tempv = bv;
bv = av;
av = tempv;
console.log(`After Swapping : av =${av} bv = ${bv}`);	