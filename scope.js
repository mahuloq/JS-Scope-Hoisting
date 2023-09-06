var test1 = "varglobaltest";
let test2 = "letglobaltest";
console.log(test1);
console.log(test2);
// console.log(test3);
// console.log(test4);
// console.log(test5);
//   console.log(test6);
scopeTest();

function scopeTest() {
  var test3 = "varFunctionTest";
  let test4 = "letFunctionTest";
  console.log(test1);
  console.log(test2);
  console.log(test3);
  console.log(test4);
  console.log(test5);
  //   console.log(test6);

  if (true) {
    var test5 = "varBlockTest";
    let test6 = "letBlockTest";
    console.log(test1);
    console.log(test2);
    console.log(test3);
    console.log(test4);
    console.log(test5);
    console.log(test6);
  }
  console.log(test1);
  console.log(test2);
  console.log(test3);
  console.log(test4);
  console.log(test5);
  //   console.log(test6);
}

console.log(test1);
console.log(test2);
// console.log(test3);
// console.log(test4);
// console.log(test5);
// console.log(test6);
