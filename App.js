import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View , } from 'react-native';
import Dashboard from './components/dashboard-view/Dashboard.js'
import axios from 'axios';


export default function App() {







  /* 
    async function getData() {
      let response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD', {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'X-CMC_PRO_API_KEY': '7963e390-1cc3-4eeb-8247-1a4d02492abd',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Content-Encoding': 'gzip'
        },
  
      })
      let data = await gzip(JSON.stringify(response))
      console.log(data);
      return data;
    }*/
      
  useEffect(() => {
    axios.get("https://api.nomics.com/v1/currencies/ticker?key=911389757c5ae75d545c66e2995f4263&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1")
    .then(response => console.log(response))
    console.log('yo dawgs')
  }, []);

  /* 
    return new Promise((resolve, reject) => {
      fetch(api_base + "/api/save-photo", {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then((response) => {
          if (response.status === 404) {
            throw new Error('404 (Not Found)');
          } else {
            return response.json().then((json) => {
              console.log('save poster response: ', json);
              return json;
            });
          }
        });
    });
   */


  /* 
    const requestOptions = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      qs: {
        'start': '1',
        'limit': '5000',
        'convert': 'USD'
      },
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
      },
      json: true,
      gzip: true
    };
   */

  return (
    <View style={styles.container}>
      <Dashboard />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
