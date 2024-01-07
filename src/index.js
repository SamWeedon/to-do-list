import './style.css';
import { format } from 'date-fns';
import removeAllChildren from './removeAllChildren.js';
import removeItemFromArray from './removeItemFromArray.js';
import trashCan from './trash-can-outline.svg';
import folderPlus from './folder-plus-outline.svg';

const ToDo = (title, description, dueDate, priority) => {
  // A 'To-Do' item as part of a larger 'project'
  const complete = false;
  const maximized = true;
  return {
    title, description, dueDate, priority, complete, maximized,
  };
};

const Project = (title, todoList) =>
// A project that contains a 'To-Do' list
  ({ title, todoList });

// Creates default content for the first time visiting the website
const defaultToDo = ToDo('groceries', 'get milk', new Date('2023-12-08T00:00'), 'high');
const ToDo1 = ToDo('eat', 'eat dinner', new Date('2023-12-09T00:00'), 'low');
const ToDo2 = ToDo('run', '3 miles', new Date('2023-12-10T00:00'), 'medium');
const defaultProject = Project('default', [defaultToDo, ToDo1, ToDo2]);

// An array to contain all of the projects
let projectList = [defaultProject];

function saveToLocalStorage() {
  // saves the current project list to localStorage
  localStorage.clear();
  localStorage.setItem('projectList', JSON.stringify(projectList));
}

function loadLocalStorage() {
  // loads the data from localStorage to populate the project list
  projectList = [];
  const storedProjectList = JSON.parse(localStorage.getItem('projectList'));
  for (const project of storedProjectList) {
    projectList.push(project);
  }
  /*
    // Example of how to add methods back into objects after being retrieved from JSON
    for (let project of projectList) {
        for (let todo of project.todoList) {
            todo.printSomething = function() {
                console.log('something');
            }
        }
    }
    */
}

function loadDOM() {
  // Iterates through the data within the project list to populate the DOM,
  // utilizing event listeners to facilitate user input
  removeAllChildren(document.body);

  const websiteHeading = document.createElement('h1');
  websiteHeading.classList.add('websiteHeading');
  websiteHeading.textContent = 'To-Do';
  document.body.appendChild(websiteHeading);

  const addProjectButton = document.createElement('img');
  addProjectButton.classList.add('addProjectButton');
  addProjectButton.src = folderPlus;
  addProjectButton.addEventListener('click', () => {
    const projectTitle = prompt('Project title?');
    if (projectTitle) {
      projectList.unshift(Project(projectTitle, [ToDo('', '', '', '')]));
      saveToLocalStorage();
      loadDOM();
    }
  });
  document.body.appendChild(addProjectButton);

  for (const project of projectList) {
    const projectBox = document.createElement('div');
    projectBox.classList.add('projectBox');
    document.body.appendChild(projectBox);

    const projectHeading = document.createElement('h1');
    projectHeading.classList.add('projectHeading');
    projectHeading.contentEditable = 'true';
    projectHeading.textContent = project.title;
    projectHeading.addEventListener('input', () => {
      project.title = projectHeading.textContent;
      saveToLocalStorage();
    });
    projectBox.appendChild(projectHeading);

    const addTodoButton = document.createElement('button');
    addTodoButton.classList.add('addTodoButton');
    addTodoButton.textContent = '+';
    addTodoButton.addEventListener('click', () => {
      project.todoList.unshift(ToDo('', '', '', ''));
      saveToLocalStorage();
      loadDOM();
    });
    projectBox.appendChild(addTodoButton);

    const deleteProjectButton = document.createElement('img');
    deleteProjectButton.classList.add('deleteProject');
    deleteProjectButton.src = trashCan;
    deleteProjectButton.addEventListener('click', () => {
      if (confirm('Are you sure you want to delete this project?')) {
        removeItemFromArray(project, projectList);
        saveToLocalStorage();
        loadDOM();
      }
    });
    projectBox.appendChild(deleteProjectButton);

    for (const todo of project.todoList) {
      const todoBox = document.createElement('div');
      todoBox.classList.add('todoBox');
      if (todo.priority == 'high') todoBox.style.borderColor = 'red';
      else if (todo.priority == 'medium') todoBox.style.borderColor = 'orange';
      else if (todo.priority == 'low') todoBox.style.borderColor = 'green';
      else todoBox.style.borderColor = 'grey';
      projectBox.appendChild(todoBox);

      const completeCheckbox = document.createElement('input');
      completeCheckbox.classList.add('completeCheckbox');
      completeCheckbox.type = 'checkbox';
      todo.complete ? completeCheckbox.checked = true : completeCheckbox.checked = false;
      completeCheckbox.addEventListener('click', () => {
        todo.complete = !todo.complete;
        saveToLocalStorage();
        loadDOM();
      });
      todoBox.appendChild(completeCheckbox);

      // if the user has expanded the 'To-Do'
      if (todo.maximized) {
        const title = document.createElement('textarea');
        title.classList.add('title');
        title.textContent = todo.title;
        title.addEventListener('input', () => {
          todo.title = title.value;
          saveToLocalStorage();
        });
        const titleLabel = document.createElement('label');
        titleLabel.textContent = 'Title: ';
        todoBox.appendChild(titleLabel);
        titleLabel.appendChild(title);

        const description = document.createElement('textarea');
        description.classList.add('description');
        description.textContent = todo.description;
        description.addEventListener('input', () => {
          todo.description = description.value;
          saveToLocalStorage();
        });
        const descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = 'Description: ';
        todoBox.appendChild(descriptionLabel);
        descriptionLabel.appendChild(description);

        const dueDate = document.createElement('input');
        dueDate.classList.add('dueDate');
        dueDate.type = 'date';
        if (todo.dueDate) {
          dueDate.valueAsDate = new Date(todo.dueDate);
        }
        dueDate.addEventListener('input', () => {
          todo.dueDate = new Date(`${dueDate.value}T00:00`);
          saveToLocalStorage();
        });
        const dueDateLabel = document.createElement('label');
        dueDateLabel.textContent = 'Due Date: ';
        todoBox.appendChild(dueDateLabel);
        dueDateLabel.appendChild(dueDate);

        const prioritySelect = document.createElement('select');
        prioritySelect.classList.add('prioritySelect');
        const lowPriority = document.createElement('option');
        lowPriority.value = 'low';
        lowPriority.textContent = 'Low';
        const mediumPriority = document.createElement('option');
        mediumPriority.value = 'medium';
        mediumPriority.textContent = 'Medium';
        const highPriority = document.createElement('option');
        highPriority.value = 'high';
        highPriority.textContent = 'High';
        prioritySelect.appendChild(lowPriority);
        prioritySelect.appendChild(mediumPriority);
        prioritySelect.appendChild(highPriority);
        prioritySelect.value = todo.priority;
        prioritySelect.addEventListener('change', () => {
          todo.priority = prioritySelect.value;
          saveToLocalStorage();
          loadDOM();
        });
        const prioritySelectLabel = document.createElement('label');
        prioritySelectLabel.textContent = 'Priority:';
        todoBox.appendChild(prioritySelectLabel);
        prioritySelectLabel.appendChild(prioritySelect);
      }

      // if the 'To-Do' is minimized
      else {
        const miniTitle = document.createElement('h2');
        miniTitle.textContent = todo.title;
        todoBox.appendChild(miniTitle);

        if (todo.dueDate) {
          const miniDueDate = document.createElement('h4');
          miniDueDate.classList.add('miniDueDate');
          miniDueDate.textContent = format(todo.dueDate, 'MM/dd/yyyy');
          const miniDueDateLabel = document.createElement('label');
          miniDueDateLabel.textContent = 'Due:';
          todoBox.appendChild(miniDueDateLabel);
          miniDueDateLabel.appendChild(miniDueDate);
        }
      }

      const editButton = document.createElement('button');
      editButton.classList.add('edit');
      if (todo.maximized) editButton.textContent = '-';
      else editButton.textContent = '+';
      editButton.addEventListener('click', () => {
        todo.maximized = !todo.maximized;
        saveToLocalStorage();
        loadDOM();
      });
      // editButton.addEventListener('click', function(e) {
      //    e.target.classList.toggle('clicked');
      // });
      todoBox.appendChild(editButton);

      const deleteButton = document.createElement('img');
      deleteButton.classList.add('delete');
      deleteButton.src = trashCan;
      todoBox.appendChild(deleteButton);
      deleteButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this to-do?')) {
          removeItemFromArray(todo, project.todoList);
          saveToLocalStorage();
          loadDOM();
        }
      });
    }
  }
}

// driver script
if (localStorage.length == 0) {
  saveToLocalStorage();
}
loadLocalStorage();
loadDOM();
