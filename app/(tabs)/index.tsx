import { StatusBar } from "expo-status-bar";
import { Image, View } from "react-native";

import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <StatusBar style="auto" />
    </View>
  );
}
