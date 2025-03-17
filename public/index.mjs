import cards from "./cards.mjs";

function main() {
  const $card = document.getElementById("card");
  const $correct = document.getElementById("correct");
  const $incorrect = document.getElementById("incorrect");
  let stack = [...cards];
  window.stack = stack;
  let incorrect = [];
  let curr = stack.pop();
  window.curr = curr;
  let correctHandler = function() {
    if (stack.length === 0) {
      stack = incorrect.length > 0 ? [...incorrect] : [...cards];
      window.stack = stack;
      incorrect = [];
    }
    curr = stack.pop();
    resetCard(curr);
  };
  let incorrectHandler = function() {
    incorrect.push(curr);
    if (stack.length === 0) {
      stack = incorrect.length > 0 ? [...incorrect] : [...cards];
      window.stack = stack;
      incorrect = [];
    }
    curr = stack.pop();
    resetCard(curr);
  };
  let cardHandler;

  $correct.removeEventListener("click", correctHandler);
  $correct.addEventListener("click", correctHandler);

  $incorrect.removeEventListener("click", incorrectHandler);
  $incorrect.addEventListener("click", incorrectHandler);

  resetCard(curr);

  function resetCard({ front, back }) {
    $card.dataset.side = "front";
    $card.innerText = front;
    $card.removeEventListener("click", cardHandler);
    cardHandler = function() {
      if (this.dataset.side === "front") {
        this.dataset.side = "back";
        this.innerText = back;
      } else {
        this.dataset.side = "front";
        this.innerText = front;
      }
    };
    $card.addEventListener("click", cardHandler);
  }
}
window.onload = main;
