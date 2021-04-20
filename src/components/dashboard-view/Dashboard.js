import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadPrices, add } from '../../store/collection.reducer.js';
import { PromiseProvider } from 'mongoose';
import { Avatar, Button, Card, Title, Paragraph, IconButton, Surface, Divider } from 'react-native-paper';

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
      <Card>
        {props.prices.map((price, i) => {
          return <Surface style={stylesTwo.surface} key={i}>
            <Card.Title title={price.currency} subtitle={price.price} left={(props) => <Avatar.Icon {...props} icon="sword-cross" />} right={(props) => <IconButton {...props} icon="trash-can-outline" onPress={() => {}} />}/>
            </Surface>
        })}
      </Card>
      <StatusBar style="auto" />
    </View>
  );
}

const stylesTwo = StyleSheet.create({
  surface: {
    padding: 8,
    margin: 10,
    height: 80,
    width: 280,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
});

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
