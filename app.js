const input = document.getElementById("input");
const h2 = document.getElementById("h2");
let string;
let words;

const updateInputs = function () {
  h2.innerHTML = words;
  string = input.value;
};

function convertStr(str) {
  const string = str.toUpperCase();
  const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  words = string
    .split("")
    .map((char) => {
      const pos = alfabet.indexOf(char);
      return pos >= 0 ? alfabet[(pos + 13) % 26] : char;
    })
    .join("");
  return;
}

input.addEventListener("keyup", function () {
  updateInputs();
  convertStr(string);
});
