$(document).ready(function () {
  const drink = JSON.parse(sessionStorage.getItem("selectedDrink"));

  $("h3").text(drink.strDrink);
  $(".drink-image img").attr("src", drink.strDrinkThumb);
  $(".drink-category span").text(drink.strCategory);
  $(".drink-alcoholic span").text(drink.strAlcoholic);
  $(".drink-glass span").text(drink.strGlass);
  $(".food-instruction span").text(drink.strInstructions);

  const ingredients = [];
  for (let i = 1; i <= 100; i++) {
    if (drink[`strIngredient${i}`]) {
      ingredients.push({
        name: drink[`strIngredient${i}`],
        measure: drink[`strMeasure${i}`],
      });
    }
  }

  const tbody = $("tbody");
  ingredients.forEach((ingredient) => {
    const tr = $("<tr>");
    const tdImg = $("<td>");
    const img = $("<img>").attr(
      "src",
      `https://www.thecocktaildb.com/images/ingredients/${ingredient.name}.png`
    );
    tdImg.append(img);
    const tdName = $("<td>").text(ingredient.name);
    const tdMessure = $("<td>").text(ingredient.measure);
    tr.append(tdImg, tdName, tdMessure);
    tbody.append(tr);
  });
});
