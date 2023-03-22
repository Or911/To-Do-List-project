class Render {
  constructor() {
    this.events = [];
  }

  addEvent(todoList) {
    let newEvent = this.sortDataToEvent(todoList);
    this.events.push(newEvent);
    this.calendar();
  }
  sortDataToEvent(todoList) {
    const imgDone = "https://cdn-icons-png.flaticon.com/512/4436/4436481.png";
    let newEvent = {
      title: todoList.name,
      start: new Date(),
      end: todoList.date,
    };
    if (todoList.isDone) {
      newEvent.image_url = imgDone;
    }
    return newEvent;
  }

  calendar() {
    $('.window').append(`<div id='calendar-container'></div>`)
    const calendarHtml = document.getElementById("calendar-container");
    const calendar = new FullCalendar.Calendar(calendarHtml, {
      initialView: "dayGridMonth",
      events: this.events,
      eventContent: function (arg) {
        let arrayOfDomNodes = [];

        let titleEvent = document.createElement("div");
        if (arg.event._def.title) {
          titleEvent.innerHTML = arg.event._def.title;
          titleEvent.classList = "fc-event-title fc-sticky";
        }

        let imgEventWrap = document.createElement("div");
        if (arg.event.extendedProps.image_url) {
          let imgEvent =
            '<img src="' + arg.event.extendedProps.image_url + '" >';
          imgEventWrap.classList = "fc-event-img";
          imgEventWrap.innerHTML = imgEvent;
        }

        arrayOfDomNodes = [titleEvent, imgEventWrap];

        return { domNodes: arrayOfDomNodes };
      },
    });
    calendar.render();
  }
  ToDoCardRender(card){
      $(".cards-container").empty()
      const source = $("#card-template").html()
      const template = Handlebars.compile(source)
      let newHtml = template(card)
      $(".cards-container").append(newHtml)
  }
  
}
