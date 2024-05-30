import React from "react";
import { StyleSheet } from "react-native";

const HomeHeaderStyle = StyleSheet.create({
    headerBar: {
        height: 60,
        width: 'auto',
        backgroundColor: '#1d8348',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center'
    },
    headerLeft:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerRight:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerMenu: {
        height:24, 
        width:24,
    },
    userPlus: {
        height:24, 
        width:24,
        right: 30
    },
    threeDot:{
        height:24, 
        width:24,
        // right: 50
    },
    headerHeading: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
        marginLeft: 45,
        marginTop: -5
    },
    orderNumBox:{
        height: 28,
        width: 24,
        marginLeft: 15,
        marginTop: -5,
        backgroundColor: '#1d8348',
        borderWidth: 2,
        borderColor: '#fff'
    },
    orderNumBoxText: {
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'center',
        color: '#fff'
    },
})

export default HomeHeaderStyle;