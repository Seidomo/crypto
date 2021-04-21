import axios from 'axios';

let initialState = {
  currency : [],
  prices: [],
}


export default function collectionReducer(state = initialState, action){
  let { type, payload } = action;

  switch(type){
    case "GET_PRICES":
      return {
        currency: state.currency,
        prices: payload,
      };
    case "ADD_CURRENCY":
      return{
        currency: [...state.currency, payload.toUpperCase()],
        prices: state.prices,
      };
      case "SET_INITIAL_CURRENCIES":
        return{
          currency: payload,
          prices: state.prices,
        }
      default:
        return state;
  }
}


export const updateTicker = (target) => {
  return {
    type: 'ADD_CURRENCY',
    payload: target
  }
}

export const setTicker = (target) => {
  return{
    type: 'SET_INITIAL_CURRENCIES',
    payload: target
  }
}

export const loadPrices = () => (dispatch, getState) => {
  let collection = getState();
  let length = collection.collection.currency.length;
  let priceQueryString = collection.collection.currency.reduce((a,b) => a + ',' + b, '');
  return axios.get(`https://api.nomics.com/v1/currencies/ticker?key=911389757c5ae75d545c66e2995f4263&ids=${priceQueryString}&interval=1d,30d&convert=USD&per-page=${length}&page=1`)
    .then(response => {
      dispatch({
        type: 'GET_PRICES',
        payload: response.data
      })
    })
}