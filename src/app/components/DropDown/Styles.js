import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      borderRadius: 1,
      padding: 12,
      backgroundColor: '#fff'
    },
    icon: {
      marginRight: 7,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
      color: '#454545',
      fontWeight: '500'
    },
    selectedTextStyle: {
      fontSize: 17,
      color: '#454545',
      fontWeight: '500'
    },
    iconStyle: {
      width: 25,
      height: 25,
    },
    underLine: {
        height: 1,
        width: 358,
        left: 17,
        backgroundColor: '#454545',
        marginVertical: -15,
    },
  });

export default Styles