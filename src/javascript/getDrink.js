function getAllDrink() {
  $.getJSON(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
    function (data) {
      const drinkList = $("#meal-list");
      $.each(data.drinks, function (i, drink) {
        const row = $("<tr>").click(function () {
          sessionStorage.setItem("selectedDrink", JSON.stringify(drink));
          window.location.href = "drink-details.html";
        });
        const imgCell = $("<td>");
        const img = $("<img>").attr({
          src: drink.strDrinkThumb,
          alt: drink.strDrink,
        });
        imgCell.append(img);
        row.append(imgCell);
        const nameCell = $("<td>").text(drink.strDrink);
        row.append(nameCell);
        const categoryCell = $("<td>").text(drink.strCategory);
        row.append(categoryCell);
        const areaCell = $("<td>").text("N/A");
        row.append(areaCell);
        drinkList.append(row);
      });
    }
  );
}

getAllDrink();
