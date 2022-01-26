import "./style.css";
import createToDoForm from "./createToDoForm";
import populateCreatedTasksContainer from "./populateCreatedTasksContainer";
import addProjectButtonLogic from "./addProjectButtonLogic";
import populateSideBar from "./populateSideBar";

const mainLink = document.getElementById("main-link");

// check if localStorage doesn't have tasks yet. Then set it.
if (!localStorage.getItem("tasks")) {
  const tasks = { "main-tasks": [] };
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

populateSideBar();

createToDoForm();

addProjectButtonLogic();

populateCreatedTasksContainer();

mainLink.addEventListener("click", () => {
  createToDoForm();
  populateCreatedTasksContainer();
});
