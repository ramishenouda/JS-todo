let todos = document.getElementById("todos");

let requestURL = 'https://github.com/ramishenouda/JS-todo/blob/master/data.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const todoItems = request.response;
    showTodos(todoItems);
}

function showTodos(todosJSONObject)
{
    console.log(todosJSONObject.day1);
}