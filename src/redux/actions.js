import * as Constants from '../constants';

const updateStocks = (wsEvent) => ({type: Constants.STOCK_UPDATE, wsEvent});

export const updateStocksAction = (wsEvent) => dispatch => {
    dispatch(updateStocks(wsEvent));
};
