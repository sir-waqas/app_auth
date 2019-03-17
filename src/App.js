import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase'; // This import should be above the custom components
import { Header } from './components/common';

class App extends Component {
    //LifeCycle Method to load items before visuals
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBsaXqqEioMPhYrSdSrSd3mCwK0sUHUeAc',
            authDomain: 'auth-e7ac5.firebaseapp.com',
            databaseURL: 'https://auth-e7ac5.firebaseio.com',
            projectId: 'auth-e7ac5',
            storageBucket: 'auth-e7ac5.appspot.com',
            messagingSenderId: '846221714758'
        });
    }
    render() {
        return (
            // <View style={{ flex: 1, marginTop: 50 }}>
            <View>
                <Header headerText="Authentication" />
            </View>
        );
    }
}
export default App;