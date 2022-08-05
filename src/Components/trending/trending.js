import React from 'react';
import {Icon} from 'react-native-elements';
import {Text, View, ImageBackground} from 'react-native';
import {styles} from './style';

const Trending = ({text, subText, image}) => {
  return (
    <ImageBackground
      style={styles.cardContainer}
      imageStyle={styles.cardImage}
      source={image}>
      <View style={styles.viewContainer}>
        <Text style={styles.cityName}>{text}</Text>
      </View>
    </ImageBackground>
  );
};

export default Trending;
