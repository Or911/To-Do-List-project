const render = new Render();
const userDataAPI = new UserDataAPI()
$("body").on("click", ".delete-btn", function () {
  const footer = $(this).parent();
  const parent = footer.parent().html();
  const name = $(`${parent}:first-child`).html();
  $.get(`/deleteTodo/${name}`);
});

$("body").on("click", ".fc-event-main", function () {
  let todoList = $(this).children(".fc-event-title").text();
  console.log(todoList); //name of card to find the data
  render.ToDoCardRender(mokdata); //insert the data to render
  $(".cards-container").addClass("displayCard");
});
$(".cards-container").on("click", "#buttonXofCard", function () {
  $(".cards-container").removeClass("displayCard");
});

$("#doneListPage").on("click", function () {
  console.log(11);
  window.location.href = "/App/done-page/index.html";
});

const firstLoad = function (){
  render.calendar();
  userDataAPI.getDataUser()
  .then(data => {
    data.forEach((d) =>{
      render.addEvent(d)
    })
  })
}

 // render first time
firstLoad()