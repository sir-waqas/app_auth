import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { CustomButton, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    //State to handle text input
    state = { email: '', password: '', error: '', loading: false };

    //Helper function to sign the user in using firebase
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
                // .catch(() => {
                //     this.setState({ error: 'Authentication Failed' });
                // });
            });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed',
            loading: false
        });
    }
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        } else {
            return (
                <CustomButton onPress={this.onButtonPress.bind(this)}>
                    Log In
            </CustomButton>

            );
        }

    }


    render() {
        return (
            <Card>
                <CardSection>
                    {/* <TextInput
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                        // onChangeText={text => this.setState({ text: text })}
                        style={{ height: 20, width: 100 }}
                    /> */}
                    <Input
                        placeholder="user@domain.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="<Password>"
                        label="Password"
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}
export default LoginForm;