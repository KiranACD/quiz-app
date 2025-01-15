import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

type Props = {}

const Timer = (props: Props) => {
  return (
    <View style={{}}>
      <Text>Timer</Text>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image 
            source={require('@/assets/LottieLego.gif')}
        />
      </View>
    </View>
  )
}

export default Timer

const styles = StyleSheet.create({})