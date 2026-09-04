import { useState } from "react";
import { Alert, Pressable, ScrollView, Text, TextInput, View } from "react-native";

import type { ScreenItem } from "../../types";
import { color } from "../../constants/colors";
import { s } from "../../styles/styles";

type Props = {
  screen?: ScreenItem;
  onSave: (screen: ScreenItem) => void;
  onBack: () => void;
};

export default function ScreenForm({ screen, onSave, onBack }: Props) {
  const isEdit = !!screen;
  const [name, setName] = useState(screen?.name || "");
  const [icon, setIcon] = useState(screen?.icon || "");
  const [displayOrder, setDisplayOrder] = useState(
    screen?.displayOrder?.toString() || "1",
  );
  const [userrole, setUserrole] = useState(screen?.userrole || "Admin");
  const [isActive, setIsActive] = useState(screen?.isActive ?? true);

  const saveScreen = () => {
    if (!name.trim() || !icon.trim() || !userrole.trim() || !displayOrder.trim()) {
      Alert.alert("Warning", "Please fill in all required fields");
      return;
    }

    onSave({
      id: screen?.id || 0,
      name: name.trim(),
      icon: icon.trim(),
      isActive,
      displayOrder: Number(displayOrder),
      userrole: userrole.trim(),
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.scroll}
    >
      <View style={s.content}>
        <View style={s.formHeader}>
          <Pressable style={s.backButton} onPress={onBack}>
            <Text style={s.backButtonText}>‹</Text>
          </Pressable>
          <View style={s.formHeaderText}>
            <Text style={s.eyebrow}>SCREEN MANAGEMENT</Text>
            <Text style={s.h1}>{isEdit ? "Edit screen" : "Add screen"}</Text>
            <Text style={s.muted}>Update navigation screen details.</Text>
          </View>
        </View>

        <View style={s.formSection}>
          <Text style={s.sectionTitle}>Screen information</Text>

          <Text style={s.inputLabel}>Screen name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Dashboard"
            placeholderTextColor={color.muted}
            style={s.loginInput}
          />

          <Text style={s.inputLabel}>Icon</Text>
          <TextInput
            value={icon}
            onChangeText={setIcon}
            placeholder="view-dashboard-outline"
            placeholderTextColor={color.muted}
            style={s.loginInput}
          />

          <Text style={s.inputLabel}>Display order</Text>
          <TextInput
            value={displayOrder}
            onChangeText={setDisplayOrder}
            keyboardType="numeric"
            placeholder="1"
            placeholderTextColor={color.muted}
            style={s.loginInput}
          />

          <Text style={s.inputLabel}>User role</Text>
          <TextInput
            value={userrole}
            onChangeText={setUserrole}
            placeholder="Admin"
            placeholderTextColor={color.muted}
            style={s.loginInput}
          />

          <Pressable style={s.adminCancelButton} onPress={() => setIsActive((current) => !current)}>
            <Text style={s.adminCancelButtonText}>
              Status: {isActive ? "Active" : "Inactive"}
            </Text>
          </Pressable>
        </View>

        <Pressable style={s.adminSaveButton} onPress={saveScreen}>
          <Text style={s.adminSaveButtonText}>
            {isEdit ? "Save changes →" : "Add screen →"}
          </Text>
        </Pressable>

        <Pressable style={s.adminCancelButton} onPress={onBack}>
          <Text style={s.adminCancelButtonText}>Cancel</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
