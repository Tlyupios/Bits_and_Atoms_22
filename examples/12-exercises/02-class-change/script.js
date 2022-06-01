console.info("Everything looks fine ✅.");
console.log("Open this script.js file and write your code...");

// Select the div (blue box) in the index html and change its looks.

//document.querySelector('[data-js="box"]').style.backgroundColor = "Red";

const element = document.querySelector('[data-js="box"]')

// with classList you can check the classes available. For example «specialcolor» in the style.css
element.classList.add("specialcolor")
