import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import UserScreen from '../UserScreen';
import { NavigationActions } from 'react-navigation';
import Screen2 from "../Screen2";

class App extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    };

  render() {
      console.log(this.props.nav);
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
            <Button
                onPress={() => {this.props.Add(500)}}
                title={'ADD'}
            >
            </Button>
          {/*  <Button
                onPress={() => {this.navigateToScreen('Screen2')}}
                title={'Go'}
            >
            </Button>*/}
        </View>
    );
  }
}

export default connect(
    (state) => ({
        user: state.user,
        emp: state.emp,
        /*nav: state.nav,*/
    }),
    (dispatch) => ({
        setName: (name) => {dispatch({type: "setName", payload: name})},
        Add: (value) => {dispatch({type: "ADD", payload: value})}
    })
)(App);
