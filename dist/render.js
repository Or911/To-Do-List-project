document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        {
        //   title: 'לעשות כושר ',
          start: '2023-03-20',
          image_url: 'https://cdn-icons-png.flaticon.com/512/4436/4436481.png',
        },
      ],
      eventContent: function(arg) {
        let arrayOfDomNodes = []
        // title event
        let titleEvent = document.createElement('div')
        if(arg.event._def.title) {
          titleEvent.innerHTML = arg.event._def.title
          titleEvent.classList = "fc-event-title fc-sticky"
        }
  
        // image event
        let imgEventWrap = document.createElement('div')
        if(arg.event.extendedProps.image_url) {
          let imgEvent = '<img src="'+arg.event.extendedProps.image_url+'" >'
          imgEventWrap.classList = "fc-event-img"
          imgEventWrap.innerHTML = imgEvent;
        }
  
        arrayOfDomNodes = [ titleEvent,imgEventWrap ]
  
        return { domNodes: arrayOfDomNodes }
      },
    });
    calendar.render();
  
  });