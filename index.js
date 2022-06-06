const $ratingItems = document.querySelectorAll(".rating-item");
const $btnSubmit = document.querySelector(".button-submit");
const $ratingCard = document.querySelector("#rating-card");
const $thanksCard = document.querySelector("#thanks-card");
const $resultRating = document.querySelector("#result-rating");

let ratingValue = 5;

$ratingItems.forEach(($button) =>
  $button.addEventListener("click", function (e) {
    e.preventDefault();

    removeSelectedfromButtons($ratingItems);

    ratingValue = e.target.textContent;
    e.target.classList.add("rating-item__selected");
  })
);

function removeSelectedfromButtons($buttons) {
  $buttons.forEach(($button) => {
    $button.classList.remove("rating-item__selected");
  });
}

$btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  $resultRating.textContent = ratingValue;
  activeNewCard($ratingCard, $thanksCard);
});

function activeNewCard($prevCard, $nextCard) {
  $prevCard.classList.add("deactive");
  $nextCard.classList.remove("deactive");
}
