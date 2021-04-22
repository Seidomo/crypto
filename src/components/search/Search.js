import * as React from 'react';
import { Appbar, Searchbar, Button, Surface, Chip } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { loadPrices, updateTicker, setTicker } from '../../store/collection.reducer.js';


function Search(props) {

    const handleSubmit = () => {
        storeData([...props.collection.currency, addCurrency]);
        props.updateTicker(addCurrency);
      }
    
      const [addCurrency, setCurrency] = useState();
    
      const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@collection', jsonValue)
        } catch (e) {
          // saving error
        }
      }
    
      const getData = async () => {
    
        try {
          const value = await AsyncStorage.getItem('@collection')
          if(value === null) {
            storeData(['BTC', 'ETH']);
            props.setTicker(['BTC', 'ETH'])
          }else{
            props.setTicker(JSON.parse(value));
          }
        } catch (e) {
          // error reading value
        }
      }
    
      useEffect(() => {
        getData();
      }, [])
    
      
    
  return (
    <View style={styles.container}>
    <LinearGradient
      colors={['#002244', '#A5acaf', 'transparent']}
      style={styles.background}
      start={{ x: 0, y: 0}}
      end={{ x: 1, y: 1 }}
      >
        <Surface style={styles.surface}>
        <Searchbar
          placeholder="Search"
          onChangeText={text => setCurrency(text)} 
          name="ticker"
          type="text"
          required
          />
        </Surface>
        <Surface style={styles.surfaceTwo}>
        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          Add Crypto to Collection
        </Button>
        </Surface>
    </LinearGradient>
    <View style={styles.chips}>
        <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#002244',
      height: 115,
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1000,
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 25,
      color: 'white',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '33%',
      marginTop: '15%',
    },
    surface: {
        elevation: 12,
        marginTop: 250,
        marginRight: 40,
        marginLeft: 40,
      },
    button: {
        height: 50,
        paddingTop: 8,
        borderRadius: 25,
        width: 310,
        alignContent: 'center'
    },
    surfaceTwo: {
        elevation: 12,
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomStartRadius: 25,
        borderTopEndRadius: 25,
        borderRadius: 25,
        alignItems: 'center',
      },
      chips: {
        height: 50,
        marginTop: 700
    },
  });

  const mapStateToProps = state => {
    return {
      collection: state.collection
    }
  }

  const mapDispatchToProps = {
    loadPrices,
    setTicker,
    updateTicker
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Search);
