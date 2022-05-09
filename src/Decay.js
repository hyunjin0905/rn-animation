import React, {Component} from 'react';
import {View, Animated, StyleSheet} from 'react-native';


export default class Decay extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            value: new Animated.Value(0),
            position: new Animated.ValueXY({x:0, y:0}),
        };
    }

    componentDidMount(){
        Animated.decay (
            this.state.position, {
                toValue : {x:100, y:0},
                velocity : 1,
                useNativeDriver: false
            }).start();
    }


    render() {

        const animationStyles = {
            transform:[
                {translateX:this.state.position.x},
            ]
        };
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.blueSquare, animationStyles]}/>
            </View>
        );
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

});
