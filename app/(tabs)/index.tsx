import { Image, View } from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { styles } from "@/components/styles/tabs.styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}></View>
    </View>
  );
}
