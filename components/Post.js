import React from 'react';
import {View, Image, Text} from 'react-native';

export default class Post extends React.Component {

    static propTypes = {
        post: React.PropTypes.object
    }

    styleComponent = {
        flex: 1,
        width: 150,
        height: 150
    }

    render() {
        return (
            <View style={this.styleComponent}>
                <Image
                    style={this.styleComponent}
                    source={{
                    uri: this.props.post.imageUrl
                }}/>
                <Text>{this.props.post.description}</Text>
            </ View>
        )
    }
}