/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AnimOne from "./src/Animation01";
import AnimTwo from "./src/Animation02"
import AnimThree from "./src/Animation03";
import FadingInAndOut from "./src/FadingInAndOut";
import Movement from "./src/Movement";
import IncreaseResizing from "./src/IncreaseResizing";
import DecreaseResizing from "./src/DecreaseResizing";
import Rotate from "./src/Rotate";
import RotateY from "./src/RotateY";
import RotateX from "./src/RotateX";
import ColorChange from "./src/ColorChange";

class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <ColorChange/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  }
});

export default App;
