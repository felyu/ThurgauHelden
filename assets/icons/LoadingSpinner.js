import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, Animated, Easing } from 'react-native';
import Svg, { Path } from "react-native-svg";

function Spinner(props) {
  return (
    <Svg height={props.size} width={props.size} viewBox="3 3 18 18" {...props}>
      <Path
        fill={props.backColor}
        d="M12 5a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0z"
      />
      <Path
        fill={props.mainColor}
        d="M16.95 7.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0A1 1 0 0116.95 7.05z"
      />
    </Svg>
  )
}

const LoadingSpinner = (props) => {
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));

  const interpolateRotation = useMemo(() => spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  }), [spinAnim]);

  const animatedStyle = {
    transform: [
      { rotate: interpolateRotation }
    ]
  }

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [spinAnim]);

  return (
    <Animated.View style={animatedStyle}>
      <Spinner size={props.size} backColor={props.backColor} mainColor={props.mainColor}></Spinner>
    </Animated.View>
  );
};

export default LoadingSpinner;
