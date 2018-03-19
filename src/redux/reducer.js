import * as Constants from '../constants';


let initial = {
  stocks: [],
  startTime: Date.now()
};
const reducer = (state = initial, action) => {

  switch (action.type) {
    case Constants.STOCK_UPDATE:
      console.log(action);
      var newStocks = JSON.parse(action.wsEvent.data).reduce((total, item) => {
      	total[item[0]] = {
          name: item[0],
          price: parseFloat(Math.round(item[1] * 100) / 100).toFixed(2),
          time: Date.now(),
          change: changeOfPrice(state.stocks[item[0]]?state.stocks[item[0]]["price"]:null, item[1])
        };
        return total;
      }, {});
      return Object.assign({}, state, {
        stocks: Object.assign({}, state.stocks, newStocks)
        });
      break;
    default:
      return state;
  }
};

function changeOfPrice(oldPrice, newPrice) {
  return (oldPrice ? parseFloat(Math.round((newPrice - oldPrice) * 100) / 100).toFixed(2) : null);
  //return (oldPrice ? (oldPrice < newPrice ? "up" : "down") : "none");
}
export default reducer;
