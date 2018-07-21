import React, { Component } from 'react';
import { Text, View } from 'react-native';

class UserScreen extends Component {
    render() {
        return (
            <View>
                <Text>
                    {'Name : '}{this.props.username}
                </Text>
            </View>
        );
    }
}

/*userScreen.defaultProps = {
    username : ''
};*/

export default UserScreen;
