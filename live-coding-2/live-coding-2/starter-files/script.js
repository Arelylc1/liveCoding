// API
const API = 'https://yesno.wtf/api';
let element = fetchAnswer;
var answer= document.getElementById("answer");
var button= document.getElementById("button");



function fetchAnswer(){
    fetch(API)
    .then((response) => response.json())
    .then((data) => console.log(data));
  
};


document.addEventListener("click", function(){
    document.getElementById("answer").innerHTML = "Yes","No";
  });
/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
