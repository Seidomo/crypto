import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadPrices, add, updateTicker } from '../../store/collection.reducer.js';
import { PromiseProvider } from 'mongoose';
import { Avatar, Button, Card, Title, Paragraph, IconButton, Surface, Divider } from 'react-native-paper';


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
    collection: state.collection
  }
}

const mapDispatchToProps = {
  loadPrices,
  add,
  updateTicker
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
