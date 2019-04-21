import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app'; // This import should be above the custom components
import '@firebase/auth'; //We need "npm install --save firebase" to make this work
//Custom Components imports
import { Header, CustomButton, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    //State to represent the loggedIn Status for the user
    state = { loggedIn: false };

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

        //Handle what to do when the Authentication happens or doesn't happen
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            }
            else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CustomButton onPress={() => firebase.auth.signOut()}>
                        LogOut
                </CustomButton>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
        // if (this.state.loggedIn) {
        //     return (
        //         <CustomButton>
        //             LogOut
        //         </CustomButton>
        //     );
        // }
        // return <LoginForm />
    }
    render() {
        return (
            // <View style={{ flex: 1, marginTop: 50 }}>
            <View>
                <Header headerText="Authentication" />
                {/* <LoginForm /> */}
                {this.renderContent()}
            </View>
        );
    }
}
export default App;