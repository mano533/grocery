import { Pressable, Text, View } from "react-native";

import { s } from "../styles/styles";
import { Mode } from "../types";

type Props = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};

export default function ModeSwitch({ mode, setMode }: Props) {
  return (
    <View style={s.modeSwitch}>
      <Text style={s.modeLabel}>SHOPPING MODE</Text>

      <View style={s.modePill}>
        {(["Retail", "Wholesale"] as Mode[]).map((item) => (
          <Pressable key={item} onPress={() => setMode(item)}>
            <Text style={[s.modeOption, mode === item && s.modeOptionActive]}>
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
