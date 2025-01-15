import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StripedRectangle from './StripedRectangle'

type Props = {}

const SkewedStripedRectangle = (props: Props) => {
  return (
    <View style={styles.container}>
      <StripedRectangle />
    </View>
  )
}



export default SkewedStripedRectangle

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '-6%',
        left: '10%',
        width: '77%',
        height: '50%',
        backgroundColor: '#E5E5E5',
        borderRadius: 40,
        zIndex: -5,
        transform: 'rotate(-1.5deg)',
    },
});