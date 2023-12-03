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

//console.log(defaultToDo.title, defaultToDo.description, defaultToDo.dueDate, defaultToDo.priority);

let defaultProject = [defaultToDo, ToDo1, ToDo2];
let projectList = [defaultProject];

function removeObjectWithPropertyValue(property, value, list) {
    let index;
    for (let obj of list) {
        if (obj[property] == value) {
            index = list.indexOf(obj);
        }
    }
    list.splice(index, 1);
}

function changeObjectPropertyValue(obj, property, newValue) {
    obj[property] = newValue; 
}

function toggleBooleanProperty(obj, property) {
    obj[property] = !obj[property];
}

//function nestListWithinList(nestedList, parentList) {
//    parentList.unshift(nestedList);
//}

function addProject(projectList, project) {
    projectList.unshift(project);
}

removeObjectWithPropertyValue('title', 'eat', defaultProject);
changeObjectPropertyValue(ToDo2, 'description', '10 miles');
toggleBooleanProperty(ToDo2, 'complete');

console.log(defaultProject);