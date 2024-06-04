import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    },
    cartItemsPos: {
        padding: 32, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    cartItemsText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#454545',
    },
    quantityText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#909497'
    },
    totalPricePos: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginBottom: 310, 
        marginLeft: 30
    },
    totalPriceText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#454545',
        top: 10,
    },
    totalPriceVal: {
        fontSize: 18,
        fontWeight: '500',
        color: '#454545',
        marginRight: 22,
        top: 10,
    },
    verticalLine: {
        height: 1, 
        width: 'auto', 
        backgroundColor: '#454545',
    },
    expensesBox: {
        height: 75,
        width: 'auto',
        backgroundColor: '#56bc07',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 40,
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
})

export default Styles;