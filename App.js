import React, { Component, useState } from 'react';
import {
  Text, View, FlatList, StyleSheet
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import ItemRow from './ItemRow';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            style: {
              backgroundColor: '#3c3c3c',//color you want to change
            }
          }}

          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {

              if(route.name=="Tab1")
              return <Icon name="arrow-up-outline" size={25} color="grey" />
              if(route.name=="Tab2")
              return <Icon name="pause" size={25} color="grey" />
              if(route.name=="Tab3")
              return <Icon3 name="barschart" size={25} color="grey" />
              else return <Icon3 name="home" size={25} color="grey" />
            },
          })}>
          <Tab.Screen name="Tab1" component={Main} />
          <Tab.Screen name="Tab2" component={Main} />
          <Tab.Screen name="Tab3" component={Main} />
          <Tab.Screen name="Tab4" component={Main} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}



function Main() {
  const [Data, setData] = useState([{
    action: 'Withdrew',
    amount: '+$1200.00',
    date: '1 Mar 2020',
    subAmount: '$31.20',
    icon: 'arrow-up-outline'
  }, {
    action: 'Trade-Fee',
    amount: '-$500.00',
    date: '3 Feb 2020',
    subAmount: '$31.20',
    icon: 'arrow-up-outline'
  }, {
    action: 'Buy',
    amount: '-$900.00',
    date: '9 Jun 2020',
    subAmount: '$31.20',
    icon: 'arrow-up-outline'
  }, {
    action: 'Withdrew',
    amount: '+$1200.00',
    date: '1 Mar 2020',
    subAmount: '$31.20',
    icon: 'arrow-up-outline'
  }, {
    action: 'Trade-Fee',
    amount: '-$500.00',
    date: '3 Feb 2020',
    subAmount: '$31.20',
    icon: 'arrow-up-outline'
  }, {
    action: 'Buy',
    amount: '-$900.00',
    date: '9 Jun 2020',
    subAmount: '$31.20',
    icon: 'arrow-up-outline'
  }, {
    action: 'Withdrew',
    amount: '+$1200.00',
    date: '1 Mar 2020',
    subAmount: '$31.20',
    icon: 'arrow-up-outline'
  }, {
    action: 'Trade-Fee',
    amount: '-$500.00',
    date: '3 Feb 2020',
    subAmount: '$31.20',
    icon: 'arrow-up-outline'
  }, {
    action: 'Buy',
    amount: '-$900.00',
    date: '9 Jun 2020',
    subAmount: '$31.20',
    icon: 'arrow-up-outline'
  },
  ])
  return (
    <View style={{ backgroundColor: 'black', flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 16, color: 'white', alignSelf: 'center' }}>
        $ US Dollar
              </Text>
      <View
        style={{
          marginTop: 40,
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}
      />
      <Text style={{ marginTop: 30, alignSelf: 'center', fontSize: 18, color: 'white' }}>$31.20</Text>
      <Text style={{ alignSelf: 'center', fontSize: 12, color: 'grey' }}>$31.20</Text>

      <View style={{ flexDirection: 'row' }}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Deposite</Text>
        </View>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Withdraw</Text>
        </View>
      </View>

      <Text style={{
        color: 'white',
        fontSize: 14,
        marginTop: 20,
        marginBottom: 20
      }}>
        Recent Transactions
</Text>

      <FlatList
        data={Data}
        renderItem={({ item }) =>
          <ItemRow data={item} />
        } />


    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    margin: 10

  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'center'
  }
});