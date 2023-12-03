const ToDo = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
};

const defaultToDo = ToDo('groceries', 'get milk', '12-8', 'high');
const ToDo1 = ToDo('eat', 'eat dinner', '12-9', 'low');
const ToDo2 = ToDo('run', '3 miles', '12-10', 'medium');

//console.log(defaultToDo.title, defaultToDo.description, defaultToDo.dueDate, defaultToDo.priority);

let defaultProject = [defaultToDo, ToDo1, ToDo2];

function removeObjectWithPropertyValue(property, value, list) {
    let index;
    for (let obj of list) {
        if (obj[property] == value) {
            index = list.indexOf(obj);
        }
    }
    list.splice(index, 1);
}

removeObjectWithPropertyValue('title', 'eat', defaultProject);
console.log(defaultProject);