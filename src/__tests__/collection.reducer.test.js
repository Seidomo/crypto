'use strict';
import Reducer from '../store/collection.reducer.js';

describe('testing the collection reducer ', () =>{
    test('should get prices form the state', () =>{
        let crypto = {
            name: "Bitcoin",
            currency: "BTC",
            price: "57000.88759838",

        }

        let initialState = {
            currency : [],
            prices: [],
          }

        let state = Reducer(initialState, {type:"GET_PRICES", payload: crypto});
        expect (state.price).toBeTruthy()
    })
})