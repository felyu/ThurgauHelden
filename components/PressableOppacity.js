import React from "react";
import { Pressable, Animated } from "react-native";


const PressableOpacity = ({ children, ...props }) => {
  const animated = new Animated.Value(1);
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.5,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 60,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPressIn={fadeIn} onPressOut={fadeOut} {...props}>
      <Animated.View style={{ opacity: animated }}>{children}</Animated.View>
    </Pressable>
  );
};

export default PressableOpacity;