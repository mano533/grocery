import { Pressable, Text, View } from "react-native";
import { Tab } from "../../types";
import { s } from "../../styles/styles";

type Props = {
  tab: Tab;
  setTab: (tab: Tab) => void;
  count: number;
};

export default function BottomNav({ tab, setTab, count }: Props) {
  const tabs: [Tab, string][] = [
    ["Home", "⌂"],
    ["Categories", "◈"],
    ["Orders", "▣"],
    ["Cart", "🛒"],
    ["Profile", "👤"],
  ];

  return (
    <View style={s.navWrapper}>
      <View style={s.nav}>
        {tabs.map(([name, icon]) => (
          <Pressable
            key={name}
            onPress={() => setTab(name)}
            style={[s.navItem, tab === name && s.navItemActive]}
          >
            <View style={s.iconContainer}>
              <Text style={[s.navIcon, tab === name && s.active]}>{icon}</Text>

              {name === "Cart" && count > 0 && (
                <View style={s.cartBadge}>
                  <Text style={s.badgeText}>{count > 99 ? "99+" : count}</Text>
                </View>
              )}
            </View>

            <Text style={[s.navLabel, tab === name && s.active]}>{name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
