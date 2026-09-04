import { Text, TextInput, View } from "react-native";
import { color } from "../constants/colors";
import { s } from "../styles/styles";

type Props = {
  value: string;
  setValue: (value: string) => void;
};

export default function Search({ value, setValue }: Props) {
  return (
    <View style={s.search}>
      <Text style={s.searchIcon}>⌕</Text>

      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Search for tamarind..."
        placeholderTextColor={color.muted}
        style={s.searchInput}
      />

      <Text style={s.scan}>⌁</Text>
    </View>
  );
}
