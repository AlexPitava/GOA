const parentElement = document.getElementById("myDiv");
if (parentElement.hasChildNodes()) {
  console.log("Element has child nodes.");
} else {
  console.log("Element has no child nodes.");
}

const list = document.getElementById("myList");
if (list.hasChildNodes()) {
  console.log("List has items.");
} else {
  console.log("List is empty.");
}
