import { Text, View } from "react-native";
import { s } from "../styles/styles";

type Props = {
  text: string;
  action: string;
};

export default function Title({ text, action }: Props) {
  return (
    <View style={s.sectionHead}>
      <Text style={s.sectionTitle}>{text}</Text>
      <Text style={s.link}>{action}</Text>
    </View>
  );
}
