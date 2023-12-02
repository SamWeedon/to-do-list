const ToDo = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
};

const defaultToDo = ToDo('groceries', 'get milk', '12-8', 'high');

console.log(defaultToDo.title, defaultToDo.description, defaultToDo.dueDate, defaultToDo.priority);

let defaultProject = [defaultToDo];