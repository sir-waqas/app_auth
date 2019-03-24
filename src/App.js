import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app'; // This import should be above the custom components
import '@firebase/auth'; //We need "npm install --save firebase" to make this work

//Custom Components imports
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    //LifeCycle Method to Initialize Firebase from WebSetup on Firebase Console
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBsaXqqEioMPhYrSdSrSd3mCwK0sUHUeAc', //Just need to use single quotes
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
                <LoginForm />
                {/* <LoginForm /> */}
            </View>
        );
    }
}
export default App;