
class TodoList {

    constructor() {
        this.data = {};
        }

    getAllList() {
        $.ajax({
            method:"GET",
            url: `/TodosDone/true`,
            dataType: 'json',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              },
            success: (info) => {
                this.data=info
                renderDonePage(this.data)
            }
        })
        
    }
}
