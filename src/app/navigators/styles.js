import React from "react";
import { StyleSheet } from "react-native";

const HeaderStyle = StyleSheet.create({
    userAddIcon: {
        marginRight: 50
    },
    verticalMenuIcon: {
        marginRight: 15,
    },
    headerItems: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    cart: {
        height: 32,
        width: 30,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: '#04a744',
        marginRight: 115
    },
    cartText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#fff',
        alignSelf: 'center'
    },
})

export default HeaderStyle;
