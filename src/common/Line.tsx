import { Text, View } from "react-native";
import { s } from "../styles/styles";
import { color } from "../constants/colors";

type Props = {
  l: string;
  v: string;
  green?: boolean;
};

export default function Line({ l, v, green }: Props) {
  return (
    <View style={s.line}>
      <Text style={s.muted}>{l}</Text>

      <Text
        style={[
          s.body,
          green && {
            color: color.green,
            fontWeight: "700",
          },
        ]}
      >
        {v}
      </Text>
    </View>
  );
}
