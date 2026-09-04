import { Pressable, Text, View } from "react-native";
import { s } from "../styles/styles";

type Props = {
  count: number;
  change: (d: number) => void;
};

export default function Quantity({ count, change }: Props) {
  return (
    <View style={s.quantity}>
      <Pressable onPress={() => change(-1)}>
        <Text style={s.qtyButton}>−</Text>
      </Pressable>

      <Text style={s.qtyCount}>{count}</Text>

      <Pressable onPress={() => change(1)}>
        <Text style={s.qtyButton}>+</Text>
      </Pressable>
    </View>
  );
}
