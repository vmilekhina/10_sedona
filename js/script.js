var link = document.querySelector(".search__button");
var popup = document.querySelector(".search__modal");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search__modal-show");
});