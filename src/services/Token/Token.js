import BaseService from "../Base";

class Token {
  getTokenList() {
    return BaseService.get("../tokens", BaseService.getOptions());
  }
  getTokenByTicker(ticker) {
    return BaseService.get("../tokens/" + ticker, BaseService.getOptions());
  }
  updateToken(ticker, data) {
    return BaseService.put("../tokens/" + ticker, data, BaseService.getOptions());
  }
  createToken(data) {
    return BaseService.post("../tokens", data, BaseService.getOptions());
  }
  deleteToken(ticker) {
    return BaseService.delete("../tokens/" + ticker, BaseService.getOptions());
  }
  getTokenHistory(ticker) {
    return BaseService.get("/tokenHistories/" + ticker, BaseService.getOptions());
  }
}

export default new Token();