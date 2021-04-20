import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadPrices, add, updateTicker } from '../../store/collection.reducer.js';
import { PromiseProvider } from 'mongoose';


function Dashboard(props) {

  useEffect(() => {
    props.loadPrices();
  }, [props.collection.currency]);

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(e.target.ticker.value);
    add(e.target.ticker.value);
    updateTicker();
  }


  return (
    <View style={styles.container}>
      <View>
        <Text>Add Currency to Collection</Text>
        <TextInput name="ticker"type="text" required></TextInput>
        <Button title="add"/>
      </View>
        {props.collection.prices.map((price, i) => {
          return <Text key={i}><Text>{price.currency}</Text>${price.price}</Text>
        })}
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
    collection: state.collection
  }
}

const mapDispatchToProps = {
  loadPrices,
  add,
  updateTicker
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
