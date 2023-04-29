const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list")
const menu = document.querySelector(".menu");
const menuSpan = document.querySelector(".span");
const header = document.querySelector(".headerlist");

// console.log(todoInput);

todoForm.addEventListener("submit", (e) => {
  e.preventDefault()
  // console.log(todoInput.value);
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
  <span class="text">${newTodoText}</span>
  <div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
  </div>`;
  newLi.innerHTML = newLiInnerHtml;
  // console.log(newLi);
  todoList.append(newLi);
  todoInput.value = "";
})

todoList.addEventListener("click", (e) => {
  // console.log(e.target);
  // console.log(e.target.classList);
  if(e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if(e.target.classList.contains("done")) {
   const liSpan = e.target.parentNode.previousElementSibling;
  //  console.log(liSpan);
   liSpan.style.textDecoration = "line-through";
   liSpan.style.textDecorationColor = "Red";
   liSpan.style.textDecorationStyle = "double";
  }
  
});

menu.addEventListener("click", () => {
  const divList = `<span>
  <div><p>Home</p></div>
  <div><p>Home</p></div>
  <div><p>Home</p></div>
  </span>`;
  // divList.style.display = "flex";
  
  if(menuSpan.innerHTML !== divList){
    menuSpan.innerHTML = divList;
  } else {
    menuSpan.innerHTML = "";
  }

}); 