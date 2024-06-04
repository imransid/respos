import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    payAmount: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    billText: {
        fontSize: 48,
        fontWeight: '400',
        color: '#000',
        alignSelf: 'center'
    },
    dueText: {
        fontSize: 16,
        alignSelf: 'center',
        color: '#454545',
    }, 
    cashInputPos: {
        marginTop: 80, 
        padding: 5
    },
    cashReceivedText: {
        fontSize: 16,
        color: '#04a744',
        fontWeight: '600',
    },
    cashInput: {
        width: 'auto',
        height: 1,
        backgroundColor: '#c3c8c8',
        marginVertical: -11
    },
    cashPayButton: {
        height: 45,
        width: 'auto',
        backgroundColor: '#cacfd2',
    },
    cashPayText: {
        fontSize: 20,
        fontWeight: '800',
        color: '#454545',
        alignSelf: 'center',
        padding: 8,
    },
    cashPayButtonPos: {
        padding: 5, 
        marginVertical: 30,
    },
    cashIconText: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    cardPayButton: {
        height: 45,
        width: 'auto',
        backgroundColor: '#cacfd2',
    },
    cardPayText: {
        fontSize: 20,
        fontWeight: '800',
        color: '#454545',
        alignSelf: 'center',
        padding: 8,
    },
    cardPayButtonPos: {
        padding: 5, 
        marginVertical: 5,
    },
    cardIconText: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cardIconPos: {
        marginTop: 3
    },
})

export default Style;