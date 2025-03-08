// create a todo

let allTodo = [];

// here newTodo is actual just todo string
function addTodo(newTodo) {
  let todo = {};
  todo.title = newTodo;
  todo.done = false;
  allTodo.push(todo);
}

// here deleteTodo will be a string
function deleteTodo(deleteTodo) {
  allTodo = allTodo.filter((todo) => todo.title !== deleteTodo);
}

function markTodo(title, status) {
  allTodo.forEach((todo) => {
    if (todo.title === title) {
      todo.done = status;
    }
  });
}

addTodo("Buy groceries");
addTodo("Read a book");
addTodo("Exercise");

deleteTodo("Exercise");

markTodo("Read a book", true);

function getTodo() {
  return allTodo;
}

// console.log(allTodo);
///////////////////////////

program
  .command("addTodo")
  .argument("<string>", "string to split")
  .action((str) => {
    addTodo(str);
  });

program
  .command("deleteTodo")
  .argument("<string>", "string to split")
  .action((str) => {
    deleteTodo(str);
  });

program
  .command("markDone")
  .argument("<string>", "string to split")
  .argument("<string>")
  .action((str, status) => {
    markTodo(str, status);
  });

program.command("getTodo").action(() => {
  console.log(getTodo());
});

program.parse();
