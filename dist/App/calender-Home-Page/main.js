const render = new Render();
const userDataAPI = new UserDataAPI();
$("body").on("click", ".delete-btn", function () {
  const footer = $(this).parent();
  const parent = footer.parent().html();
  const name = $(`${parent}:first-child`).html();
  $.get(`/deleteTodo/${name}`);
});

$("body").on("click", ".fc-event-main", function () {
  let nameOfList = $(this).children(".fc-event-title").text();
  let list = userDataAPI.getUserByName(nameOfList);
  render.ToDoCardRender(list);
  $(".cards-container").addClass("displayCard");
});
$(".cards-container").on("click", "#buttonXofCard", function () {
  $(".cards-container").removeClass("displayCard");
});

$("#doneListPage").on("click", function () {
  window.location.href = "/App/done-page/index.html";
});

$("#createListPage").on("click", function () {
  window.location.href = "/App/ToDoPage/index.html";
});
$('body').on("click", ".deleteList",function(){
  cardName = $(this).data("name")
  console.log(cardName);
  // userDataAPI.delete(cardName)
  // render.calendar();
})

const firstLoad = function () {
  render.calendar();
  userDataAPI.getDataUser().then((data) => {
    data.forEach((d) => {
      render.addEvent(d);
    });
  });
};

// render first time
firstLoad();
