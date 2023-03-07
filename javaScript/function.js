let button = document.querySelector("button");
button.addEventListener("click", function (event) {
  console.log("clicou");
  event.preventDefault();

  //get value do input

  let valueInput = document.querySelector("form");
  let newTaskInput = valueInput.querySelector(".taskControl").value;

  valueInput.reset();

  //Get the list

  let listOfElements = document.querySelector(".list-group");
  let newTaskAdded = document.createElement("li");
  newTaskAdded.classList.add("teste");
  newTaskAdded.textContent = newTaskInput;

  // Put the new Task on the new list
  listOfElements.appendChild(newTaskAdded);

  // TaskDone toggle
  let doneOrNot = document.createElement("#");
});
