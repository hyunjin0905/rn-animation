import React, {Component} from 'react';
import {View, Animated, StyleSheet} from 'react-native';


export default class Spring extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            value: new Animated.Value(0),
            position: new Animated.ValueXY({x:0, y:0}),
        };
    }

    componentDidMount(){
        Animated.spring (
            this.state.position, {
                toValue : {x:0, y: -100},
                friction : 2, // 얼마나 띠용할것인지
                tension : 100, //얼마나 격렬하게 스프링 줄것인지지
                useNativeDriver: false
            }).start();
    }


    render() {

        const animationStyles = {
            transform:[
                {translateY:this.state.position.y},
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
