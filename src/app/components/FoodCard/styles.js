import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
    marginLeft: 16,
    alignItems: 'center',
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust transparency here
    justifyContent: 'center',
  },
});

export default Styles;
