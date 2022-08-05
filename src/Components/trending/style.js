import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const containerWidth = windowWidth - 200;

export const styles = StyleSheet.create({
  cardContainer: {
    width: containerWidth,
    height: 260,
    borderRadius: 30,
  },
  cardImage: {
    position: 'relative',
  },
  cityName: {
    color: 'white',
    marginVertical: 2,
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
  },
  viewContainer: {
    borderColor: 'teal',
    borderWidth: 2,
    borderBottomStartRadius: 30,
    borderTopEndRadius: 30,
    width: '60%',
    padding: '5%',
    alignContent: 'center',
    justifyContent: 'center',
    top: '60%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    alignSelf: 'center',
  },
  infoContainer: {
    width: 50,
    height: 50,
    padding: '5%',
    alignContent: 'center',
    justifyContent: 'center',
    top: '90%',
    backgroundColor: 'black',
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 50,
  },
});
