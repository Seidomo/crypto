import axios from 'axios';

let initialState = {
  currency : [],
  prices: [],
  search: '',
}


export default function collectionReducer(state = initialState, action){
  let { type, payload } = action;

  switch(type){
    case "GET_PRICES":
      payload.map(price => { 
        if(!price.logo_url){
          price.logo_url = '';
        }
        return price;
      })
      return {
        currency: state.currency,
        prices: payload,
        search: state.search,
      };
    case "ADD_CURRENCY":
      return{
        currency: [...state.currency, payload.toUpperCase()],
        prices: state.prices,
        search: state.search,
      };
      case "SET_INITIAL_CURRENCIES":
        const newObject = {
          currency: payload,
          prices: state.prices,
          search: state.search,
        };
        return{
          currency: payload,
          prices: state.prices,
          search: state.search,
        }
      case "SEARCH_CURRENCY":
        if(Array.isArray(payload) && payload.length === 0){
          payload = [{currency: '', logo_url:''}];
        }
        return{
          currency: state.currency,
          prices: state.prices,
          search: payload[0],
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

export const searchCurrency = (target) => (dispatch, getState) => {
  if(target.length === 0){
    target = 'emptyText';
  }
  return axios.get(`https://api.nomics.com/v1/currencies/ticker?key=911389757c5ae75d545c66e2995f4263&ids=${target}&interval=1d,30d&convert=USD&per-page=1&page=1`)
    .then(response => {
      dispatch({
        type: 'SEARCH_CURRENCY',
        payload: response.data
      })
    })
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