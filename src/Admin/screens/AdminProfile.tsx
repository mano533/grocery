import { Pressable, ScrollView, Text, View } from "react-native";

import { s } from "../../styles/styles";

type Props = {
  onBack: () => void;
  onLogout: () => void;
};

export default function AdminProfile({ onBack, onLogout }: Props) {
  const menuItems: [string, string][] = [
    ["👤", "Personal information"],
    ["🏷️", "Coupons"],
    ["📊", "Reports"],
    ["⚙️", "Settings"],
    ["🔐", "Change password"],
    ["❓", "Help & support"],
    ["ⓘ", "About FreshCart"],
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.scroll}
    >
      <View style={s.content}>
        {/* HEADER */}
        <View style={s.adminTop}>
          <Pressable onPress={onBack}>
            <Text style={s.edit}>‹ Back</Text>
          </Pressable>

          <View>
            <Text style={s.eyebrow}>FRESHCART ADMIN</Text>
            <Text style={s.h1}>Profile</Text>
            <Text style={s.muted}>Manage your admin account</Text>
          </View>
        </View>

        {/* ADMIN PROFILE */}
        <View style={s.profileHero}>
          <View style={s.profileAvatar}>
            <Text style={s.profileEmoji}>🧑🏽</Text>
          </View>

          <View style={s.profileInfo}>
            <Text style={s.h2}>Mano Marappan</Text>
            <Text style={s.muted}>mano@example.com</Text>
            <Text style={s.muted}>Administrator</Text>
          </View>

          <Pressable>
            <Text style={s.edit}>Edit</Text>
          </Pressable>
        </View>

        {/* ADMIN MENU */}
        <View style={s.profileMenu}>
          {menuItems.map(([icon, title]) => (
            <Pressable key={title} style={s.menuRow} onPress={() => {}}>
              <Text style={s.menuIcon}>{icon}</Text>

              <Text style={s.body}>{title}</Text>

              <Text style={s.chevron}>›</Text>
            </Pressable>
          ))}

          {/* LOGOUT */}
          <Pressable style={s.menuRow} onPress={onLogout}>
            <Text style={[s.menuIcon, s.logoutIcon]}>↪</Text>

            <Text style={[s.body, s.logoutText]}>Log out</Text>

            <Text style={s.chevron}>›</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
