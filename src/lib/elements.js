export function createDivWithContent(content) {
  const newdiv = document.createElement("div");
  newdiv.innerHTML = content;

  return newdiv;
}

export function appendElementToElement(parent, child) {
  parent.appendChild(child);
}
