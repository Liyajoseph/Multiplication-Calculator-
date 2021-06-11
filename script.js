document.getElementById('button').addEventListener('click', multiply)

let num1 = 0
let num2 = 0
let counter = 0
let answer = 0

function multiply () {
  num1 = document.getElementById('put1').value
  num2 = document.getElementById('put2').value
  num1 = parseInt(num1)
  num2 = parseInt(num2)

  for (counter = 0; counter < num1; counter++) {
    answer = answer + num2
  }
  document.getElementById('answer').innerHTML = answer
}
