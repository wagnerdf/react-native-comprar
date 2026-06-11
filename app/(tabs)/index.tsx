import { Image, Text, TouchableOpacity, View } from "react-native";

import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { Input } from "@/components/Input";
import { styles } from "@/components/styles/tabs.styles";
import { FilterStatus } from "@/types/FilterStatus";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
