function getAllMeal() {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((response) => response.json())
    .then((data) => {
      const mealList = document.getElementById("meal-list");
      data.meals.forEach((meal) => {
        const row = document.createElement("tr");
        row.onclick = function () {
          window.location.href = "food-details.html";
        };
        const imgCell = document.createElement("td");
        const img = document.createElement("img");
        img.src = meal.strMealThumb;
        img.alt = meal.strMeal;
        imgCell.appendChild(img);
        row.appendChild(imgCell);
        const nameCell = document.createElement("td");
        nameCell.textContent = meal.strMeal;
        row.appendChild(nameCell);
        const categoryCell = document.createElement("td");
        categoryCell.textContent = meal.strCategory;
        row.appendChild(categoryCell);
        const areaCell = document.createElement("td");
        areaCell.textContent = meal.strArea;
        row.appendChild(areaCell);
        mealList.appendChild(row);
      });
    });
}

getAllMeal();
