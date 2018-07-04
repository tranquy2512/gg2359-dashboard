import BaseService from "../Base";

class User {
  getUserList() {
    return BaseService.get("/users", BaseService.getOptions());
  }
  getUserHistory() {
    return BaseService.get("/usersHistories", BaseService.getOptions());
  }
}

export default new User();