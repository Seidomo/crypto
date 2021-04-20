import axios from 'axios';

let initialState = {
  currency : [],
  prices: [],
}






console.log(initialState.currency);


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
        currency: [...state.currency, payload],
        prices: state.prices,
      };
      case "SET_INITIAL_CURRENCIES":
        console.log('REDUCER', payload);
        return{
          currency: payload,
          prices: state.prices,
        }
      default:
        return state;
  }
}

// export const add = (target) =>{
//   getData()
//   .then(response => {
//     let json = JSON.parse(response);
//     storeData([...json, target]);
//   })
//   console.log(target);
// }

export const updateTicker = (target) => {
  return {
    type: 'ADD_CURRENCY',
    payload: target
  }
}

export const setTicker = (target) => {
  console.log('SET TICKER FIRED');
  return{
    type: 'SET_INITIAL_CURRENCIES',
    payload: target
  }
}

export const loadPrices = () => (dispatch, getState) => {

  console.log(getState());
  let collection = getState();
  let priceQueryString = collection.collection.currency.reduce((a,b) => a + ',' + b, '');
  return axios.get(`https://api.nomics.com/v1/currencies/ticker?key=911389757c5ae75d545c66e2995f4263&ids=${priceQueryString}&interval=1d,30d&convert=USD&per-page=3&page=1`)
    .then(response => {
      dispatch({
        type: 'GET_PRICES',
        payload: response.data
      })
    })
}