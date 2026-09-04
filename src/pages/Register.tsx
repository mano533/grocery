import { useState } from "react";

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import { s } from "../styles/styles";
import { color } from "../constants/colors";
import customService from "../services/customservice";

type Props = {
  onBack: () => void;
  onRegister: () => void;
};

export default function Register({ onBack, onRegister }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { postApi } = customService();

  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Warning", "Please fill in all required fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Warning", "Passwords do not match");
      return;
    }
    console.log("password:", password);

    try {
      const response = await postApi("/auth/register", {
        name,
        email,
        password,
      });
      console.log("response:", response);
      Alert.alert("Success", "Registration successful.");
      onRegister();
    } catch (error) {
      console.log("Register Error:", error);
      Alert.alert("Error", "Registration failed.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={s.loginRoot}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 120,
          }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          {/* ========================= */}
          {/* BACK BUTTON */}
          {/* ========================= */}

          <Pressable
            onPress={onBack}
            style={{
              position: "absolute",
              top: 50,
              left: 20,
              zIndex: 10,
            }}
          >
            <Text style={s.back}>‹</Text>
          </Pressable>

          {/* ========================= */}
          {/* LOGO */}
          {/* ========================= */}

          <View style={s.loginLogo}>
            <Text style={{ fontSize: 42 }}>🛒</Text>
          </View>

          {/* ========================= */}
          {/* TITLE */}
          {/* ========================= */}

          <Text style={s.loginTitle}>Create account</Text>

          <Text style={s.loginSubtitle}>
            Create your account to start shopping
          </Text>

          {/* ========================= */}
          {/* FORM */}
          {/* ========================= */}

          <View style={s.loginForm}>
            {/* NAME */}

            <Text style={s.inputLabel}>Name</Text>

            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              placeholderTextColor={color.muted}
              autoCapitalize="words"
              autoCorrect={false}
              style={s.loginInput}
            />

            {/* EMAIL */}

            <Text style={s.inputLabel}>Email</Text>

            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor={color.muted}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={s.loginInput}
            />

            {/* PASSWORD */}

            <Text style={s.inputLabel}>Password</Text>

            <View style={{ position: "relative" }}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Create password"
                placeholderTextColor={color.muted}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                style={[
                  s.loginInput,
                  {
                    paddingRight: 60,
                  },
                ]}
              />

              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: 15,
                  top: 0,
                  bottom: 0,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: color.green,
                    fontWeight: "700",
                    fontSize: 14,
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </Text>
              </Pressable>
            </View>

            {/* CONFIRM PASSWORD */}

            <Text style={s.inputLabel}>Confirm password</Text>

            <View style={{ position: "relative" }}>
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm your password"
                placeholderTextColor={color.muted}
                secureTextEntry={!showConfirmPassword}
                autoCapitalize="none"
                autoCorrect={false}
                style={[
                  s.loginInput,
                  {
                    paddingRight: 60,
                  },
                ]}
              />

              <Pressable
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: "absolute",
                  right: 15,
                  top: 0,
                  bottom: 0,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: color.green,
                    fontWeight: "700",
                    fontSize: 14,
                  }}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </Text>
              </Pressable>
            </View>

            {/* REGISTER BUTTON */}

            <Pressable style={s.loginButton} onPress={handleRegister}>
              <Text style={s.loginButtonText}>Create account →</Text>
            </Pressable>

            {/* LOGIN LINK */}

            <Pressable onPress={onBack} style={{ marginTop: 4 }}>
              <Text style={s.loginFooter}>
                Already have an account?{" "}
                <Text
                  style={{
                    color: color.green,
                    fontWeight: "800",
                  }}
                >
                  Login
                </Text>
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
