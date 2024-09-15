const popup = document.getElementById("taskPopup");
const popupContent = document.getElementsByClassName("popup-content");
const addTaskBtn = document.getElementById("addTaskBtn");
const add = document.getElementById("add");
const closeBtn = document.querySelector(".close-btn");
const taskName = document.getElementById("taskName");
const taskDesc = document.getElementById("taskDesc");
const date = document.getElementById("date");
const time = document.getElementById("time");
const priority = document.getElementById("priority");

addTaskBtn.addEventListener("click", () => {
  popup.style.visibility = "visible";
});

// Close the pop-up when the close button (x) is clicked
closeBtn.onclick = function () {
  popup.style.visibility = "hidden";
};

// Close the pop-up if the user clicks outside of the content area
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.visibility = "hidden";
  }
};

add.addEventListener("click", function () {
  let taskList = document.getElementById("table-body");
  let task_row = document.createElement("tr");
  task_row.classList.add("task-row");
  taskList.appendChild(task_row);

  // Task Name
  let task_name = document.createElement("td");
  task_name.textContent = taskName.value;
  task_row.appendChild(task_name);

  // Task Description
  let task_desc = document.createElement("td");
  task_desc.textContent = taskDesc.value;
  task_row.appendChild(task_desc);

  // Task Date
  let task_date = document.createElement("td");
  task_date.textContent = date.value;
  task_row.appendChild(task_date);

  // Task Deadline
  let task_time = document.createElement("td");
  task_time.textContent = time.value;
  task_row.appendChild(task_time);

  // Task Priority
  let task_priority = document.createElement("td");
  task_priority.textContent = priority.value;
  task_row.appendChild(task_priority);

  const del_icon_path = "./images/bin.svg";
  let task_delete = document.createElement("td");
  task_delete.innerHTML = `<img src="${del_icon_path}" class="bin-icon" alt="Bin Icon">`;
  task_row.appendChild(task_delete);

  // debugger;
  taskName.value = "";
  taskDesc.value = "";
  date.value = "";
  time.value = "";
  popup.style.visibility = "hidden";
});

document.getElementById("table").addEventListener("click", function (event) {
  // Check if the clicked element is a delete button
  if (event.target && event.target.classList.contains("bin-icon")) {
    // event.target is the clicked delete button
    const row = event.target.closest("tr"); // Find the closest parent row
    row.remove(); // Remove the row from the table
  }
});
