import React from 'react';
import { View, TextInput, Button, Image, Text} from 'react-native';
import { withRouter } from 'react-router-native';

class CreatePage extends React.Component {

    state = {
        description: '',
        imageURL: '',
    }

    textStyle = {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    }

    render() {
        return (
            <View>
                <TextInput 
                    style={this.textStyle} 
                    onChangeText={( text ) => this.setState({ description: text })}
                    placeholder={'Description'}
                />
                <TextInput
                    style={this.textStyle}
                    onChangeText={( text ) => this.setState({ imageURL: text})}
                    placeholder={'Image URL'}
                />
                {this.renderImage()}
                {this.renderButton()}
            </ View>
        )
    }

    renderImage = () => {
        if (this.state.imageURL) {
            return (
                <Image 
                    source={{ uri: this.state.imageURL }}
                    style={{ width: 200, height: 200 }}
                />

            )
        }
        return null;
    }

    renderButton = () => {
        if (this.state.description && this.state.imageURL) {
            return (
                <Button title={'Post'} onPress={this.handlePost} />
            )
        }
        return null;
    }

    handlePost = () => {
        // stub - complete later
    }
}