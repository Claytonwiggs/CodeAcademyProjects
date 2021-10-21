const input = "hello you";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  //console.log('i is ' + i);
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let n = 0; n < vowels.length; n++) {
    //console.log(n);
    if (vowels[n] === input[i]) {
      resultArray.push(input[i]);
    }
  }
}
console.log(resultArray.join(" ").toUpperCase());
