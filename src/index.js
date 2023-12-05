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
            const title = document.createElement('textarea');
            title.textContent = todo.title;
            title.addEventListener('input', function() {
                todo.title = title.value;
                console.log(todo);
            })
            const description = document.createElement('textarea');
            description.textContent = todo.description;
            description.addEventListener('input', function() {
                todo.description = description.value;
                console.log(todo);
            })
            const dueDate = document.createElement('textarea');
            dueDate.textContent = todo.dueDate;
            dueDate.addEventListener('input', function() {
                todo.dueDate = dueDate.value;
                console.log(todo);
            })
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'delete';
            const editButton = document.createElement('button');
            editButton.textContent = 'edit';
            projectBox.appendChild(todoBox);
            todoBox.appendChild(title);
            todoBox.appendChild(description);
            todoBox.appendChild(dueDate);
            todoBox.appendChild(deleteButton);

            deleteButton.addEventListener('click', function(e) {
                const button = e.target;
                removeObjectWithPropertyValue('title', todo.title, project);
                loadDOM();
            })
        }
    }
    const addProjectButton = document.createElement('button');
    addProjectButton.textContent = 'Add Project';
    addProjectButton.addEventListener('click', () => {
        addProject(projectList, [ToDo('', '', '', '')]);
        loadDOM();
    });
    document.body.appendChild(addProjectButton); 
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