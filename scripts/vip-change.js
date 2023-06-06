function addVipChangeEventListeners(element) {
  element.addEventListener("click", (event) => {
    event.target.textContent =
      event.target.textContent === "Make VIP" ? "Remove VIP" : "Make VIP";
    event.target.classList.toggle("in-vip");
    event.target.classList.toggle("out-vip");
    const h2 = event.target.parentNode.parentNode.querySelector("h2 span");
    h2.innerText = h2.innerText === "⭐️" ? "" : "⭐️";
  });
}
