import { StyleSheet, View, useWindowDimensions } from 'react-native'
import React from 'react'

type Props = {}

const ProgressBar = ({progressPercent=75}) => {
    const {height, width} = useWindowDimensions();
    const progressWidth = (progressPercent/100) * width;
  return (
    <View style={{width: '100%', height: 10, backgroundColor: '#F0F0F0', marginTop: '20%', borderRadius: 10}}>
      <View style={{width: progressWidth, height: 10, backgroundColor: '#EE9563', borderRadius: 10}}></View>
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({})