import BaseService from "../Base";

class Balance {
  getTokenBalances() {
    return BaseService.get("/mainBalances", BaseService.getOptions());
  }
  getSubBalances(ticker) {
    return BaseService.get("/subBalances/" + ticker, BaseService.getOptions());
  }
}

export default new Balance();