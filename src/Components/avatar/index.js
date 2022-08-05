/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {styles} from './style';

const Avatar = ({name, subText, image}) => {
  return (
    <View>
      <ImageBackground
        style={styles.cardContainer}
        imageStyle={styles.cardImage}
        source={image}
      />
      <Text
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        {name}
      </Text>
    </View>
  );
};

export default Avatar;
