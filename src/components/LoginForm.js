import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { CustomButton, Card, CardSection } from './common';

export default class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput style={{ height: 20, width: 100 }} />
                </CardSection>
                <CardSection>
                    <TextInput style={{ height: 20, width: 100 }} />
                </CardSection>

                <CardSection>
                    <CustomButton>
                        Log In
                    </CustomButton>
                </CardSection>
            </Card>
        );
    }
}
// export default LoginForm;