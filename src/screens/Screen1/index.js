import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {styles} from './style';
import {saveData} from '../../redux/reducer/actions';
import List from '../../Components/List';

function Screen1() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchApiData = async () => {
    setLoading(true);
    const response = await fetch(
      'https://zoo-animal-api.herokuapp.com/animals/rand/10',
    );
    const responseData = await response.json();
    console.log('Fetch data is', responseData);
    dispatch(saveData(responseData));
    setData(responseData);
    setLoading(false);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <View style={styles.main}>
      {loading ? (
        <ActivityIndicator />
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

export default Screen1;
