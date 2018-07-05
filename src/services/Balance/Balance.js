import BaseService from "../Base";

class Balance {
  getTokenBalances() {
    return BaseService.get("/balances", BaseService.getOptions());
  }
}

export default new Balance();