/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTk9OLURPTSBGVU5DVElPTkFMSVRZXG4vLyBkZWZpbmUgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUgZGF0ZSwgcHJpb3JpdHkgZm9yIHRvZG9cbi8vIGFkZCwgZGVsZXRlIHRvZG9cbi8vIGFkZCwgZGVsZXRlIHByb2plY3Rcbi8vIGVkaXQgdG9kb1xuLy8gbWFyayB0b2RvcyBhcyBjb21wbGV0ZVxuXG5jb25zdCBUb0RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBjb21wbGV0ZSA9IGZhbHNlO1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGV9O1xufTtcblxuY29uc3QgZGVmYXVsdFRvRG8gPSBUb0RvKCdncm9jZXJpZXMnLCAnZ2V0IG1pbGsnLCAnMTItOCcsICdoaWdoJyk7XG5jb25zdCBUb0RvMSA9IFRvRG8oJ2VhdCcsICdlYXQgZGlubmVyJywgJzEyLTknLCAnbG93Jyk7XG5jb25zdCBUb0RvMiA9IFRvRG8oJ3J1bicsICczIG1pbGVzJywgJzEyLTEwJywgJ21lZGl1bScpO1xuXG5sZXQgZGVmYXVsdFByb2plY3QgPSBbZGVmYXVsdFRvRG8sIFRvRG8xLCBUb0RvMl07XG5sZXQgcHJvamVjdExpc3QgPSBbZGVmYXVsdFByb2plY3RdO1xuXG5cbmZ1bmN0aW9uIGxvYWRET00oKSB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0TGlzdCkge1xuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIHByb2plY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5sb2FkRE9NKCk7XG5cbmZ1bmN0aW9uIHJlbW92ZU9iamVjdFdpdGhQcm9wZXJ0eVZhbHVlKHByb3BlcnR5LCB2YWx1ZSwgbGlzdCkge1xuICAgIC8vIGdlbmVyaWMgZnVuY3Rpb24gZm9yIHJlbW92aW5nIGFuIG9iamVjdCB3aXRoIGEgZ2l2ZW4gcHJvcGVydHkgdmFsdWUgZnJvbSBhIGxpc3RcbiAgICBsZXQgaW5kZXg7XG4gICAgZm9yIChsZXQgb2JqIG9mIGxpc3QpIHtcbiAgICAgICAgaWYgKG9ialtwcm9wZXJ0eV0gPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGluZGV4ID0gbGlzdC5pbmRleE9mKG9iaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VPYmplY3RQcm9wZXJ0eVZhbHVlKG9iaiwgcHJvcGVydHksIG5ld1ZhbHVlKSB7XG4gICAgLy8gZ2VuZXJpYyBmdW5jdGlvbiBmb3IgY2hhbmdpbmcgb2JqZWN0IHByb3BlcnRpZXNcbiAgICBvYmpbcHJvcGVydHldID0gbmV3VmFsdWU7IFxufVxuXG5mdW5jdGlvbiB0b2dnbGVCb29sZWFuUHJvcGVydHkob2JqLCBwcm9wZXJ0eSkge1xuICAgIC8vIGdlbmVyaWMgZnVuY3Rpb24gZm9yIHRvZ2dsaW5nIGJvb2xlYW4gb2JqZWN0IHByb3BlcnRpZXNcbiAgICBvYmpbcHJvcGVydHldID0gIW9ialtwcm9wZXJ0eV07XG59XG5cbmZ1bmN0aW9uIG5lc3RMaXN0V2l0aGluTGlzdChuZXN0ZWRMaXN0LCBwYXJlbnRMaXN0KSB7XG4gICAgLy8gZ2VuZXJpYyBmdW5jdGlvbiBmb3IgYWRkaW5nIHNvbWV0aGluZyB0byB0aGUgYmVnaW5uaW5nIG9mIGEgbGlzdFxuICAgIHBhcmVudExpc3QudW5zaGlmdChuZXN0ZWRMaXN0KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0TGlzdCwgcHJvamVjdCkge1xuICAgIC8vIHNwZWNpZmljIGZ1bmN0aW9uIGZvciBhZGRpbmcgYSBwcm9qZWN0IHRvIHRoZSBsaXN0XG4gICAgcHJvamVjdExpc3QudW5zaGlmdChwcm9qZWN0KTtcbn1cblxucmVtb3ZlT2JqZWN0V2l0aFByb3BlcnR5VmFsdWUoJ3RpdGxlJywgJ2VhdCcsIGRlZmF1bHRQcm9qZWN0KTtcbmNoYW5nZU9iamVjdFByb3BlcnR5VmFsdWUoVG9EbzIsICdkZXNjcmlwdGlvbicsICcxMCBtaWxlcycpO1xudG9nZ2xlQm9vbGVhblByb3BlcnR5KFRvRG8yLCAnY29tcGxldGUnKTtcblxuY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=