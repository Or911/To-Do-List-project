class UserDataAPI {
  constructor() {
    this.data = [];
  }
  getUserByName(name) {
    return this.data.find((d) => d.name == name);
  }
  removeUserByName(name) {
    let newData = this.data.filter((d) => d.name !== name);
    this.data = newData;
    return this.data;
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
        this.data = data;
      },
    });
  }

  delete(name) {
    return $.ajax({
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      url: `/Todo/${name}`,

      success: (info) => {
        console.log(info + "deleted");
        return this.removeUserByName(name);
      },
    });
  }
}
