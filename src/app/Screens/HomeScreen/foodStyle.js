import { StyleSheet } from "react-native";

const foodStyle = StyleSheet.create({
    quantityExpenseContainer:{
        padding: 20,
        flex: 1
    },
    quantityExpenseBox: {
        height: 80,
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1ecc48'
    },
    quantityExpenseSaveText: {
        fontSize: 20,
        fontWeight:'bold',
        color: '#fff',
        marginLeft: 60,
        alignSelf: 'center',
    },
    quantityExpenseChargePos:{
        flexDirection: 'column', 
        marginRight: 60,
        alignSelf: 'center',
        marginBottom: 5,
    },
    quantityExpenseChargeText: {
        fontSize: 20,
        fontWeight:'bold',
        color: '#fff',
        alignSelf: 'center',
    },
    foodItemsContainer: {
        flex: 1,
        marginTop: 70,
        padding: 8
    },
    foodItemsBox: {
        height: 100,
        width: 'auto',
        backgroundColor: '#d0d3d4',
    },
});

export default foodStyle;