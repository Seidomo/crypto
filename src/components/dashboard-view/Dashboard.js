import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadPrices, add } from '../../store/collection.reducer.js';
import { PromiseProvider } from 'mongoose';

function Dashboard(props) {

  useEffect(() => {
    props.loadPrices();
  }, []);

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(e.target.ticker.value);
    add(e.target.ticker.value);
  }


  return (
    <View style={styles.container}>
      <form onSubmit={handleSumbit}>
        <label>Add Currency to Collection</label>
        <input name="ticker"type="text" required></input>
        <button type="submit">Add</button>
      </form>
      <ul>
        {props.prices.map((price, i) => {
          return <li key={i}><span>{price.currency}</span>${price.price}</li>
        })}
      </ul>
      <Text>Open up App.js to start working on your app!!!!!!</Text>
      <StatusBar style="auto" />
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

const mapStateToProps = state => {
  return {
    prices: state.collection.prices
  }
}

const mapDispatchToProps = {
  loadPrices,
  add
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
