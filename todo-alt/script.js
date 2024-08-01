const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

const addTodo = () => {
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0) {
        alert("Please add a value");
        return false;
    }

    // Adding text
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "edit";
    editBtn.classList.add("btn");
    editBtn.classList.add("editBtn");
    li.appendChild(editBtn);
    
    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    inputBox.value = "";
}

const updateTodo = (e) => {
    if(e.target.innerHTML === "delete") {
        todoList.removeChild(e.target.parentElement);
    }
}

addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);