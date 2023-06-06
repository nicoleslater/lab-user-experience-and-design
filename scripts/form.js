document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const { name, author, image, price, isVip } = event.target.elements;

  const errorEls = [];
  const errorBox = document.querySelector("#error");

  // Clear errors.
  errorBox.innerHTML = "";
  errorBox.style.display = "none";

  if (name.value.length < 3) {
    const errorEl = createErrorElement("Name must be 3 characters or more.");
    errorEls.push(errorEl);
  }

  if (isVip.value === "") {
    const errorEl = createErrorElement("VIP status cannot be blank.");
    errorEls.push(errorEl);
  }

  if (errorEls.length) {
    const ul = createErrorList(errorEls);
    errorBox.append(ul);
    errorBox.style.display = "block";
  } else {
    createGuest({
      name: name.value,
      isVip: isVip.value === "yes",
    });

    document.querySelector("#form").reset();
  }
});

document.querySelector("form #clear").addEventListener("click", () => {
  document.querySelector("#form").reset();
});
