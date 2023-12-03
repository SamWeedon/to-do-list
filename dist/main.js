/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9EbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5fTtcbn07XG5cbmNvbnN0IGRlZmF1bHRUb0RvID0gVG9EbygnZ3JvY2VyaWVzJywgJ2dldCBtaWxrJywgJzEyLTgnLCAnaGlnaCcpO1xuY29uc3QgVG9EbzEgPSBUb0RvKCdlYXQnLCAnZWF0IGRpbm5lcicsICcxMi05JywgJ2xvdycpO1xuY29uc3QgVG9EbzIgPSBUb0RvKCdydW4nLCAnMyBtaWxlcycsICcxMi0xMCcsICdtZWRpdW0nKTtcblxuLy9jb25zb2xlLmxvZyhkZWZhdWx0VG9Eby50aXRsZSwgZGVmYXVsdFRvRG8uZGVzY3JpcHRpb24sIGRlZmF1bHRUb0RvLmR1ZURhdGUsIGRlZmF1bHRUb0RvLnByaW9yaXR5KTtcblxubGV0IGRlZmF1bHRQcm9qZWN0ID0gW2RlZmF1bHRUb0RvLCBUb0RvMSwgVG9EbzJdO1xuXG5mdW5jdGlvbiByZW1vdmVPYmplY3RXaXRoUHJvcGVydHlWYWx1ZShwcm9wZXJ0eSwgdmFsdWUsIGxpc3QpIHtcbiAgICBsZXQgaW5kZXg7XG4gICAgZm9yIChsZXQgb2JqIG9mIGxpc3QpIHtcbiAgICAgICAgaWYgKG9ialtwcm9wZXJ0eV0gPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGluZGV4ID0gbGlzdC5pbmRleE9mKG9iaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xufVxuXG5yZW1vdmVPYmplY3RXaXRoUHJvcGVydHlWYWx1ZSgndGl0bGUnLCAnZWF0JywgZGVmYXVsdFByb2plY3QpO1xuY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==