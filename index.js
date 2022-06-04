const $ratingItems = document.querySelector(".rating-container");

$ratingItems.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Funão select:", $ratingItems);
});
