import { Pressable, ScrollView, Text, View } from "react-native";

import { s } from "../../styles/styles";

export type AdminTab =
  | "Dashboard"
  | "Products"
  | "Orders"
  | "Customers"
  | "Categories"
  | "Screens";

type Props = {
  tab: AdminTab;
  setTab: (tab: AdminTab) => void;
};

export default function AdminNav({ tab, setTab }: Props) {
  const tabs: [AdminTab, string][] = [
    ["Dashboard", "⌂"],
    ["Products", "📦"],
    ["Orders", "🛒"],
    ["Customers", "👥"],
    ["Categories", "◈"],
    ["Screens", "▣"],
    // ["Coupons", "🏷️"],
    // ["Reports", "📊"],
    // ["Settings", "⚙️"],
  ];

  return (
    <View style={s.navWrapper}>
      <View style={s.adminNav}>
        {tabs.map(([name, icon]) => {
          const active = tab === name;

          return (
            <Pressable
              key={name}
              onPress={() => setTab(name)}
              style={[s.navItem, active && s.navItemActive]}
            >
              <View style={s.iconContainer}>
                <Text style={[s.adminNavIcon, active && s.adminNavActive]}>
                  {icon}
                </Text>
              </View>

              <Text
                style={[s.adminNavLabel, active && s.adminNavActive]}
                numberOfLines={1}
              >
                {name}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
