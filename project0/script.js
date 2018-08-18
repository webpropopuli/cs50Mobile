// const classNames = {
//   TODO_ITEM: 'todo-container',
//   TODO_CHECKBOX: 'todo-checkbox',
//   TODO_TEXT: 'todo-text',
//   TODO_DELETE: 'todo-delete',
// }

const elList = document.getElementById('todo-list')
const elItemCount = document.getElementById('item-count')
const elUncheckedCount = document.getElementById('unchecked-count')

let todoTotal = 0;

let todoItems = [];

function InitializeAll() {
  //document.body.style.backgroundColor = 'fuchsia';
}

function addItem() {
  let msg = ''
  msg = prompt('Enter Todo')
//! TND add "Priority" option to add something to top. Maybe a checkbox
  if(msg !== '')
    newTodo(msg, false);  // true = add at top; false = add at bottom
}

function newTodo(msg, pri) {
 
  const newItem = document.createElement('li')
  newItem.textContent = msg
  
  if(pri == false)
    elList.appendChild(newItem)
  else
    elList.insertBefore(newItem, elList.firstElementChild)

  todoTotal++;
  elItemCount.innerText = todoTotal
}

function delItem(pos) {
  if(todoTotal === 0) return

  if(pos === 'last') {
    elList.removeChild(elList.lastElementChild)
    todoTotal--
  }
  else if(pos === 'first') {
    elList.removeChild(elList.firstElementChild)
    todoTotal--
  }
  else {
    var children = elList.childNodes
    if(pos >= todoTotal) {
      elList.removeChild(children[pos])
      todoTotal--
    }
  }
  elItemCount.innerText = todoTotal
}

function deleteTodo(ndx) {
//! TBD
  todoTotal--;
  elItemCount.innerText = todoTotal
}

