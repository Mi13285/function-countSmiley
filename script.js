function countSmiley(arr) {
  return arr.filter((face) => /[:;]{1}[-~]?[)D]{1}/.test(face)).length;
}
function test(arr) {
  console.log(input, arr);
  console.log(output.countSmiley(arr));
}
const countSmiley1 = (arr) =>
  reduce((c, f) => c + /^ [:;] [-~] ? [D)]$/.test(f).length);
console.log(countSmiley([":)", ";(", ";}", ":-D"]));
