import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Easing,
    Animated, Button
} from 'react-native';

class FadingInAndOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: new Animated.Value(1)
        }

    }
    componentDidMount() {
        Animated.timing(this.state.animation,{ toValue: 0, duration: 2000 ,useNativeDriver: false }).start();
    }

    render() {
        const animationStyles = {
            opacity: this.state.animation

        };

        return (
            <View style={styles.container}>
                <Animated.View style={[styles.blueSquare, animationStyles]}>
                    <View style={styles.blueSquare}></View>
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
    }
});

export default FadingInAndOut;
