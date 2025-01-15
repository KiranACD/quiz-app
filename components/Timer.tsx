import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';
import { Player } from '@lottiefiles/react-lottie-player';

type Props = {}

const Timer = (props: Props) => {
  const animationRef = useRef<LottieView>(null);
  const animationData = require('@/assets/LottieLogo.json');
  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationRef.current) {
        console.log('Starting animation...');
        animationRef.current.reset();  // Reset to beginning
        animationRef.current.play();   // Start playing
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Use different components for web and native
  if (Platform.OS === 'web') {
    return (
      <View style={{width: '100%'}}>
        <Text style={{fontSize: 20, fontWeight: "500"}}>Timer</Text>
        <View style={{ 
          width: '100%', 
        }}>
          <Player
            autoplay
            loop
            src={animationData}
            style={{ width: '70%' }}
          />
        </View>
        <Text style={{fontSize: 16, fontWeight: "500", alignSelf: 'center'}}>30 Second</Text>
      </View>
    );
  }
  return (
    <View style={{width: '100%', height: '30%'}}>
      <Text style={{fontSize: 20, fontWeight: "700"}}>Timer</Text>
      <View style={{width: '100%', height: '150%', justifyContent:'center', alignItems:'center', padding: '10%', borderWidth: 1,
      borderColor: 'red'}}>
        {/* <Image
            style={{width: '100%', height: '100%',resizeMode: 'cover'}} 
            source={{uri: 'https://lottiefiles.com/free-animation/rubiks-cube-pQXQQTSnU8'}}
        /> */}
        <LottieView 
            ref={animationRef}
            source={require('@/assets/LottieLogo.json')}
            // style={{width: 300, height: 300}}
            style={{flex: 1}}
            loop
            renderMode="SOFTWARE"
            speed={1}
            // Add onError to debug loading issues
            onAnimationFailure={(error: any) => {
              console.log('Lottie Error:', error);
            }}
            // Add this to verify the animation loaded
            onAnimationLoaded={() => {
              console.log('Animation loaded successfully');
            }}
            onAnimationLoop={() => {
              console.log('Animation looping');
            }}
            onAnimationFinish={() => {
              console.log('Animation done');
            }}

        />
      </View>
    </View>
  )
}

export default Timer

const styles = StyleSheet.create({})