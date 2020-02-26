import React, {FC, memo, useRef, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {Easing} from 'react-native-reanimated';
import {colors, fonts} from '../constants';

type Props = {
  param1: string;
  param2: string;
  value: boolean;
  onPress: (arg0: boolean) => void;
};

const Switch: FC<Props> = memo(({param1, param2, value, onPress}) => {
  const animation = useRef(new Animated.Value(value ? 1 : 0)).current;

  const toggle = useCallback(() => {
    Animated.timing(animation, {
      duration: 200,
      toValue: value ? 0 : 1,
      easing: Easing.inOut(Easing.ease),
    }).start();

    onPress(!value);
  }, [animation, onPress, value]);

  return (
    <TouchableWithoutFeedback onPress={toggle}>
      <View style={styles.wrapper}>
        <Animated.View style={animatedStyles.background(animation)}>
          <LinearGradient
            style={styles.element}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#396afc', '#2948ff']}
          />
        </Animated.View>
        <View
          accessibilityRole="button"
          accessibilityLabel={param1}
          accessibilityState={{selected: value}}
          style={styles.element}
        >
          <Text style={styles.text}>{param1}</Text>
        </View>
        <View
          accessibilityRole="button"
          accessibilityLabel={param1}
          accessibilityState={{selected: value}}
          style={styles.element}
        >
          <Text style={styles.text}>{param2}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});

const animatedStyles: any = {
  background: (animation: any) => ({
    height: 37,
    position: 'absolute',
    width: 80,
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 80],
        }),
      },
    ],
  }),
};

const styles = StyleSheet.create({
  element: {
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: colors.text_1,
    fontSize: 12,
    marginHorizontal: 8,
    ...fonts.regular,
  },
  wrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    padding: 8,
    position: 'relative',
    width: 160,
  },
});

export default Switch;
