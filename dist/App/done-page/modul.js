
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
<<<<<<< HEAD:dist/done-page/modul.js

    delete(name){
        $.ajax({
            method:"DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              },
            url: `/Todo/${name}`,
            
            success: (info) => {
            }
        })
    }
}
=======
}
>>>>>>> 383510c4c995176f4b684d711d11507e723f4bc2:dist/App/done-page/modul.js
