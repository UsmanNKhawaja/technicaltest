import React from 'react';
import {Text, View, Image} from 'react-native';

import styles from './style';

const List = ({item, index}) => {
  return (
    <View style={styles.main}>
      <Image source={{uri: item.image_link}} style={styles.imgStyle} />
      <View style={styles.txtContainer}>
        <Text style={styles.txtStyle}>{item.name}</Text>
        <Text numberOfLines={2} style={[styles.txtStyle, {marginTop: 12}]}>{item.habitat}</Text>
      </View>
    </View>
  );
};

export default List;
