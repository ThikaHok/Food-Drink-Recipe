function getAllMeal() {
  $.getJSON(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=",
    function (data) {
      const mealList = $("#meal-list");
      $.each(data.meals, function (i, meal) {
        const row = $("<tr>").click(function () {
          sessionStorage.setItem("selectedMeal", JSON.stringify(meal));
          window.location.href = "food-details.html";
        });
        const imgCell = $("<td>");
        const img = $("<img>").attr({
          src: meal.strMealThumb,
          alt: meal.strMeal,
        });
        imgCell.append(img);
        row.append(imgCell);
        const nameCell = $("<td>").text(meal.strMeal);
        row.append(nameCell);
        const categoryCell = $("<td>").text(meal.strCategory);
        row.append(categoryCell);
        const areaCell = $("<td>").text(meal.strArea);
        row.append(areaCell);
        mealList.append(row);
      });
    }
  );
}

getAllMeal();
