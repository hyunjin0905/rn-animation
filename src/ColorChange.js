import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Easing,
    Animated, Button
} from 'react-native';

class ColorChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: new Animated.Value(0)
        }

    }
    componentDidMount() {
        Animated.timing(
            this.state.animation,
            { toValue: 1, duration: 3000 ,useNativeDriver: false }
        ).start();
    }

    render() {
        const animationStyles = {
            backgroundColor: this.state.animation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['orange', 'rgb(0, 200, 0)', 'purple']
            })
        };


        return (
            <View style={styles.container}>
                <Animated.View style={[styles.blueSquare, animationStyles]}>
                </Animated.View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    blueSquare: {
        width: 100,
        height: 100,
        backgroundColor: "skyblue",
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        padding: 5
    }
});

export default ColorChange;
