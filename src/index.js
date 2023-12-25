// NON-DOM FUNCTIONALITY
// define title, description, due date, priority for todo
// add, delete todo
// add, delete project
// edit todo
// mark todos as complete
// project names
import './style.css';
import { format } from 'date-fns';
import removeAllChildren from './removeAllChildren.js'
import removeItemFromArray from './removeItemFromArray.js';

const ToDo = (title, description, dueDate, priority) => {
    const complete = false;
    const maximized = false;
    return {title, description, dueDate, priority, complete, maximized};
};

const Project = (title, todoList) => {
    return {title, todoList};
}

const defaultToDo = ToDo('groceries', 'get milk', new Date('2023-12-08T00:00'), 'high');
const ToDo1 = ToDo('eat', 'eat dinner', new Date('2023-12-09T00:00'), 'low');
const ToDo2 = ToDo('run', '3 miles', new Date('2023-12-10T00:00'), 'medium');

let defaultProject = Project('default', [defaultToDo, ToDo1, ToDo2]);
let projectList = [defaultProject];

function loadDOM() {
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

            if (todo.maximized) {
                const completeButton = document.createElement('button');
                completeButton.textContent = 'Complete';
                todo.complete ? completeButton.style.backgroundColor = 'green' : completeButton.style.backgroundColor = 'initial';
                completeButton.addEventListener('click', function() {
                    todo.complete = !todo.complete;
                    todo.complete ? completeButton.style.backgroundColor = 'green' : completeButton.style.backgroundColor = 'initial';
                    saveToLocalStorage();               
                })
                todoBox.appendChild(completeButton);
    
                const title = document.createElement('textarea');
                title.textContent = todo.title;
                title.addEventListener('input', function() {
                    todo.title = title.value;
                    saveToLocalStorage();
                })
                todoBox.appendChild(title);
    
                const description = document.createElement('textarea');
                description.textContent = todo.description;
                description.addEventListener('input', function() {
                    todo.description = description.value;
                    saveToLocalStorage();
                })
                todoBox.appendChild(description);
    
                const dueDate = document.createElement('input');
                dueDate.type = 'date';
                if (todo.dueDate) {
                    dueDate.valueAsDate = new Date(todo.dueDate);
                }
                dueDate.addEventListener('input', function() {
                    todo.dueDate = new Date(dueDate.value + 'T00:00');
                    saveToLocalStorage();
                })
                todoBox.appendChild(dueDate);
    
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
                todoBox.appendChild(prioritySelect);
    
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'delete';
                todoBox.appendChild(deleteButton);
                
                deleteButton.addEventListener('click', function() {
                    removeItemFromArray(todo, project.todoList);
                    saveToLocalStorage();
                    loadDOM();
                })
            }

            else {
                const miniTitle = document.createElement('h3');
                miniTitle.textContent = todo.title;
                todoBox.appendChild(miniTitle);

                if (todo.dueDate) {
                    const miniDueDate = document.createElement('h4');
                    miniDueDate.textContent = format(todo.dueDate, 'MM/dd/yyyy');
                    todoBox.appendChild(miniDueDate);
                }
            }

            const editButton = document.createElement('button');
            if (todo.maximized) editButton.textContent = 'Minimize';
            else editButton.textContent = 'Expand';
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

loadLocalStorage();
loadDOM();

function saveToLocalStorage() {
    localStorage.clear();
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

function loadLocalStorage() {
    projectList = [];
    const storedProjectList = JSON.parse(localStorage.getItem('projectList'));
    for (let project of storedProjectList) {
        projectList.push(project);
    }
}