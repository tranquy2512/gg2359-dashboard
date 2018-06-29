import BaseService from "../Base";

class Balance {
  getAccountBalances() {
    return BaseService.get("/balances", BaseService.getOptions());
  }
}

export default new Balance();