// NON-DOM FUNCTIONALITY
// define title, description, due date, priority for todo
// add, delete todo
// add, delete project
// edit todo
// mark todos as complete
import './style.css';

const ToDo = (title, description, dueDate, priority) => {
    const complete = false;
    return {title, description, dueDate, priority, complete};
};

const defaultToDo = ToDo('groceries', 'get milk', '12-8', 'high');
const ToDo1 = ToDo('eat', 'eat dinner', '12-9', 'low');
const ToDo2 = ToDo('run', '3 miles', '12-10', 'medium');

let defaultProject = [defaultToDo, ToDo1, ToDo2];
let projectList = [defaultProject];

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function loadDOM() {
    removeAllChildren(document.body);
    for (let project of projectList) {
        const projectBox = document.createElement('div');
        projectBox.classList.add('projectBox');
        document.body.appendChild(projectBox);

        for (let todo of project) {
            const todoBox = document.createElement('div');
            todoBox.classList.add('todoBox');
            const title = document.createElement('h2');
            title.textContent = todo.title;
            const description = document.createElement('p');
            description.textContent = todo.description;
            const dueDate = document.createElement('p');
            dueDate.textContent = todo.dueDate;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'delete';
            projectBox.appendChild(todoBox);
            todoBox.appendChild(title);
            todoBox.appendChild(description);
            todoBox.appendChild(dueDate);
            todoBox.appendChild(deleteButton);

            deleteButton.addEventListener('click', function(e) {
                const button = e.target;
                removeObjectWithPropertyValue('title', title.textContent, project);
                loadDOM();
            })
        }
    }
}

loadDOM();

function removeObjectWithPropertyValue(property, value, list) {
    // generic function for removing an object with a given property value from a list
    let index;
    for (let obj of list) {
        if (obj[property] == value) {
            index = list.indexOf(obj);
        }
    }
    list.splice(index, 1);
}

function changeObjectPropertyValue(obj, property, newValue) {
    // generic function for changing object properties (UNECESSARY)
    obj[property] = newValue; 
}

function toggleBooleanProperty(obj, property) {
    // generic function for toggling boolean object properties
    obj[property] = !obj[property];
}

function toggleCompleteStatus(todo) {
    // specific function for toggling todo complete status
    todo.complete = !todo.complete;
}

function nestListWithinList(nestedList, parentList) {
    // generic function for adding something to the beginning of a list
    parentList.unshift(nestedList);
}

function addProject(projectList, project) {
    // specific function for adding a project to the list
    projectList.unshift(project);
}

//removeObjectWithPropertyValue('title', 'eat', defaultProject);
//changeObjectPropertyValue(ToDo2, 'description', '10 miles');
//toggleBooleanProperty(ToDo2, 'complete');

//console.log(defaultProject);

//loadDOM();