import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Easing,
    Animated, Button
} from 'react-native';

class AnimThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: new Animated.Value(0)
        }

    }
    componentDidMount() {
        Animated.timing(this.state.animation,{ toValue: 250, duration: 2000 ,useNativeDriver: false }).start();
    }

    render() {
        const animationStyles = {
            transform: [
                { translateY: this.state.animation }
            ]
        };

        return (
            <View>
                <Animated.View style={[styles.blueSquare, animationStyles]}>
                    <View style={styles.blueSquare}></View>
                </Animated.View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    redSquare: {
        width: 100,
        height: 100,
        backgroundColor: "red"
    },
    greenSquare: {
        width: 100,
        height: 100,
        backgroundColor: "green"
    },
    blueSquare: {
        width: 100,
        height: 100,
        backgroundColor: "skyblue"
    }
});

export default AnimThree;
