const guests = document.querySelectorAll(".guest");
guests.forEach((guest) => {
  const bounceButton = guest.querySelector(".bounce");
  addRemoveButtonEventListeners(bounceButton);

  const vipElement = guest.querySelector(".vip");
  addVipChangeEventListeners(vipElement);
});
