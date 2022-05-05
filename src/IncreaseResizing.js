import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Easing,
    Animated, Button
} from 'react-native';

class IncreaseResizing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: new Animated.Value(100)
        }

    }
    componentDidMount() {
        Animated.timing(this.state.animation,{ toValue: 200, duration: 2000 ,useNativeDriver: false }).start();
    }

    render() {
        const animationStyles = {
            width: this.state.animation,
            height: this.state.animation
        };


        return (
            <View style={styles.container}>
                <Animated.View style={[styles.blueSquare, animationStyles]}>
                    <Text style={styles.text}>Hello world</Text>
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

export default IncreaseResizing;
