import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { Input } from "@/components/Input";
import { Item } from "@/components/Item";

import { styles } from "@/components/styles/tabs.styles";
import { FilterStatus } from "@/types/FilterStatus";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
const ITEMS = [
  { id: "1", status: FilterStatus.DONE, description: "1 pacote de cafe" },
  { id: "2", status: FilterStatus.PENDING, description: "2 pacote de feijão" },
  { id: "3", status: FilterStatus.PENDING, description: "1 lata de oleo" },
  { id: "4", status: FilterStatus.DONE, description: "3 pacotes de macarrão" },
  { id: "5", status: FilterStatus.PENDING, description: "2 pacote de feijão" },
  { id: "6", status: FilterStatus.PENDING, description: "1 lata de oleo" },
  { id: "7", status: FilterStatus.DONE, description: "1 pacote de cafe" },
  { id: "8", status: FilterStatus.PENDING, description: "2 pacote de feijão" },
  { id: "9", status: FilterStatus.PENDING, description: "1 lata de oleo" },
  { id: "10", status: FilterStatus.DONE, description: "3 pacotes de macarrão" },
  { id: "11", status: FilterStatus.PENDING, description: "2 pacote de feijão" },
  { id: "12", status: FilterStatus.PENDING, description: "1 lata de oleo" },
  { id: "13", status: FilterStatus.DONE, description: "1 pacote de cafe" },
  { id: "14", status: FilterStatus.PENDING, description: "2 pacote de feijão" },
  { id: "15", status: FilterStatus.PENDING, description: "1 lata de oleo" },
  { id: "16", status: FilterStatus.DONE, description: "3 pacotes de macarrão" },
  { id: "17", status: FilterStatus.PENDING, description: "2 pacote de feijão" },
  { id: "18", status: FilterStatus.PENDING, description: "1 lata de oleo" },
  { id: "19", status: FilterStatus.DONE, description: "1 pacote de cafe" },
  { id: "20", status: FilterStatus.PENDING, description: "2 pacote de feijão" },
  { id: "21", status: FilterStatus.PENDING, description: "1 lata de oleo" },
  { id: "22", status: FilterStatus.DONE, description: "3 pacotes de macarrão" },
  { id: "23", status: FilterStatus.PENDING, description: "2 pacote de feijão" },
  { id: "24", status: FilterStatus.PENDING, description: "1 lata de oleo" },
];

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

        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => console.log("Mudar o status")}
              onRemove={() => console.log("Remover")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhum item aqui</Text>
          )}
        />
      </View>
    </View>
  );
}
