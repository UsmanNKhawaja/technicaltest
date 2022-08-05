import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './style';

const Button = ({title, btnStyle, ...props}) => {
  return (
    <TouchableOpacity style={[styles.submitButton, {...btnStyle}]} {...props}>
      <Text style={styles.submitButtonText}> {title} </Text>
    </TouchableOpacity>
  );
};

export default Button;
