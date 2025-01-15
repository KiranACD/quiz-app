import { StyleSheet, View, useWindowDimensions } from 'react-native'
import Svg, {Circle, G, Path, Text, TSpan} from 'react-native-svg'
import React from 'react'
import SkewedStripedRectangle from './SkewedStripedRectangle';

type Props = {}
const SampleWave = (props: Props) => {
  
  return (
    <View style={styles.container}>
        
      <Svg width="100%" height="100%" viewBox="0 0 410 220" fill="#F4F4F4">
        <Path d="M360 199.5
                L273.725 199.5
                C263.509 199.5 253.991 194.314 248.452 185.729
                C242.73 176.859 232.895 171.5 222.339 171.5
                H169.661
                C159.105 171.5 149.27 176.859 143.548 185.729
                C138.009 194.314 128.491 199.5 118.275 199.5
                L30 199.5
                C13.7076 199.5 0.499999 186.292 0.5 170
                L0.500012 30
                C0.500014 13.7076 13.7076 0.499999 30 0.5
                L360 0.500029
                C376.292 0.50003 389.5 13.7076 389.5 30
                V170
                C389.5 186.292 376.292 199.5 360 199.5Z" fill="#F4F4F4" stroke="transparent"/>
        <SearchingText />
        <LoadingCircle />
      </Svg>
        
      <View style={styles.handleContainer}></View>
      <SkewedStripedRectangle />
    </View>
  );
};

const SearchingText = ({text = ['Searching', 'For', 'Opponent'], x = 30, y = 50}) => (
  <Text
    fontFamily='InstrumentSansCondensed-SemiBold'
    fontSize={30}
    fontWeight="SemiBold"
    stroke="black"
    fill="black"
  >
    {text.map((line, index) => (
        <TSpan 
          key={index}
          x={x}
          dy={index === 0 ? y : 37}
        >
          {line}
        </TSpan>
      ))}
  </Text>
);

const LoadingCircle = ({
  percentage = 25,
  radius = 35,
}) => {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <G transform={`translate(320, 60)`}>
      <Circle r={radius-5} fill="white" stroke='white' strokeWidth={5}/>
      <Circle r={radius} fill="none" stroke='#8B5CF6' strokeWidth={5} strokeDasharray={`${circumference}`} strokeDashoffset={`${offset}`} transform="rotate(-90)"/>
      <Text x="0" y="5" textAnchor='middle' fontFamily='Arial' fontWeight={'normal'} fontSize={20} fill='black'>{percentage}%</Text>
    </G>
  )
}

export default SampleWave;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '80%',
        backgroundColor: 'transparent',
        position:'relative',
        marginTop: '10%',
    },
    content: {
        minHeight: 100,
        backgroundColor: '#F5F5F5',
    },
    wave: {
        backgroundColor: '#F4F4F4',
    },
    handleContainer: {
      width: '11%',
      height: '5%',
      position: 'absolute',
      bottom: '22%',
      alignSelf: 'center',
      backgroundColor: '#F4F4F4',
      borderRadius: 9,
    }
})