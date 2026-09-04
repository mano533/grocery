import { useState } from "react";
import { Alert, Pressable, ScrollView, Text, TextInput, View } from "react-native";

import { color } from "../../../constants/colors";
import { s } from "../../../styles/styles";
import customService from "../../../services/customservice";

type Props = {
  userId: number;
  name?: string;
  email?: string;
  onComplete: (name: string, email: string) => void;
};

export default function ProfileCompletion({
  userId,
  name: initialName = "",
  email: initialEmail = "",
  onComplete,
}: Props) {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);

  const handleSave = async () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert("Warning", "Please fill in all required fields");
      return;
    }

    try {
      await customService().putApi(`/Profile/${userId}`, {
        name: name.trim(),
        email: email.trim(),
      });
      Alert.alert("Success", "Profile updated successfully.");
      onComplete(name.trim(), email.trim());
    } catch (error) {
      console.log("Profile Completion Error:", error);
      Alert.alert("Error", "Failed to update profile.");
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.scroll}
    >
      <View style={s.content}>
        <View style={s.formHeader}>
          <View style={s.formHeaderText}>
            <Text style={s.eyebrow}>WELCOME TO FRESHCART</Text>
            <Text style={s.h1}>Complete your profile</Text>
            <Text style={s.muted}>Add your details before continuing.</Text>
          </View>
        </View>

        <View style={s.formSection}>
          <Text style={s.sectionTitle}>Personal information</Text>

          <Text style={s.inputLabel}>Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor={color.muted}
            style={s.loginInput}
          />

          <Text style={s.inputLabel}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor={color.muted}
            keyboardType="email-address"
            autoCapitalize="none"
            style={s.loginInput}
          />
        </View>

        <Pressable style={s.adminSaveButton} onPress={handleSave}>
          <Text style={s.adminSaveButtonText}>Continue →</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
