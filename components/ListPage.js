import React from 'react';
import {ScrollView, View, Text, Button} from 'react-native';
import {withRouter} from 'react-router-native';

export default class ListPage extends React.Component {

    viewStyle = {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };

    render() {
        return (
            <View>
                <ScrollView>
                    <View style={this.viewStyle}>
                        <Text>// Content goes here !!</ Text>
                    </ View>
                </ ScrollView>
                <Button onPress={this.createPost} title='Create Post'/>
            </View>
        )
    }

    createPost = () => {
        this
            .props
            .router
            .push('/create');
    }
}