import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    width: 100,
    height: 100,
  },
  cardImage: {
    borderRadius: 100,
    borderColor: 'teal',
    borderWidth: 4,
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
