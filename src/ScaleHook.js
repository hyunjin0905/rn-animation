import React, {useEffect, useRef, useState} from 'react'
import {Animated, StyleSheet} from 'react-native'

const ScaleHook = () =>  {
    const animationValueRef = useRef(new Animated.Value(1));

    useEffect(() => {
        Animated.timing(animationValueRef.current,
            { toValue: 2, duration: 2000 }
        ).start();

    }, [])
    const animationStyles = {
        transform: [
            { scale: animationValueRef.current }
        ]
    };
    return (
        <Animated.View style={[styles.blueSquare, animationStyles]}>
        </Animated.View>
    )
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

export default ScaleHook
