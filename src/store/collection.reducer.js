import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

let initialState = {
  currency : ['BTC', 'ETH', 'NMR'],
  prices: [],
}


const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@collection')
    if(value !== null) {
      console.log(value);
      return value;
    }
  } catch(e) {
    // error reading value
  }
}

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@collection', jsonValue)
  } catch (e) {
    // saving error
  }
}

// getData().then(response => add(response));
storeData(initialState.currency);
getData();

let priceQueryString = initialState.currency.reduce((a,b) => a + ',' + b);

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
        prices: [...prices],
      };
      default:
        return state;
  }
}

export const add = (target) =>{
  getData()
  .then(response => {
    let json = JSON.parse(response);
    storeData([...json, target]);
  })
  console.log(target);
}

export const updateTicker = () => (dispatch, getState) => {
  return dispatch({
    type: 'ADD_CURRENCY',
    payload: 'XRP'
  })
}

export const loadPrices = () => (dispatch, getState) => {
  return axios.get(`https://api.nomics.com/v1/currencies/ticker?key=911389757c5ae75d545c66e2995f4263&ids=${priceQueryString}&interval=1d,30d&convert=USD&per-page=100&page=1`)
    .then(response => {
      dispatch({
        type: 'GET_PRICES',
        payload: response.data
      })
    })
}