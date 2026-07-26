console.log("JavaScript loaded");
// const apiKEY ="WMSgzL3QyRAdM2X4gd7MIEj78Q4ORDrdB6e9ZyRL"
// const baseURL = "https://api.nal.usda.gov/fdc/v1/foods/search";
// async function getFoodData(foodName){
//     const url=`${baseURL}?query=${foodName}&api_key=${apiKEY}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

const foodForm = document.getElementById("foodForm");
const foodName = document.getElementById("foodName");
const foodQuantity = document.getElementById("foodQuantity");
const foodList = document.getElementById("foodList");
const totalCalories = document.getElementById("totalCalories");
const resetBtn = document.getElementById("resetBtn");

let total = 0;

foodForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    console.log("Form submitted")
    const name = foodName.value;
    const quantity = foodQuantity.value
    console.log(name, quantity)

    const mealCard = document.createElement("div");
    mealCard.className = "bg-white rounded-xl shadow-md p-4";
    mealCard.innerHTML = `
     <h3 class="text-xl font-semibold">${name}</h3>
    <p class="text-gray-600">${quantity} g</p>
    <p class="text-green-600 font-bold"> Calories intake is ...: </p> 
    <button class="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ">Remove</button>
    `;

    foodList.appendChild(mealCard);
    foodName.value = "";
    foodQuantity.value = "";


})




