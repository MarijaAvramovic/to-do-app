import { reset } from "./resetls.js";
export const list = document.querySelector(".task-list");

const myForm = document.querySelector("#myForm");
console.log(myForm);
const newList = document.querySelector("[data-new-list]");

const listArray = JSON.parse(localStorage.getItem("arrayList") || "[]");
console.log(listArray);

export function displayList() {
  list.innerHTML = "";
  for (let i = 0; i < listArray.length; i++) {
    const listItem = document.createElement("li");

    listItem.textContent = listArray[i];

    list.appendChild(listItem);
  }
}

displayList();

myForm.addEventListener("submit", function (event) {
  // 1. Prevent the default form submission (which would reload the page)
  event.preventDefault();

  // 2. Get the value from the input field
  const newItem = newList.value;

  // 3. Add the new value to the array using the push() method
  if (newItem) {
    listArray.push(newItem);

    // 4. (Optional) Update the display and clear the input field
    displayList();
    newList.value = "";
    newList.focus();
  }
  localStorage.setItem("arrayList", JSON.stringify(listArray));
});
