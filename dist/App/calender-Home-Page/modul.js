class UserDataAPI {
  constructor() {
    this.data = [];
  }
  getDataUser() {
    return $.ajax({
      method: "GET",
      url: `/Todo`,
      dataType: "json",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      success: (info) => {
        this.data = info;
        return this.data;
      },
    });
  }
}
