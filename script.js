let Todos = document.getElementById("todos");
let todos = {
    day1: {
        history: "15/12",
        done: false,
        todo: [
            {
                Syntax : [
                    "- Lecutre 4",
                    "- Quick revision Lecture 1, 2"
                ],
                Complexity : [
                    "- 1/2 First midterm"
                ],
                Other : [
                    "CreatingTodoList"
                ]
            }
        ]
    }
}

function showTodos() {
    Object.keys(todos).forEach(key => {
        let day = todos[key];
        let dayTodos = day["todo"];

        Todos.innerHTML += `<span id='task'> ${day["history"]} <br> </span>`;

        Object.keys(dayTodos).forEach(todo => {  
            Object.keys(dayTodos).forEach(subject => {                
                let tasks = dayTodos[subject];                
                Object.keys(tasks).forEach(task => {
                    Todos.innerHTML += `<span id='task'>${task} </span>`;
                    Todos.innerHTML += "<ol>";
                    for(let i = 0; i < tasks[task].length; i++) {
                        Todos.innerHTML += `<li> ${tasks[task][i]} </li>`;
                    }
                    Todos.innerHTML += "</ol>";
                });              
            });
        });

        Todos.innerHTML += "<br><hr><br>";
    });
}

showTodos()