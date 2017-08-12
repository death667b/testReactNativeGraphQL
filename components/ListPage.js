import React from 'react';
import {ScrollView, View, Text, Button} from 'react-native';
import {withRouter} from 'react-router-native';
import Post from './Post';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const FeedQuery = gql`query allPosts {
    allPosts(orderBy: createdAt_DESC) {
      id
      imageUrl
      description
    }
  }`
class ListPage extends React.Component {

    viewStyle = {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };

    render() {
        if (this.props.data.loading) {
            return (<Text>Loading...</ Text>);
        }

        return (
            <View>
                <ScrollView>
                    <View style={this.viewStyle}>
                        {this.props.data.allPosts.reverse().map((post) => 
                            <Post key={post.id} post={post} />
                        )}
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

export default withRouter(graphql(FeedQuery)(ListPage));