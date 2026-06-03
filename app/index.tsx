import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Seja bem vindo!</Text>
      <Button title="Entrar" onPress={() => router.push("/(tabs)")} />
    </View>
  );
}
