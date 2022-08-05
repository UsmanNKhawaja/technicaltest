/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import Avatar from '../../Components/avatar';
import Card from '../../Components/Card';
import Trending from '../../Components/trending/trending';
import {fonts} from '../../constants/fonts';
import {styles} from './style';

const listCountries = [
  {
    name: 'Los Angeles',
    image: require('../../assets/hunza.jpg'),
  },
  {
    name: 'Hawaii',
    image: require('../../assets/hunza.jpg'),
  },
  {
    name: 'Peru',
    image: require('../../assets/hunza.jpg'),
  },
];
const listAvatars = [
  {
    name: 'Juliane',
    image: require('../../assets/avatar1.png'),
  },
  {
    name: 'John',
    image: require('../../assets/avatar1.png'),
  },
  {
    name: 'Doe',
    image: require('../../assets/avatar1.png'),
  },
  {
    name: 'Doe',
    image: require('../../assets/avatar1.png'),
  },
  {
    name: 'Doe',
    image: require('../../assets/avatar1.png'),
  },
];
function GreatDesign() {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.rowContainer}>
        {/* <View style={styles.logoContainer}> */}
        <Image
          style={styles.logoContainer}
          source={require('../../assets/logo.png')}
        />
        {/* </View> */}
        <View style={styles.iconContainer}>
          <Image
            style={{height: 40, width: 40}}
            source={require('../../assets/icons8-like-64.png')}
          />
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'teal',
          borderRadius: 30,
          width: '80%',
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <Image
          style={{
            alignSelf: 'center',
            justifyContent: 'flex-end',
            height: 20,
            width: '5%',
            marginLeft: '5%',
          }}
          source={require('../../assets/icons8-search-30.png')}
        />
        <TextInput
          style={{borderWidth: 0}}
          placeholderTextColor="grey"
          placeholder="Search for Destination, people"
        />
      </View>
      <View style={{height: 400}}>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: 'black',
            fontSize: 25,
            fontFamily: fonts.molde,
          }}>
          DISCOVER
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 28 / 2,
            height: 100,
          }}>
          {listCountries.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <View
                  key={index}
                  style={{
                    marginStart: index === 0 ? 20 : 0,
                    marginEnd: 24,
                  }}>
                  <Card text={item.name} image={item.image} />
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: 'black',
          height: 200,
        }}>
        <Text
          style={{
            margin: 20,
            color: 'white',
            fontSize: 20,
            fontFamily: fonts.molde,
          }}>
          MY COMMUNITY
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {listAvatars.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <View
                  key={index}
                  style={{
                    marginStart: index === 0 ? 20 : 0,
                    marginEnd: 30,
                  }}>
                  <Avatar name={item.name} image={item.image} />
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
        }}>
        <Text
          style={{
            margin: 20,
            color: 'black',
            fontSize: 25,
            fontFamily: fonts.molde,
          }}>
          TRENDING NOW
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {listCountries.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <View
                  key={index}
                  style={{
                    marginStart: index === 0 ? 20 : 0,
                    marginEnd: 20,
                  }}>
                  <Trending text={item.name} image={item.image} />
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

export default GreatDesign;
