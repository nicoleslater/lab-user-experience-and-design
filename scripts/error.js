function createErrorElement(msg) {
  const li = document.createElement("li");
  li.textContent = msg;
  return li;
}

function createErrorList(lis) {
  const ul = document.createElement("ul");
  ul.append(...lis);

  return ul;
}
