import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import UserScreen from '../UserScreen';

class App extends Component {
  render() {
    return (
        <View>
            <UserScreen username={this.props.user.name}/>
            <TextInput
                onChangeText={(value) => {this.props.setName(value)}}

                /*value={this.state.text}*/
            />
            <Button
                onPress={() => {this.props.setName("Change !!")}}
                title={'Chang Name'}
            >
            </Button>
        </View>
    );
  }
}

const mapStatetoProps=(state) => {
    return{
        user: state.user,
        emp: state.emp
    };
};

const mapDispatchtoProps=(dispatch) => {
    return{
        setName: (name) => {
            dispatch({
                type: "setName",
                payload: name
            })
        }
    };
};

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
