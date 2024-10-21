//Import functionality from other modules
import { count, increment } from "./counter.js";
//Define variables

//Attach event listeners to elements
document.getElementById("voteBtn").addEventListener("click", upVote);

//startup code that runs at or during page load

//Functions to define specific behaviours
function upVote() {
  //increment the count value
  increment();
  //code that runs when when Upvote is clicked
  console.log(count);
  //Update the HTML to reflect the new counter value
  document.getElementById("voteValue").innerText = count;
}
//Functions for general use

import { countd, increment } from "./counter.js";
document.getElementById("voteBtndown").addEventListener("click, downVote");
function downVote() {
  increment();
  console.log(countd);
  document.getElementById("voteValuedown").innerText = countd;
}

const weatherURL =
  "https://api.openmeteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m";

async function getWeather() {
  let response = await fetch(weatherURL);
  let data = await response.json();
  return data;
}

console.log("Retrieving weather data");
console.log(await getWeather());
