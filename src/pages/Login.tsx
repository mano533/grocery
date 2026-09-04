import { useState } from "react";

import { Alert, Pressable, Text, TextInput, View } from "react-native";

import { s } from "../styles/styles";
import { color } from "../constants/colors";
import customService from "../services/customservice";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../store/authSlice";

type Props = {
  onLogin: (
    role: "Customer" | "Admin",
    token: string,
    user: {
      userId: number;
      name: string;
      email: string;
    },
    needsProfileCompletion?: boolean,
  ) => void;

  onCreateAccount: () => void;
};

export default function Login({ onLogin, onCreateAccount }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getApi, postApi } = customService();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email");
      return;
    }

    if (!password.trim()) {
      Alert.alert("Error", "Please enter your password");
      return;
    }

    setLoading(true);

    try {
      const response = await postApi("/auth/login", {
        email: email.trim(),
        password,
      });

      console.log("Login response:", response);

      // Customer not found
      if (!response || !response.token) {
        Alert.alert(
          "Account Not Found",
          response?.message || "No customer account found.",
          [
            {
              text: "Create New Account",
              onPress: onCreateAccount,
            },
            {
              text: "Cancel",
              style: "cancel",
            },
          ],
        );

        return;
      }

      if (response.role !== "Customer" && response.role !== "Admin") {
        Alert.alert("Error", "Invalid user");
        return;
      }

      let needsProfileCompletion = false;

      if (response.role === "Customer") {
        const profile = await getApi(`/Profile/${response.userId}`);

        needsProfileCompletion =
          !profile?.name?.trim() || !profile?.email?.trim();
      }

      dispatch(
        loginSuccess({
          token: response.token,
          user: {
            userId: response.userId,
            name: response.name,
            email: response.email,
            role: response.role,
          },
        }),
      );
      // Login successful
      onLogin(response.role, response.token, {
        userId: response.userId,
        name: response.name,
        email: response.email,
      }, needsProfileCompletion);
      Alert.alert("Success", "Login successful.");
    } catch (error) {
      console.log("Login Error:", error);

      const status = (error as any)?.response?.status;
      Alert.alert(
        "Login Failed",
        status === 401 ? "Invalid user" : "Unable to connect to the server",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={s.loginRoot}>
      <View style={s.loginLogo}>
        <Text style={{ fontSize: 42 }}>🛒</Text>
      </View>
      <Text style={s.loginTitle}>Welcome back</Text>
      <Text style={s.loginSubtitle}>Login to continue shopping</Text>

      <View style={s.loginForm}>
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
          editable={!loading}
          style={s.loginInput}
        />

        {/* PASSWORD */}

        <Text style={s.inputLabel}>Password</Text>

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          placeholderTextColor={color.muted}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          editable={!loading}
          style={s.loginInput}
        />

        {/* LOGIN BUTTON */}

        <Pressable
          style={[
            s.loginButton,
            loading && {
              opacity: 0.6,
            },
          ]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={s.loginButtonText}>
            {loading ? "Logging in..." : "Login →"}
          </Text>
        </Pressable>

        {/* ========================= */}
        {/* CUSTOMER CREATE ACCOUNT */}
        {/* ========================= */}

        {/* {!isAdmin && (
          <Pressable
            onPress={onCreateAccount}
            disabled={loading}
            style={{ marginTop: 4 }}
          >
            <Text style={s.loginFooter}>
              Don't have an account?{" "}
              <Text
                style={{
                  color: color.green,
                  fontWeight: "800",
                }}
              >
                Create account
              </Text>
            </Text>
          </Pressable>



        )} */}
        <Pressable
          onPress={onCreateAccount}
          disabled={loading}
          style={{ marginTop: 12 }}
        >
          <Text style={s.loginFooter}>
            Don't have an account?{" "}
            <Text
              style={{
                color: color.green,
                fontWeight: "800",
              }}
            >
              Create new account
            </Text>
          </Text>
        </Pressable>

        {/* ========================= */}
        {/* ADMIN MESSAGE */}
        {/* ========================= */}

        {/* {isAdmin && (
          <Text style={s.loginFooter}>Authorized administrators only.</Text>
        )} */}
      </View>
    </View>
  );
}
