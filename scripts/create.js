const createGuestTemplate = ({ image, name, isVip }) => `
  <img
  src=${image || getRandomImageURL()}
  alt="${name}"
  />
  <div>
    <h2><span>${isVip ? "⭐️" : " "}</span>${name}</h2>
    <div class="status">
      <button class="vip ${isVip ? "in-vip" : "out-vip"}">${
  isVip ? "Remove VIP" : "Make VIP"
}</button>
      <button type="button" class="bounce">Bounce</button>
  </div>
`;

function createGuest(guest) {
  const guestListEl = document.querySelector(".guest-list");
  const guestEl = document.createElement("article");
  guestEl.classList.add("guest");

  const template = createGuestTemplate(guest);
  guestEl.innerHTML = template;
  const bounceButton = guestEl.querySelector(".bounce");
  const toggleVipButton = guestEl.querySelector(".vip");
  addVipChangeEventListeners(toggleVipButton);
  addRemoveButtonEventListeners(bounceButton);

  guestListEl.prepend(guestEl);
}

function getRandomImageURL() {
  min = 1;
  max = 70;
  return `https://i.pravatar.cc/150?img=${Math.floor(
    Math.random() * (max - +1) + min
  )}`;
}
