import React from 'react';
import {Text, View} from 'react-native';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import {ApolloProvidor} from 'react-apollo';
import {nativeHistory, Route, Router} from 'react-router-native';

const networkInterface = createNetworkInterface({uri: 'https://api.graph.cool/simple/v1/cj68ly79e4bxr01084hnjvhtw'})

const client = new ApolloClient({networkInterface})

const container = {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
}

export default class App extends React.Component {
    render() {
        return (
            <View style={container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}
