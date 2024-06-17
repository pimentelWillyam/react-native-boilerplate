import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackTypes } from "../Routes";

export default function FormScreen() {
  
  const navigation = useNavigation<NavigationStackTypes>()

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Home')}>Home</Text>

    </View>
  );
}
