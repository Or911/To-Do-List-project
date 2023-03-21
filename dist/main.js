const render = new Render();
// זה הדאטא שנכנס 
// let mokdata = {
//   name: "to do",
//   isDone: true,
//   date: "2023-03-23",
//   description: "hi dear my name",
// };
// render.addEvent(mokdata); // render new event to page calender


$("body").on("click", ".delete-btn", function () {
  const footer = $(this).parent();
  const parent = footer.parent().html();
  const name = $(`${parent}:first-child`).html();
  $.get(`/deleteTodo/${name}`);
});




render.calendar();// render first time