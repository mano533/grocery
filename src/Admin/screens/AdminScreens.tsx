import { Pressable, ScrollView, Text, View } from "react-native";

import type { ScreenItem } from "../../types";
import { s } from "../../styles/styles";

type Props = {
  screens: ScreenItem[];
  onAdd: () => void;
  onEdit: (screen: ScreenItem) => void;
};

export default function AdminScreens({ screens, onAdd, onEdit }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.scroll}
    >
      <View style={s.content}>
        <View style={s.adminPageHeader}>
          <View style={{ flex: 1 }}>
            <Text style={s.eyebrow}>SCREEN MANAGEMENT</Text>
            <Text style={s.h1}>Screens</Text>
            <Text style={s.muted}>Manage customer and admin screens.</Text>
          </View>

          <Pressable style={s.adminAddButton} onPress={onAdd}>
            <Text style={s.adminAddButtonText}>+ Add</Text>
          </Pressable>
        </View>

        <View style={s.adminSection}>
          <View style={s.adminSectionHead}>
            <Text style={s.sectionTitle}>All screens</Text>
            <Text style={s.muted}>{screens.length} screens</Text>
          </View>

          <View style={s.adminProductList}>
            {screens.map((screen) => (
              <Pressable
                key={screen.id}
                style={s.adminProductCard}
                onPress={() => onEdit(screen)}
              >
                <View style={s.adminProductImage}>
                  <Text style={s.adminProductEmoji}>{screen.icon || "▣"}</Text>
                </View>

                <View style={s.adminProductInfo}>
                  <Text style={s.productName}>{screen.name}</Text>
                  <Text style={s.muted}>{screen.userrole}</Text>
                  <Text style={s.adminStock}>
                    Order {screen.displayOrder} · {screen.isActive ? "Active" : "Inactive"}
                  </Text>
                </View>

                <Text style={s.chevron}>›</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
