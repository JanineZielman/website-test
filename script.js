var list = [
  "red",
  "blue",
  "purple",
  "yellow",
  "green"
]

function randomBG(){
  const randomNumber = Math.floor(Math.random() * list.length + 1);
  document.getElementById('background').style.backgroundColor = list[randomNumber];
}