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
        flex: 1,
    },
    foodItemsBox: {
        height: 100,
        width: 350,
        backgroundColor: '#b2babb'
    },
    foodItemsBoxHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    foodItemsBoxHeaderText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#454545'
    },
})

export default HomeStyle;