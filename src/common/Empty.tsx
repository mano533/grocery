import { Pressable, Text, View } from "react-native";
import { s } from "../styles/styles";

export default function Empty() {
  return (
    <View style={s.empty}>
      <Text style={{ fontSize: 64 }}>🧺</Text>

      <Text style={s.h2}>Your cart is waiting</Text>

      <Text style={s.muted}>
        Add a few fresh essentials and they’ll show up here.
      </Text>

      <Pressable style={s.outlineButton} onPress={() => {}}>
        <Text style={s.outlineText}>Start shopping</Text>
      </Pressable>
    </View>
  );
}
