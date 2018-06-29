import BaseService from "../Base";

class User {
  getUserList() {
    return BaseService.get("/users", BaseService.getOptions());
  }
}

export default new User();