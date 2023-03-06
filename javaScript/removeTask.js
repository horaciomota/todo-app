let listOfElements = document.querySelector(".list-group");

// Delete a task
listOfElements.addEventListener("dblclick", function (event) {
  event.target.classList.add("fadeOut");

  setTimeout(function () {
    event.target.remove();
  }, 500);
});
