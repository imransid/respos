import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    margin: 5
  },
  image: {
    height: 120,
    width: 110,
    marginLeft: 7,
    alignItems: 'center',
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
    color: '#fff'
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 7,
    height: 40,
    width: 110,
    justifyContent:'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust transparency here
  },
});

export default Styles;
