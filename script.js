const inputBox = document.getElementById("input-box");
const taskContainer = document.getElementById("task-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = `<img src="images/remove.png" alt="Remove" class="delete-icon">`;
        span.classList.add("delete");
        li.appendChild(span);

        taskContainer.appendChild(li);
    }
    inputBox.value = "";
    saveTask();
}

taskContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); 
        saveTask();
    } else if ( e.target.tagName === "IMG") {
        e.target.closest("li").remove(); 
        saveTask();
    }
}, false);

function saveTask() {
    localStorage.setItem("task", taskContainer.innerHTML);
}

function showTask() {
    taskContainer.innerHTML = localStorage.getItem("task") || ""; // Handle null case
}

showTask();
