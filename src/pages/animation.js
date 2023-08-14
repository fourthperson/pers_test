import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { darkColor } from '../config/theme';

function AnimationPage(){
  return (
    <>
      <StatusBar backgroundColor={darkColor}/>
      <SafeAreaView>
      </SafeAreaView>
    </>
  );
}

export default AnimationPage;
