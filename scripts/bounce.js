function addRemoveButtonEventListeners(element) {
  element.addEventListener("click", (event) => {
    event.target.closest(".guest").remove();
  });
}
