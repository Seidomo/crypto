import axios from 'axios';

let initialState = {
  currency: ['NMR', 'ETH', 'BTC'],
  prices: [],
}
console.log(localStorage.getItem('currency'));
if(!localStorage.getItem('currency')){
  localStorage.setItem('currency', JSON.stringify(initialState.currency))
}
let priceQueryString = initialState.currency.reduce((a,b) => a + ',' + b);

export default function collectionReducer(state = initialState, action){
  let { type, payload } = action;

  switch(type){
    case "GET_PRICES":
      return {
        currency: state.currency,
        prices: payload,
      }
    case "ADD_CURRENCY":
      return{
        currency: [...state.currency, payload],
        prices: [...prices],
      }
      default:
        return state;
  }
}

export const add = (target) =>{
  // let collection = JSON.parse(localStorage.getItem('collection'));
  // console.log(collection);
  // collection.push(payload);
  // localStorage.setItem('currency', collection);
  // console.log('hello')
  return {
    type: 'ADD_CURRENCY',
    payload: target
  }
}

export const loadPrices = () => (dispatch, getState) => {
  return axios.get(`https://api.nomics.com/v1/currencies/ticker?key=911389757c5ae75d545c66e2995f4263&ids=${priceQueryString}&interval=1d,30d&convert=USD&per-page=100&page=1`)
    .then(response => {
      console.log(response.data);
      dispatch({
        type: 'GET_PRICES',
        payload: response.data
      })
    })
}