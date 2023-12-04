// NON-DOM FUNCTIONALITY
// define title, description, due date, priority for todo
// add, delete todo
// add, delete project
// edit todo
// mark todos as complete

const ToDo = (title, description, dueDate, priority) => {
    const complete = false;
    return {title, description, dueDate, priority, complete};
};

const defaultToDo = ToDo('groceries', 'get milk', '12-8', 'high');
const ToDo1 = ToDo('eat', 'eat dinner', '12-9', 'low');
const ToDo2 = ToDo('run', '3 miles', '12-10', 'medium');

let defaultProject = [defaultToDo, ToDo1, ToDo2];
let projectList = [defaultProject];


function loadDOM() {
    for (let project of projectList) {
        for (let todo of project) {
            const container = document.createElement('div');
            const title = document.createElement('h2');
            title.textContent = todo.title;
            const description = document.createElement('p');
            description.textContent = todo.description;
            const dueDate = document.createElement('p');
            dueDate.textContent = todo.dueDate;
            document.body.appendChild(container);
            container.appendChild(title);
            container.appendChild(description);
            container.appendChild(dueDate);
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
    // generic function for changing object properties
    obj[property] = newValue; 
}

function toggleBooleanProperty(obj, property) {
    // generic function for toggling boolean object properties
    obj[property] = !obj[property];
}

function nestListWithinList(nestedList, parentList) {
    // generic function for adding something to the beginning of a list
    parentList.unshift(nestedList);
}

function addProject(projectList, project) {
    // specific function for adding a project to the list
    projectList.unshift(project);
}

removeObjectWithPropertyValue('title', 'eat', defaultProject);
changeObjectPropertyValue(ToDo2, 'description', '10 miles');
toggleBooleanProperty(ToDo2, 'complete');

console.log(defaultProject);

