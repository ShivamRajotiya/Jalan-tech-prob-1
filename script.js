var arr = [2, 4, 6, 8, 10];
var sm = 0;
var gr = arr.length - 1;
function test(arr) {
  let itr = 0;
  while (itr < arr.length / 2) {
    let temp = arr[gr];
    let idx = arr.length - (sm + 1);
    let curr = gr;
    while (idx > 0) {
      arr[curr] = arr[curr - 1];
      idx--;
      curr--;
    }
    arr[sm] = temp;
    sm += 2;
    itr++;
  }
}
console.log(arr);
test(arr);
console.log(arr);
