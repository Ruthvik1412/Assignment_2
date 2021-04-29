//Pass by Reference

let ref1 =
{
    ar: 10
}
let ref2 =
{
    ar: 20
}
console.log(`Before Swapping : ref1 ar = ${ref1.ar} ref2 ar = ${ref2.ar}`);
let tempr = ref1;
ref1 = ref2;
ref2 = tempr;
console.log(`After Swapping : ref1 ar = ${ref1.ar} ref2 ar = ${ref2.ar}`);