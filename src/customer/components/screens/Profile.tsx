import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";

import type { Screen, Tab } from "../../../types";
import { s } from "../../../styles/styles";
import Header from "../../../common/Header";
import customService from "../../../services/customservice";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/authSlice";

type Props = {
  userId?: number | null;
  setScreen: (screen: Screen) => void;
  setTab: (tab: Tab) => void;
};

export default function Profile({ userId = null, setScreen, setTab }: Props) {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    name: "Mano Marappan",
    email: "mano@example.com",
  });

  useEffect(() => {
    const loadProfile = async () => {
      if (!userId) {
        return;
      }

      try {
        const response = await customService().getApi(`/Profile/${userId}`);
        setProfile({ name: response.name, email: response.email });
      } catch (error) {
        console.log("Profile Error:", error);
        Alert.alert("Error", "Unable to load profile.");
      }
    };

    loadProfile();
  }, [userId]);

  const menuItems = [
    "Personal information",
    "Saved addresses",
    "Wishlist",
    "Payment methods",
    "Coupons & offers",
    "Help & support",
    "About FreshCart",
    "Log out",
  ];

  const icons = ["♙", "⌖", "♡", "▣", "✦", "?", "ⓘ", "↪"];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.scroll}
    >
      <View style={s.content}>
        {/* HEADER */}
        <Header title="Your profile" sub="WELCOME BACK" />

        {/* PROFILE */}
        <View style={s.profileHero}>
          <View style={s.profileAvatar}>
            <Text style={s.profileEmoji}>🧑🏽</Text>
          </View>

          <View style={s.profileInfo}>
            <Text style={s.h2}>{profile.name}</Text>
            <Text style={s.muted}>{profile.email}</Text>
          </View>

          <Text style={s.edit}>Edit</Text>
        </View>

        {/* MENU */}
        <View style={s.profileMenu}>
          {menuItems.map((item, index) => {
            const isLogout = item === "Log out";

            return (
              <Pressable
                style={s.menuRow}
                key={item}
                onPress={() => {
                  if (isLogout) {
                    Alert.alert("Success", "Logged out successfully.");
                    dispatch(logout());
                    setScreen("login");
                    setTab("Home");
                  }
                }}
              >
                <Text style={[s.menuIcon, isLogout && s.logoutIcon]}>
                  {icons[index]}
                </Text>

                <Text style={[s.body, isLogout && s.logoutText]}>{item}</Text>

                {!isLogout && <Text style={s.chevron}>›</Text>}
              </Pressable>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
