import { Text, View } from "react-native";
import { s } from "../styles/styles";

type Props = {
  title: string;
  sub: string;
};

export default function Header({ title, sub }: Props) {
  return (
    <View style={s.header}>
      <View>
        <Text style={s.eyebrow}>{sub}</Text>
        <Text style={s.h1}>{title}</Text>
      </View>

      <View style={s.avatar}>
        <Text>🧑🏽</Text>
      </View>
    </View>
  );
}
