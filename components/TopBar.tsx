import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {}

const TopBar = (props: Props) => {
  return (
    <View style={{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
      <View style={{
        height: 60,
        width: 60,
        borderRadius: 20,
        borderWidth: 1,
        display: 'flex',
        borderColor: '#E4E4E4',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <EvilIcons name="chevron-left" size={42} color="black" />
      </View>
      <View style={{
        height: 60,
        width: 60,
        borderRadius: 20,
        borderWidth: 1,
        display: 'flex',
        borderColor: '#E4E4E4',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <AntDesign name="menufold" size={28} color="black" />
      </View>
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({})