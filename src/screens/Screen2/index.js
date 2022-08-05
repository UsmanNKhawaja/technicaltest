import React from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {styles} from './style';
import List from '../../Components/List';

function Screen2() {
  const navigation = useNavigation();
  const data = useSelector(state => state.mainReducer.apiData);
  console.log('Api data is', data);
  return (
    <View style={styles.main}>
      {!data ? (
        Alert.alert("No Data Found")
      ) : (
        <FlatList
          data={data}
          renderItem={({item, index}) => <List item={item} index={index} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          style={styles.listStyle}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

export default Screen2;
