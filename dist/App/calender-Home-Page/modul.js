class dataUser{
    constructor(){
        this.list = []
    }

    getDataUser(){
        $ajax
            let title = $("#title-text").val();
            let date = $("#date-text").val();
            let description = $("#description-text").val();
            userData = {name: title, date: date, description: description}
            return userData
        }
        
    }
