import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const containerWidth = windowWidth - 240;

export const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    height: 260,
    borderRadius: 30,
  },
  cardImage: {
    borderRadius: 30,
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
    width: 'auto',
    padding: '5%',
    alignContent: 'center',
    justifyContent: 'center',
    top: '70%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 20,
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
