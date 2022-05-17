const colors = ["lightgreen", "yellow", "rgba(133,122,200)", "#f15025", "pink"];
const btn = document.getElementById("btn");
const myColor = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0-3
  const randomNum = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNum];
  myColor.textContent = colors[randomNum];
  myColor.style.color = colors[randomNum];
});

function getRandomNumber(arr, last = undefined) {
  return Math.floor(Math.random() * colors.length);
}
