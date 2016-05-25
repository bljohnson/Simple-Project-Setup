var word1 = "button";
var word2 = "clicked";

var buttonClick = function (num1, num2) {
  if (num1 > num2) {
    console.log(word2 + " " + word1);
  } else if (num1 == num2) {
    console.log(word2 + " " + word2);
  } else {
    console.log(word1 + " " + word2);
  }
};
