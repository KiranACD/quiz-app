import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SkewedStripedRectangle from './SkewedStripedRectangle'

type Props = {}

const NotchedRectangle = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangleContainer}>
      </View>
      {/* <View style={styles.hiddenContainer}> */}

          {/* </View> */}
      <SkewedStripedRectangle />  
      <View style={styles.notch}>

      </View>
    </View>
  )
}

export default NotchedRectangle

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,

    },
    rectangleContainer: {
        width:'80%',
        height: 150,
        backgroundColor: '#F4F4F4',
        borderRadius: 30,
        zIndex: -1
    },
    notch: {
        position: 'absolute',
        bottom: -15,
        right: '50%',
        width: '20%',
        height: 31,
        backgroundColor: 'white',
        borderRadius: 10,
        zIndex: 0,
    }
})