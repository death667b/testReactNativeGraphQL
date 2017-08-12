import React from 'react';
import {Text, View} from 'react-native';
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {MemoryRouter, Route, Switch} from 'react-router-native';
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
                <MemoryRouter>
                    <Switch>
                        <Route exact path='/' component={ListPage} />
                        <Route path='/create' component={CreatePage} />
                    </ Switch>
                </ MemoryRouter>
            </ ApolloProvider>
        )
    }
}
