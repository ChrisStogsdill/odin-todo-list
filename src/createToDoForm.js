import createTaskAddButtonListener from "./createTaskAddButtonListener";

export default function createToDoForm(projectName = "main") {
  const taskFormContainer = document.getElementById("task-form-container");
  const form = taskFormContainer.appendChild(document.createElement("form"));

  // remove old form
  taskFormContainer.removeChild(taskFormContainer.firstChild);

  form.id = `${projectName}-tasks`;

  // fill out form html
  const titleInput = form.appendChild(document.createElement("input"));
  Object.assign(titleInput, {
    type: "text",
    name: "title",
    placeholder: "Title",
  });

  const descriptionInput = form.appendChild(document.createElement("textarea"));
  Object.assign(descriptionInput, {
    name: "description",
    placeholder: "Description",
  });

  const dateInput = form.appendChild(document.createElement("input"));
  Object.assign(dateInput, {
    type: "datetime-local",
    name: "due-date",
  });

  const radioButtonContainer = form.appendChild(document.createElement("div"));
  const radioTitle = radioButtonContainer.appendChild(
    document.createElement("p")
  );
  radioTitle.innerText = "Priority";
  const radioButtonLow = radioButtonContainer.appendChild(
    document.createElement("input")
  );
  Object.assign(radioButtonLow, {
    type: "radio",
    name: "priority",
    value: "low",
    id: "low",
  });

  const radioButtonLowLabel = radioButtonContainer.appendChild(
    document.createElement("label")
  );
  radioButtonLowLabel.setAttribute("for", "low");
  radioButtonLowLabel.innerText = "low";

  const radioButtonMedium = radioButtonContainer.appendChild(
    document.createElement("input")
  );
  Object.assign(radioButtonMedium, {
    type: "radio",
    name: "priority",
    value: "medium",
    id: "medium",
  });

  const radioButtonMediumLabel = radioButtonContainer.appendChild(
    document.createElement("label")
  );
  radioButtonMediumLabel.innerText = "medium";
  radioButtonMediumLabel.setAttribute("for", "medium");

  const radioButtonHigh = radioButtonContainer.appendChild(
    document.createElement("input")
  );
  Object.assign(radioButtonHigh, {
    type: "radio",
    name: "priority",
    value: "high",
    id: "high",
  });

  const radioButtonHighLabel = radioButtonContainer.appendChild(
    document.createElement("label")
  );
  radioButtonHighLabel.innerText = "high";
  radioButtonHighLabel.setAttribute("for", "high");

  const addButton = form.appendChild(document.createElement("button"));
  addButton.innerText = "add";
  addButton.id = "todo-submit";

  createTaskAddButtonListener();
}
