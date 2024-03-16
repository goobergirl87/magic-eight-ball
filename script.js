"use strict";

const form = document.querySelector("form");
const button = document.querySelector(".roll");
const answer = document.querySelector(".answer");
const ball = document.querySelector(".ball");
const inputQuestion = document.getElementById("question").value;
const inputQuestionField = document.querySelector(".inputQuestion");

const rollTheBall = function () {
  ball.classList.add("shaking");
  setTimeout(showAnswer, 3000);
  myStopFunction();
  button.removeEventListener("click", rollTheBall);
  form.classList.add("hide");
  inputQuestionField.textContent = inputQuestion;
};

const showAnswer = function () {
  answer.textContent =
    prophecies[Math.floor(Math.random() * prophecies.length)];
};

function myStopFunction() {
  clearTimeout(showAnswer);
}

// timer to show the prophecy and shaking during the timer

const prophecies = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy",
  "try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

button.addEventListener("click", rollTheBall);
