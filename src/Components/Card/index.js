/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import {styles} from './style';

const Card = ({text, subText, image}) => {
  return (
    <ImageBackground
      style={styles.cardContainer}
      imageStyle={styles.cardImage}
      source={image}>
      <View style={styles.viewContainer}>
        <Text style={styles.cityName}>{text}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Image
          style={{alignSelf: 'center', height: 40, width: 40}}
          source={require('../../assets/icons8-info-64dark.png')}
        />
      </View>
    </ImageBackground>
  );
};

export default Card;
