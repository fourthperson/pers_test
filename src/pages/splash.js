import React from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { darkColor, primaryColor, whiteColor } from '../config/theme';

function SplashPage() {
  return(
    <>
      <StatusBar backgroundColor={darkColor}/>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={whiteColor} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashPage;
