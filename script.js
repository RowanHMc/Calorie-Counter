// const apiKEY ="WMSgzL3QyRAdM2X4gd7MIEj78Q4ORDrdB6e9ZyRL"
// const baseURL = "https://api.nal.usda.gov/fdc/v1/foods/search";
// async function getFoodData(foodName){
// }

const foodForm = document.getElementById("foodForm");
const foodName = document.getElementById("foodName");
const foodQuantity = document.getElementById("foodQuantity");
const foodList = document.getElementById("foodList");
const totalCalories = document.getElementById("totalCalories");
const resetBtn = document.getElementById("resetBtn");

let total = 0;
let meals= [];

const savedMeals = localStorage.getItem("meals")

if(savedMeals){
    meals = JSON.parse(savedMeals)
  }

foodForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    console.log("Form submitted")
    const name = foodName.value;
    const quantity = foodQuantity.value

    const calories = 200;

  
  const meal = {
    food: foodName.value,
    quantity: foodQuantity.value,
    calories: calories
  };
  meals.push(meal);
  localStorage.setItem("meals", JSON.stringify(meals)); 
     total += calories;
    totalCalories.textContent = total;

    


    console.log(name, quantity)

    localStorage.setItem("userName", "Rowan")
    console.log(localStorage.getItem("userName"));
    typeof localStorage;

    foodList.addEventListener("click", (event) => {
        console.log(event.target)
        if(event.target.classList.contains("remove-btn")){
          const card = event.target.closest(".meal-card") ; 
          card.remove();
        }
    })

    const mealCard = document.createElement("div");
    mealCard.className = "meal-card bg-white rounded-xl shadow-md p-4";
    mealCard.innerHTML = ` 
     <h3 class="text-xl font-semibold">${name}</h3>
    <p class="text-gray-600">${quantity} g</p>
    <p class="text-green-600 font-bold"> Calories intake is ...: </p> 
    <button class="remove-btn mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ">Remove</button>
    `;

    foodList.appendChild(mealCard);
    foodName.value = "";
    foodQuantity.value = "";


})




