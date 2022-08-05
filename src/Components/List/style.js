import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  main: {
    height: 110,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 2,
    borderRadius: 5,
  },
  imgStyle: {
    height: 110,
    width: 110,
    resizeMode: 'cover',
  },
  txtContainer: {
    flexDirection: 'column',
    marginLeft: 12,
  },
  txtStyle: {
    width: '85%',
    color: '#000',
  },
});

export default styles;
