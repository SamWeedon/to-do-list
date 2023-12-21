// NON-DOM FUNCTIONALITY
// define title, description, due date, priority for todo
// add, delete todo
// add, delete project
// edit todo
// mark todos as complete
// project names
import './style.css';

const ToDo = (title, description, dueDate, priority) => {
    const complete = false;
    return {title, description, dueDate, priority, complete};
};

const Project = (title, todoList) => {
    return {title, todoList};
}

const defaultToDo = ToDo('groceries', 'get milk', new Date('2023-12-08'), 'high');
const ToDo1 = ToDo('eat', 'eat dinner', new Date('2023-12-09'), 'low');
const ToDo2 = ToDo('run', '3 miles', new Date('2023-12-10'), 'medium');

let defaultProject = Project('default', [defaultToDo, ToDo1, ToDo2]);
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

        const projectHeading = document.createElement('h2');
        projectHeading.textContent = project.title;
        projectBox.appendChild(projectHeading);

        const addTodoButton = document.createElement('button');
        addTodoButton.textContent = '+';
        addTodoButton.addEventListener('click', function() {
            project.todoList.unshift(ToDo('','','',''));
            loadDOM();
        });
        projectBox.appendChild(addTodoButton);

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.textContent = 'Delete Project';
        deleteProjectButton.addEventListener('click', function() {
            let index = projectList.indexOf(project);
            projectList.splice(index, 1);
            loadDOM();
        });
        projectBox.appendChild(deleteProjectButton);

        for (let todo of project.todoList) {
            const todoBox = document.createElement('div');
            todoBox.classList.add('todoBox');

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            todo.complete ? completeButton.style.backgroundColor = 'green' : completeButton.style.backgroundColor = 'initial';
            completeButton.addEventListener('click', function() {
                todo.complete = !todo.complete;
                todo.complete ? completeButton.style.backgroundColor = 'green' : completeButton.style.backgroundColor = 'initial';               
            })
            todoBox.appendChild(completeButton);

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

            const dueDate = document.createElement('input');
            dueDate.type = 'date';
            if (todo.dueDate) {
                dueDate.valueAsDate = todo.dueDate;
            }
            dueDate.addEventListener('input', function() {
                todo.dueDate = new Date(dueDate.value);
            })

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
            })

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'delete';
            const editButton = document.createElement('button');
            editButton.textContent = 'edit';

            projectBox.appendChild(todoBox);
            todoBox.appendChild(title);
            todoBox.appendChild(description);
            todoBox.appendChild(dueDate);
            todoBox.appendChild(prioritySelect);
            todoBox.appendChild(deleteButton);
            
            deleteButton.addEventListener('click', function(e) {
                const button = e.target;
                removeObjectWithPropertyValue('title', todo.title, project.todoList);
                loadDOM();
            })
        }
    }

    const addProjectButton = document.createElement('button');
    addProjectButton.textContent = 'Add Project';
    addProjectButton.addEventListener('click', () => {
        let projectTitle = prompt("Project title?");
        addProject(projectList, Project(projectTitle, [ToDo('', '', '', '')]));
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