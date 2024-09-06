const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');


todoForm.addEventListener('submit',function(e){
    e.preventDefault();

    const task = todoInput.ariaValueMax.trim();

    if (task !== ""){
        addTask(task);
        todoInput.value = "";
    }
});

function addTask(task){
    const li=document.createElement('li');
    li.innerHTML=`
        ${task}
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector(' .delete-btn').addEventListener('click', function(){
        li.remove();
    });

    todoList.append(li);
}