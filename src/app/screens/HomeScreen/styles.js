import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
    chargeBoxContainer: {
        padding: 20,
        flex: 1,
    },
    chargeBox: {
        height: 75,
        width: 'auto',
        backgroundColor: '#56bc07',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    chargeBoxSaveText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 60,
        color: '#fff',
    },
    chargeBoxCharge: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    chargeBoxChargeText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginRight: 60,
        color: '#fff',
    },
    foodItemsContainer: {
        marginVertical: 70,
        padding: 6,
    },
    foodItemsBox: {
        width: 'auto',
        backgroundColor: '#ccd1d1'
    },
    foodItemsBoxHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    foodItemsBoxHeaderText: {
        fontSize: 22,
        fontWeight: '400',
        color: '#454545',
        marginLeft: 7,
        marginTop: 5
    },
})

export default HomeStyle;