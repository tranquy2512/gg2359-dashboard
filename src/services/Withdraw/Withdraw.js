import BaseService from "../Base";

class Withdraw {
  withdraw(ticker, data) {
    return BaseService.post("/withdraw/" + ticker, data, BaseService.getOptions());
  }
}

export default new Withdraw();