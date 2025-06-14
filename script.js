// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (!name || !email || !message) {
    formMsg.textContent = "⚠️ Please fill in all fields.";
    formMsg.style.color = "red";
  } else if (!emailRegex.test(email)) {
    formMsg.textContent = "❌ Please enter a valid email address.";
    formMsg.style.color = "red";
  } else {
    formMsg.textContent = "✅ Message sent successfully!";
    formMsg.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});

// To-Do List
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task) {
    const li = document.createElement("li");
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.textContent = "✖";
    delBtn.title = "Delete task";

    delBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
});
