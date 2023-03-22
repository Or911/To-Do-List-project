const todo = new TodoList();

function doneRendrer(){
  todo.getAllList()
}

function removeDoneCard() {
  cardName = $(this).data("name")
  todo.delete(cardName)
  doneRendrer()
}

$("#cardId").on("click", "#remove", removeDoneCard)

doneRendrer()