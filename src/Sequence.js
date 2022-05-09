import React, {Component} from 'react';
import {View, Animated, StyleSheet} from 'react-native';


export default class Sequence extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            positions: [
                new Animated.ValueXY({x:0, y:0}),
                new Animated.ValueXY({x:0, y:0}),
                new Animated.ValueXY({x:0, y:0}),
                new Animated.ValueXY({x:0, y:0}),
            ]
        };
    }

    componentDidMount(){
        Animated.sequence(
            this.state.positions.map((position) => this._moveX(position))
        ).start();
    }

    _moveX(position){
        return Animated.timing (
            position, {
                toValue : {x: 200, y: 0},
                duration : 1000,
                delay : 0,
                useNativeDriver: false
            });
    }

    _getStyle(position){
        return {
            width: 100, height: 100,
            backgroundColor: 'skyblue',
            transform:[
                {translateX: position.x},
            ]
        }
    }

    render() {

        return (
            <View style={styles.container}>
                {
                    this.state.positions.map((data, index) => {
                        return  <Animated.View style={[styles.blueSquare, this._getStyle(data)]} key={index}/>
                    })
                }

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blueSquare: {
        width: 100,
        height: 100,
        backgroundColor: "skyblue",
    },

});
