let guessNumber = document.querySelector(".guess");

let rollButton = document.getElementById("roll");

let resetButton = document.getElementById("reset");

let result = document.getElementById("result");

let hint = document.getElementById("hint");

let score = document.querySelector(".score");

let clickCount = 0;

let mark = 0;

var random;

var half;

result.innerHTML = "Please roll the dice";

guessNumber.disabled = true;

score.innerHTML = mark;

function roll() {
  clickCount++;

  if (clickCount == 1) {
    guessNumber.disabled = false;

    let generate = Math.floor(Math.random() * 10 + 1);

    random = generate;

    console.log(random);

    let halfGenerate = parseFloat(random / 2);

    half = halfGenerate;

    console.log(half);

    rollButton.textContent = "Submit";

    result.innerHTML = "Enter a Guess Number Between 1 - 15";
  } else if (clickCount > 1 && clickCount < 4) {
    let input = guessNumber.value;

    if (guessNumber.value != Math.floor(guessNumber.value)) {
      reset();
      result.innerHTML = "Invalid Input Roll Again";
    } else if (input == random) {
      otherReset();
      mark += 1;

      score.innerHTML = mark;

      result.innerHTML = "Hurray you won; dice was " + random;

      result.style.color = "green";
    } else if (guessNumber.value == "") {
      result.innerHTML =
        "Enter a Guess Number, " + (4 - clickCount) + " trials left";

      result.style.color = "red";
    } else if (input == half) {
      hint.innerHTML = "You are almost there";

      result.innerHTML = "Oops try again, " + (4 - clickCount) + " trials left";

      result.style.color = "red";

      guessNumber.value = "";
    } else if (input > random) {
      hint.innerHTML = "You are far above the roll";

      result.innerHTML = "Oops try again, " + (4 - clickCount) + " trials left";

      result.style.color = "red";

      guessNumber.value = "";
    } else if (input < half) {
      hint.innerHTML = "You are far below the roll";

      result.innerHTML = "Oops try again, " + (4 - clickCount) + " trials left";

      result.style.color = "red";

      guessNumber.value = "";
    } else if (input > half) {
      hint.innerHTML = "Keep trying, you are almost there";

      result.innerHTML = "Oops try again, " + (4 - clickCount) + " trials left";

      result.style.color = "red";

      guessNumber.value = "";
    }
  } else if (guessNumber.value != random && clickCount == 4) {
    result.innerHTML = "Oops Game Over";

    rollButton.disabled = true;

    guessNumber.disabled = true;

    clickCount = 0;
  } else if (guessNumber.value == random && clickCount == 4) {
    otherReset();
    mark += 1;

    score.innerHTML = mark;

    result.innerHTML = "Hurray you won; dice was " + random;

    result.style.color = "green";

    guessNumber.disabled = true;
  }
}

function reset() {
  rollButton.textContent = "Roll";

  result.innerHTML = "Please roll the dice";

  result.style.color = "black";

  rollButton.disabled = false;

  guessNumber.value = "";

  guessNumber.disabled = true;

  clickCount = 0;

  hint.innerHTML = "";

  mark = 0;

  score.innerHTML = mark;
}

function otherReset() {
  rollButton.textContent = "Roll";

  result.innerHTML = "Please roll the dice";

  result.style.color = "black";

  rollButton.disabled = false;

  guessNumber.value = "";

  guessNumber.diabled = true;

  clickCount = 0;

  hint.innerHTML = "";
}

rollButton.addEventListener("click", () => {
  roll();
});

resetButton.addEventListener("click", () => {
  reset();
});
