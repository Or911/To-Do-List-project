class UserDataAPI {
  constructor() {
    this.data = [];
  }
  getUserByName(name){
    return this.data.find(d => d.name == name)
  }

  getDataUser() {
    return $.ajax({
      method: "GET",
      url: `/Todo`,
      dataType: "json",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      success: (data) => {
      this.data = data
      },
    });
  }
  delete(name){
    $.ajax({
        method:"DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
        url: `/Todo/${name}`,
        
        success: (info) => {
            return "success"
            console.log(info+"deleted");
        }
    })
}
}
