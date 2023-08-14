import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { darkColor, primaryColor, whiteColor } from '../config/theme';
import { useNavigation } from '@react-navigation/native';
import { splashScreenDurationMillis } from '../config/config';
import { routeAnimation } from '../nav/navigator';

function SplashPage() {

  const navigation = useNavigation();

  async function nav() {
    navigation.replace(routeAnimation);
  }

  useEffect(() => {
    setTimeout(nav, splashScreenDurationMillis);
  }, []);

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
