import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from '@/components/TopBar';
import NotchedRectangle from '@/components/NotchedRectangle';
import SampleWave from '@/components/SampleWave';
import StripedRectangle from '@/components/StripedRectangle';
import Timer from '@/components/Timer';
import ProgressBar from '@/components/ProgressBar';
import CustomButton from '@/components/Button';
import HomeIndicator from '@/components/HomeIndicator';

type Props = {}

const app = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
    
          <TopBar />
          <View style={{width:'100%', position:'relative'}}> 
            <SampleWave />
          </View>
          <Timer />
          <ProgressBar />
          <View style={{height: '9%', marginTop: '9%'}}>
            <CustomButton 
              onPress={() => console.log("Button Pressed")}
              title="Challenge Yourself"
              flex={1}
              variant="primary"
            />
          </View>
          <HomeIndicator />
    </SafeAreaView>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    padding: 20
  },
  text: {
    color: 'black',
    fontSize: 42,
    fontWeight: 'bold',
  }
})