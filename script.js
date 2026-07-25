const foodForm = document.getElementById("foodForm");
const foodName = document.getElementById("foodName");
const foodQuantity = document.getElementById("foodQuantity");
const foodList = document.getElementById("foodList");
const totalCalories = document.getElementById("totalCalories");
const resetBtn = document.getElementById("resetBtn");

let total = 0;

foodForm.addEventListener("Submit", function(event){
    event.preventDefault();
    console.log("Form submitted")
})