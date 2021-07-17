import "react-native-gesture-handler"
import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import ComponentsNavigation from './src/navigation/stackNav';
import { createStore,applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';

const createdStore = applyMiddleware(thunk)(createStore);
const storage = createdStore(reducers);

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
            <Provider store={storage}>
              <ComponentsNavigation/>   
            </Provider>   
  );

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
