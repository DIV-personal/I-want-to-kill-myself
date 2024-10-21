//Imports
import { pageLoad } from "./page_load_message.js";

console.log("In index.js");
pageLoad();

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const cards = document.querySelector(".cards");
let currentIndex = 0;

next.addEventListener("click", () => {
  const totalCards = document.querySelectorAll(".card").length;
  if (currentIndex < totalCards - 3) {
    currentIndex++;
    cards.style.transform = `translateX(-${currentIndex * 33.33}%)`;
  }
});

prev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    cards.style.transform = `translateX(-${
      currentIndex * cardWidthPercentage
    }%)`;
  }
});
