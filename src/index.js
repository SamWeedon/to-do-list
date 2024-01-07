import './style.css';
import { format } from 'date-fns';
import removeAllChildren from './removeAllChildren.js'
import removeItemFromArray from './removeItemFromArray.js';

const ToDo = (title, description, dueDate, priority) => {
    // A 'To-Do' item as part of a larger 'project'
    const complete = false;
    const maximized = false;
    return {title, description, dueDate, priority, complete, maximized};
};

const Project = (title, todoList) => {
    // A project that contains a 'To-Do' list
    return {title, todoList};
}

// Creates default content for the first time visiting the website
const defaultToDo = ToDo('groceries', 'get milk', new Date('2023-12-08T00:00'), 'high');
const ToDo1 = ToDo('eat', 'eat dinner', new Date('2023-12-09T00:00'), 'low');
const ToDo2 = ToDo('run', '3 miles', new Date('2023-12-10T00:00'), 'medium');
let defaultProject = Project('default', [defaultToDo, ToDo1, ToDo2]);

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
    for (let project of storedProjectList) {
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

    for (let project of projectList) {
        const projectBox = document.createElement('div');
        projectBox.classList.add('projectBox');
        document.body.appendChild(projectBox);

        const projectHeading = document.createElement('h2');
        projectHeading.textContent = project.title;
        projectBox.appendChild(projectHeading);

        const addTodoButton = document.createElement('button');
        addTodoButton.textContent = 'Add ToDo';
        addTodoButton.addEventListener('click', function() {
            project.todoList.unshift(ToDo('','','',''));
            saveToLocalStorage();
            loadDOM();
        });
        projectBox.appendChild(addTodoButton);

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.textContent = 'Delete Project';
        deleteProjectButton.addEventListener('click', function() {
            removeItemFromArray(project, projectList);
            saveToLocalStorage();
            loadDOM();
        });
        projectBox.appendChild(deleteProjectButton);

        for (let todo of project.todoList) {
            const todoBox = document.createElement('div');
            todoBox.classList.add('todoBox');
            projectBox.appendChild(todoBox);

            // if the user has expanded the 'To-Do'
            if (todo.maximized) {
                const completeCheckbox = document.createElement('input');
                completeCheckbox.classList.add('completeCheckbox');
                completeCheckbox.type = 'checkbox';
                todo.complete ? completeCheckbox.checked = true : completeCheckbox.checked = false;
                completeCheckbox.addEventListener('click', () => {
                    todo.complete = !todo.complete;
                    saveToLocalStorage();
                    loadDOM();
                })
                todoBox.appendChild(completeCheckbox);
    
                const title = document.createElement('textarea');
                title.classList.add('title');
                title.textContent = todo.title;
                title.addEventListener('input', function() {
                    todo.title = title.value;
                    saveToLocalStorage();
                })
                const titleLabel = document.createElement('label');
                titleLabel.textContent = 'Title:';
                todoBox.appendChild(titleLabel);
                titleLabel.appendChild(title);
    
                const description = document.createElement('textarea');
                description.classList.add('description');
                description.textContent = todo.description;
                description.addEventListener('input', function() {
                    todo.description = description.value;
                    saveToLocalStorage();
                })
                const descriptionLabel = document.createElement('label');
                descriptionLabel.textContent = 'Description:';
                todoBox.appendChild(descriptionLabel);
                descriptionLabel.appendChild(description);
    
                const dueDate = document.createElement('input');
                dueDate.type = 'date';
                if (todo.dueDate) {
                    dueDate.valueAsDate = new Date(todo.dueDate);
                }
                dueDate.addEventListener('input', function() {
                    todo.dueDate = new Date(dueDate.value + 'T00:00');
                    saveToLocalStorage();
                })
                const dueDateLabel = document.createElement('label');
                dueDateLabel.textContent = 'Due Date:';
                todoBox.appendChild(dueDateLabel);
                dueDateLabel.appendChild(dueDate);
    
                const prioritySelect = document.createElement('select');
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
                prioritySelect.addEventListener('change', function() {
                    todo.priority = prioritySelect.value;
                    saveToLocalStorage();
                })
                const prioritySelectLabel = document.createElement('label');
                prioritySelectLabel.textContent = 'Priority:';
                todoBox.appendChild(prioritySelectLabel);
                prioritySelectLabel.appendChild(prioritySelect);
    
                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete');
                deleteButton.textContent = 'delete';
                todoBox.appendChild(deleteButton);
                deleteButton.addEventListener('click', function() {
                    removeItemFromArray(todo, project.todoList);
                    saveToLocalStorage();
                    loadDOM();
                })
            }

            // if the 'To-Do' is minimized
            else {
                const miniTitle = document.createElement('h3');
                miniTitle.textContent = todo.title;
                todoBox.appendChild(miniTitle);

                if (todo.dueDate) {
                    const miniDueDate = document.createElement('h4');
                    miniDueDate.textContent = format(todo.dueDate, 'MM/dd/yyyy');
                    const miniDueDateLabel = document.createElement('label');
                    miniDueDateLabel.textContent = 'Due Date:';
                    todoBox.appendChild(miniDueDateLabel);
                    miniDueDateLabel.appendChild(miniDueDate);
                }
            }

            const editButton = document.createElement('button');
            editButton.classList.add('edit');
            if (todo.maximized) editButton.textContent = '-';
            else editButton.textContent = '+';
            editButton.addEventListener('click', function() {
                todo.maximized = !todo.maximized;
                saveToLocalStorage();
                loadDOM();
            });
            //editButton.addEventListener('click', function(e) {
            //    e.target.classList.toggle('clicked');
            //});
            todoBox.appendChild(editButton);
        }
    }

    const addProjectButton = document.createElement('button');
    addProjectButton.textContent = 'Add Project';
    addProjectButton.addEventListener('click', () => {
        let projectTitle = prompt("Project title?");
        projectList.unshift(Project(projectTitle, [ToDo('', '', '', '')]));
        saveToLocalStorage();
        loadDOM();
    });
    document.body.appendChild(addProjectButton); 
}

// driver script
if (localStorage.length == 0) {
    saveToLocalStorage();
}
loadLocalStorage();
loadDOM();