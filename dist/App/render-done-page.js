function renderDonePage(doneArray) {
    $(".done-container").empty()
    const source = $("#done-template").html()
    const template = Handlebars.compile(source)
    let newHtml = template({doneArray})
    $(".done-container").append(newHtml)
}