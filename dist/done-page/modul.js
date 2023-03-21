class TodoList {

    constructor() {
        this.data = {};
        }

    getAllList() {
        $.ajax({
            method:"GET",
            url: '/Todo',
            dataType: 'json',
            success: (info) => {
                this.data=info
                renderDonePage(this.data)
            }
        })
        
    }
}