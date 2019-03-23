import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app'; // This import should be above the custom components
import '@firebase/auth';
import Header from './components/common/index';
import LoginForm from './components/LoginForm';

export default class app extends Component {
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
                <LoginForm />
            </View>
        );
    }
}
// export default app;