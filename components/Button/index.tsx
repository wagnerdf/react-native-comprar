import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ButtonProps = {
  onPress: () => void;
  title?: string;
};

export function Button({ onPress, title }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
