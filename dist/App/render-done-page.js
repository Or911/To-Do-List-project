function renderDonePage(doneArray) {
    $(".window").empty()
    const source = $("#done-template").html()
    const template = Handlebars.compile(source)
    let newHtml = template({doneArray})
    $(".window").append(newHtml)
}