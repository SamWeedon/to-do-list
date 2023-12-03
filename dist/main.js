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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOT04tRE9NIEZVTkNUSU9OQUxJVFlcbi8vIGRlZmluZSB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSBkYXRlLCBwcmlvcml0eSBmb3IgdG9kb1xuLy8gYWRkLCBkZWxldGUgdG9kb1xuLy8gYWRkLCBkZWxldGUgcHJvamVjdFxuLy8gZWRpdCB0b2RvXG4vLyBtYXJrIHRvZG9zIGFzIGNvbXBsZXRlXG5cbmNvbnN0IFRvRG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IGNvbXBsZXRlID0gZmFsc2U7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZX07XG59O1xuXG5jb25zdCBkZWZhdWx0VG9EbyA9IFRvRG8oJ2dyb2NlcmllcycsICdnZXQgbWlsaycsICcxMi04JywgJ2hpZ2gnKTtcbmNvbnN0IFRvRG8xID0gVG9EbygnZWF0JywgJ2VhdCBkaW5uZXInLCAnMTItOScsICdsb3cnKTtcbmNvbnN0IFRvRG8yID0gVG9EbygncnVuJywgJzMgbWlsZXMnLCAnMTItMTAnLCAnbWVkaXVtJyk7XG5cbi8vY29uc29sZS5sb2coZGVmYXVsdFRvRG8udGl0bGUsIGRlZmF1bHRUb0RvLmRlc2NyaXB0aW9uLCBkZWZhdWx0VG9Eby5kdWVEYXRlLCBkZWZhdWx0VG9Eby5wcmlvcml0eSk7XG5cbmxldCBkZWZhdWx0UHJvamVjdCA9IFtkZWZhdWx0VG9EbywgVG9EbzEsIFRvRG8yXTtcbmxldCBwcm9qZWN0TGlzdCA9IFtkZWZhdWx0UHJvamVjdF07XG5cbmZ1bmN0aW9uIHJlbW92ZU9iamVjdFdpdGhQcm9wZXJ0eVZhbHVlKHByb3BlcnR5LCB2YWx1ZSwgbGlzdCkge1xuICAgIGxldCBpbmRleDtcbiAgICBmb3IgKGxldCBvYmogb2YgbGlzdCkge1xuICAgICAgICBpZiAob2JqW3Byb3BlcnR5XSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgaW5kZXggPSBsaXN0LmluZGV4T2Yob2JqKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU9iamVjdFByb3BlcnR5VmFsdWUob2JqLCBwcm9wZXJ0eSwgbmV3VmFsdWUpIHtcbiAgICBvYmpbcHJvcGVydHldID0gbmV3VmFsdWU7IFxufVxuXG5mdW5jdGlvbiB0b2dnbGVCb29sZWFuUHJvcGVydHkob2JqLCBwcm9wZXJ0eSkge1xuICAgIG9ialtwcm9wZXJ0eV0gPSAhb2JqW3Byb3BlcnR5XTtcbn1cblxuLy9mdW5jdGlvbiBuZXN0TGlzdFdpdGhpbkxpc3QobmVzdGVkTGlzdCwgcGFyZW50TGlzdCkge1xuLy8gICAgcGFyZW50TGlzdC51bnNoaWZ0KG5lc3RlZExpc3QpO1xuLy99XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdExpc3QsIHByb2plY3QpIHtcbiAgICBwcm9qZWN0TGlzdC51bnNoaWZ0KHByb2plY3QpO1xufVxuXG5yZW1vdmVPYmplY3RXaXRoUHJvcGVydHlWYWx1ZSgndGl0bGUnLCAnZWF0JywgZGVmYXVsdFByb2plY3QpO1xuY2hhbmdlT2JqZWN0UHJvcGVydHlWYWx1ZShUb0RvMiwgJ2Rlc2NyaXB0aW9uJywgJzEwIG1pbGVzJyk7XG50b2dnbGVCb29sZWFuUHJvcGVydHkoVG9EbzIsICdjb21wbGV0ZScpO1xuXG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9