import { StyleSheet, Text, View } from 'react-native'
import Svg, {Defs, Pattern, Line, Rect} from 'react-native-svg'
import React from 'react'

type Props = {}

const StripedRectangle = () => {
  return (
    <Svg height="100%" width="100%">
    <Defs>
      <Pattern id="stripes" width="30" height="10" patternTransform="rotate(18.5)" patternUnits="userSpaceOnUse">
        <Line x1="0" y1="0" x2="0" y2="10" stroke="white" strokeWidth="10"/>
      </Pattern>
    </Defs>
    <Rect width="100%" height="100%" fill="url(#stripes)"/>
  </Svg>
  )
}

export default StripedRectangle

const styles = StyleSheet.create({})