//===========================================//
//================ MEALDB ===================//
//===========================================//

// From: https://www.themealdb.com/api.php //

//Get All Meal
function getMeal() {
  //Get All Meal to Display
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

//Get Meal by Name
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", searchMeal);
function searchMeal() {
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBtn.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

//Get Meal by Category
const categoryBtn = document.getElementById("category-btn");
categoryBtn.addEventListener("click", categoryMeal);
function categoryMeal() {
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryBtn.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

//Get Meal by Area
const areaBtn = document.getElementById("area-btn");
areaBtn.addEventListener("click", areaMeal);
function areaMeal() {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaBtn.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

//Get Meal by Ingredient
const ingredientBtn = document.getElementById("ingredient-btn");
ingredientBtn.addEventListener("click", ingredientMeal);
function ingredientMeal() {
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientBtn.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}