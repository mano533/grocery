import type { ReactNode } from "react";
import { Text, View } from "react-native";
import { s } from "../styles/styles";

type Props = {
  title: string;
  children: ReactNode;
};

export default function Box({ title, children }: Props) {
  return (
    <View style={s.checkoutSection}>
      <Text style={s.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}
