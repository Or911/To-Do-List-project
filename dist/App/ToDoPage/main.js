
const getDataFromUser = function () {
    let userData = {}
    let title = $("#title-text").val();
    let date = $("#date-text").val();
    let description = $("#description-text").val();
    userData = {name: title, date: date, description: description}
    return userData
}

$("#submit-button").on('click', function () {
    const ToDoData = getDataFromUser()
    console.log(ToDoData);
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3002/Todo',
        data: ToDoData 
      });
})