const render = new Render();
// זה הדאטא שנכנס 
// let mokdata = {
//   name: "to do",
//   isDone: true,
//   date: "2023-03-23",
//   description: "hi dear my name",
// };
// let mok = {
//   name: "go to work",
//   isDone: true,
//   date: "2023-03-25",
//   description: "i need to dfo",
// };
// renderManager.renderCalendar.addEvent(mokdata); // render new event to page calender
// render.addEvent(mok);

$("body").on("click", ".delete-btn", function () {
  const footer = $(this).parent();
  const parent = footer.parent().html();
  const name = $(`${parent}:first-child`).html();
  $.get(`/deleteTodo/${name}`);
});

$("body").on("click" , '.fc-event-main', function(){
  let todoList = $(this).children('.fc-event-title').text()
  console.log(todoList);//name of card to find the data
  render.ToDoCardRender(mokdata)//insert the data to render
  $(".cards-container").addClass("displayCard")
})
$(".cards-container").on("click", "#buttonXofCard", function () {
  $(".cards-container").removeClass("displayCard") 
});

$('#doneListPage').on("click", function(){
  console.log(11);
      window.location.href = '/App/done-page/index.html';
})


render.calendar();// render first time