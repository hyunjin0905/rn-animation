import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Easing,
    Animated, Button
} from 'react-native';

class AnimOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mySquare: new Animated.Value(1)
        }

    }
    runAnimation = () => {
        Animated.timing(this.state.mySquare, {
            toValue: 0,
            duration: 2000,
            delay:1500,
        }).start() ;
    }

    render() {
        return (
            <View>
                <Animated.View //style={this.state.mySquare.getLayout()}
                    style={{
                        opacity:this.state.mySquare,
                        top: this.state.mySquare.interpolate({
                            inputRange: [0, 1],
                            outputRange: [700, 0]
                        })
                    }}
                     >
                    <View style={styles.square}>
                    </View>
                </Animated.View>
                <Button title="Animation start" onPress={this.runAnimation}/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        backgroundColor: "skyblue"
    }
});

export default AnimOne;
