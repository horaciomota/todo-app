let button = document.querySelector("button");
button.addEventListener("click", function (event) {
  event.preventDefault();

  //get value do input

  let valueInput = document.querySelector(".inputAdd");
  let newTaskInput = valueInput.querySelector(".taskControl").value;

  //Get the list

  let listOfElements = document.querySelector(".list-group");
  let newTaskAdded = document.createElement("li");
  newTaskAdded.classList.add("list-group-item");
  newTaskAdded.textContent = newTaskInput;

  // Put the new Task on the new list
  listOfElements.appendChild(newTaskAdded);
});
