import React, { Component } from 'react'
import { StyleSheet, ScrollView, TextInput, Button } from 'react-native'

class SurveyScreen extends Component {
  constructor() {
    super();
    this.state = {
        name: ''
    }
  }

    goToWeather() {
        this.props.navigation.navigate("Forecast", {name: this.state.name})
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    
  
  render() {
    return (
      <ScrollView>
        <TextInput
            value={this.state.name}
            onChangeText={(val) => this.updateInputVal(val, 'name')}  
        />
        <Button
            title="Ke Layar Weather"
            onPress={() => this.goToWeather()}
        />  
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: 20,
  }
})

export default SurveyScreen
