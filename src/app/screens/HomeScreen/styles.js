import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
    homeContainer: {
        padding: 12,
        flex: 1,
    },
    expensesBox: {
        height: 75,
        width: 'auto',
        backgroundColor: '#56bc07',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    expensesBoxSaveText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 60,
        marginTop: 25,
        color: '#fff',
    },
    expensesBoxCharge: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    expensesBoxChargeText: {
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
    foodItemsList: {
        height: 520
    },
    clearButton: {
        height: 40,
        width: 100,
        backgroundColor: '#04a744',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 10,
    },
    clearButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#fff',
        marginTop: 6
    },
})

export default HomeStyle;