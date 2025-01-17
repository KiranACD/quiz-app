import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StripedRectangle from './StripedRectangle'



const HomeIndicator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <StripedRectangle />
      </View>
    </View>
  )
}

export default HomeIndicator

const styles = StyleSheet.create({
    container: {
        height: 5,
        width: '100%',
        marginTop: '5%',
    },
    homeContainer: {
        height: 5,
        width: '40%',
        backgroundColor: 'black',
        marginHorizontal: 'auto',
        borderRadius: 20
    }
})