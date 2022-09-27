import React from 'react';
import { View, LogBox } from 'react-native';

import Lottie from 'lottie-react-native';
import logo from '../../assets/bumaxMotion.json';
 
LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
])

export function Loading({ navigation }) {
  function openScreen(){
    navigation.navigate('Loading')
}

  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor:'#fff',}}>
        <Lottie 
        source={logo} 
        autoPlay 
        loop={false}
        onAnimationFinish={() => navigation.navigate('ScreenB')}
        />
    </View>
  );
}