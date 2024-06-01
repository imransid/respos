import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FoodItems from "./FoodItems";

function HomeScreen(){
    return(
        <View>
            <View>
                <FoodItems/>
            </View>
        </View>
    );
}

export default HomeScreen;