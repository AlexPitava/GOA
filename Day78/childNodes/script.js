const parentElement = document.getElementById("myDiv");
const childNodes = parentElement.childNodes;
console.log(childNodes);

const list = document.getElementById("myList");
const children = list.childNodes;
children.forEach((node) => {
  console.log(node.textContent);
});