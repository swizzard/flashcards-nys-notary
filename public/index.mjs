import cards from "./cards.mjs";

function main() {
  // dom elements
  const $card = document.getElementById("card");
  const $correct = document.getElementById("correct");
  const $incorrect = document.getElementById("incorrect");

  // original stack
  let stack = [...cards];
  shuffle(stack);

  // replacement stack
  let incorrect = [];

  let curr = stack.pop();

  // technically at this point we only need the handler names so we can remove them
  // but we might as well define them
  const correctHandler = function () {
    if (stack.length === 0) {
      // if we have `incorrect`, replace the stack with them, otherwise start anew
      // either way, we need to clear out `incorrect`
      stack = incorrect.length > 0 ? [...incorrect] : [...cards];
      shuffle(stack);
      incorrect = [];
    }
    curr = stack.pop();
    resetCard(curr);
  };

  const incorrectHandler = function () {
    // save the incorrect card
    incorrect.push(curr);
    if (stack.length === 0) {
      // we know there's at least one incorrect, we just put it there
      stack = [...incorrect];
      shuffle(stack);
      incorrect = [];
    }
    curr = stack.pop();
    resetCard(curr);
  };

  // this one we leave undefined for now
  let cardHandler;

  // preemptive removal may not be necessary but browser state is Weird
  // and i'd rather be safe than frustrated
  // unlike `cardHandler`, we only need to define and add these once
  $correct.removeEventListener("click", correctHandler);
  $correct.addEventListener("click", correctHandler);

  $incorrect.removeEventListener("click", incorrectHandler);
  $incorrect.addEventListener("click", incorrectHandler);

  // kick it off
  resetCard(curr);

  // sets content and handler for the `$card` element
  function resetCard({ front, back }) {
    $card.dataset.side = "front";
    $card.innerText = front;
    // preemptive removal just in case
    $card.removeEventListener("click", cardHandler);
    cardHandler = function () {
      // flip between `front` and `back` depending on `data-side`
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
  // from https://stackoverflow.com/a/12646864
  function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
window.onload = main;
