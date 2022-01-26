import populateSideBar from "./populateSideBar";

export default function addProjectButtonLogic() {
  const addProjectButton = document.getElementById("add-project-button");

  addProjectButton.addEventListener("click", () => {
    // popup for project name
    const newProjectName = prompt("Project Name");

    // put the new project in localStorage
    const tempTasks = JSON.parse(localStorage.getItem("tasks"));
    tempTasks[`${newProjectName}-tasks`] = [];
    localStorage.setItem("tasks", JSON.stringify(tempTasks));

    populateSideBar();
  });
}
