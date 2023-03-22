class UserDataAPI {
  constructor() {
    this.data = [];
  }
  sortData(data){
    let date = data.date
    console.log(date);
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
        data.forEach(d => {
          this.sortData(d)
        });
        
      },
    });
  }
}
