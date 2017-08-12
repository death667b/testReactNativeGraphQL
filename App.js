import React from 'react';
import {Text, View} from 'react-native';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {NativeRouter, Route, Switch} from 'react-router-native';
import ListPage from './components/ListPage';
import CreatePage from './components/CreatePage';

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
            <ApolloProvider client={client}>
                <NativeRouter>
                    <Switch>
                    <Route path='/' component={ListPage} />
                    <Route path='/create' component={CreatePage} />
                    </ Switch>
                </ NativeRouter>
            </ ApolloProvider>
        )
    }
}
