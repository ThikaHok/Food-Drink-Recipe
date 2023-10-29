//TODO: Display All Meal to Index (Landing Page)
function getMeal() {
  //Get All Meal to Display
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

//TODO: Search Meal
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
