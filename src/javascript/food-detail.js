$(document).ready(function () {
  const meal = JSON.parse(sessionStorage.getItem("selectedMeal"));

  $("h3").text(meal.strMeal);
  $(".food-image img").attr("src", meal.strMealThumb);
  $(".food-category span").text(meal.strCategory);
  $(".food-area span").text(meal.strArea);
  $(".food-instruction span").text(meal.strInstructions);

  const ingredients = [];
  for (let i = 1; i <= 100; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push({
        name: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
      });
    }
  }

  const tbody = $("tbody");
  ingredients.forEach((ingredient) => {
    const tr = $("<tr>");
    const tdImg = $("<td>");
    const img = $("<img>").attr(
      "src",
      `https://www.themealdb.com/images/ingredients/${ingredient.name}.png`
    );
    tdImg.append(img);
    const tdName = $("<td>").text(ingredient.name);
    const tdMessure = $("<td>").text(ingredient.measure);
    tr.append(tdImg, tdName, tdMessure);
    tbody.append(tr);
  });
});
