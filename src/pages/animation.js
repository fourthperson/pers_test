import React, { useEffect, useRef } from 'react';
import { Animated, Easing, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { darkColor, primaryColor, whiteColor } from "../config/theme";
import LottieView from 'lottie-react-native';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

function AnimationPage(){
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current,{
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  }, []);

  useEffect(() => {
    if(animationProgress.current === 1) {
      //navigate to next screen
      console.log('Animation complete! Navigate now');
    }
  }, [animationProgress]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={darkColor}/>
      <SafeAreaView>
        <AnimatedLottieView style={{height:'30%', width:'30%'}}
          progress={animationProgress.current}
          source={require('../../assets/json/happy_user.json')} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default AnimationPage;
