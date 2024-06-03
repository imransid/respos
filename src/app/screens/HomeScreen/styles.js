import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
    homeContainer: {
        padding: 12,
        flex: 1,
    },
    chargeBox: {
        height: 75,
        width: 'auto',
        backgroundColor: '#56bc07',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
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
    foodItemsBox: {
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    foodItemsBoxHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    foodItemsBoxHeaderText: {
        fontSize: 22,
        fontWeight: '600',
        color: '#454545',
        marginLeft: 7,
        marginTop: 5
    },
    foodItemsBoxHeaderIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: 18,
        gap: 50
    },
})

export default HomeStyle;