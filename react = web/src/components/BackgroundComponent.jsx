import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

const BackgroundComponent = () => (
    <View style={styles.container}>
        <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
            <Defs>
                <RadialGradient
                    id="grad1"
                    cx="25%"
                    cy="25%"
                    r="25%"
                    fx="25%"
                    fy="25%"
                >
                    <Stop offset="99%" stopColor="#180a22" />
                    <Stop offset="101%" stopColor="rgba(0, 0, 0, 0)" />
                </RadialGradient>
                <RadialGradient
                    id="grad2"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                >
                    <Stop offset="98%" stopColor="#5b42f3" />
                    <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
                </RadialGradient>
                <RadialGradient
                    id="grad3"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                >
                    <Stop offset="50%" stopColor="#5b42f3" />
                    <Stop offset="100%" stopColor="#180a22" />
                </RadialGradient>
            </Defs>
            <Rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#grad1)"
            />
            <Rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#grad2)"
                opacity={0.5}
            />
            <Rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#grad3)"
                opacity={0.5}
            />
        </Svg>
        <LinearGradient
            colors={['#5b42f3', '#180a22']}
            style={styles.overlay}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.5,
    },
});

export default BackgroundComponent;
