import React, { Component } from 'react';
import { View, Text } from 'react-native';
class App extends Component {
    render() {
        return (
            // <View style={{ flex: 1, marginTop: 50 }}>
            <View>
                <Header headerText="Authentication" />
                {/* <Text>An App</Text> */}
            </View >
        );
    }
}
export default App;