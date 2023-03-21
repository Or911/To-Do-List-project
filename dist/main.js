
$("body").on('click', '.delete-btn', function () {
    const footer = $(this).parent();
    const parent = footer.parent().html()
    const name = $(`${parent}:first-child`).html()
    $.get(`/deleteTodo/${name}`)
})
