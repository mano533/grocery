import { Pressable, ScrollView, Text, View } from "react-native";

import { s } from "../../styles/styles";

type Props = {
  onLogout?: () => void;
};

export default function AdminSettings({ onLogout }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.scroll}
    >
      <View style={s.content}>
        {/* HEADER */}

        <View style={s.adminPageHeader}>
          <View style={{ flex: 1 }}>
            <Text style={s.eyebrow}>ADMINISTRATION</Text>

            <Text style={s.h1}>Settings</Text>

            <Text style={s.muted}>
              Manage your store and admin preferences.
            </Text>
          </View>
        </View>

        {/* STORE */}

        <View style={s.settingsSection}>
          <Text style={s.settingsSectionTitle}>Store settings</Text>

          <SettingRow
            icon="🏪"
            title="Store information"
            subtitle="Name, email, phone and business details"
          />

          <SettingRow
            icon="📍"
            title="Delivery areas"
            subtitle="Manage locations and delivery charges"
          />

          <SettingRow
            icon="💰"
            title="Pricing & wholesale"
            subtitle="Manage retail and wholesale pricing"
          />

          <SettingRow
            icon="📦"
            title="Inventory settings"
            subtitle="Stock alerts and inventory preferences"
          />
        </View>

        {/* ORDERS */}

        <View style={s.settingsSection}>
          <Text style={s.settingsSectionTitle}>Order settings</Text>

          <SettingRow
            icon="🛒"
            title="Order management"
            subtitle="Configure order processing"
          />

          <SettingRow
            icon="🚚"
            title="Delivery settings"
            subtitle="Delivery time and charges"
          />

          <SettingRow
            icon="💳"
            title="Payment methods"
            subtitle="Manage available payment options"
          />
        </View>

        {/* NOTIFICATIONS */}

        <View style={s.settingsSection}>
          <Text style={s.settingsSectionTitle}>Notifications</Text>

          <SettingRow
            icon="🔔"
            title="Order notifications"
            subtitle="Get notified about new orders"
            toggle
          />

          <SettingRow
            icon="⚠️"
            title="Low stock alerts"
            subtitle="Notify when products are running low"
            toggle
          />

          <SettingRow
            icon="📢"
            title="Promotional notifications"
            subtitle="Marketing and promotional alerts"
            toggle
          />
        </View>

        {/* ACCOUNT */}

        <View style={s.settingsSection}>
          <Text style={s.settingsSectionTitle}>Admin account</Text>

          <SettingRow
            icon="👤"
            title="Admin profile"
            subtitle="Manage administrator information"
          />

          <SettingRow
            icon="🔐"
            title="Change password"
            subtitle="Update your admin password"
          />

          <SettingRow
            icon="🛡️"
            title="Security"
            subtitle="Login and security preferences"
          />
        </View>

        {/* LOGOUT */}

        <Pressable style={s.adminLogoutButton} onPress={onLogout}>
          <Text style={s.adminLogoutIcon}>↪</Text>

          <Text style={s.adminLogoutText}>Log out</Text>
        </Pressable>

        <Text style={s.adminVersion}>FreshCart Admin · Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

function SettingRow({
  icon,
  title,
  subtitle,
  toggle = false,
}: {
  icon: string;
  title: string;
  subtitle: string;
  toggle?: boolean;
}) {
  return (
    <Pressable style={s.settingsRow}>
      <View style={s.settingsIcon}>
        <Text style={{ fontSize: 20 }}>{icon}</Text>
      </View>

      <View style={s.settingsInfo}>
        <Text style={s.settingsTitle}>{title}</Text>

        <Text style={s.settingsSubtitle}>{subtitle}</Text>
      </View>

      {toggle ? (
        <View style={s.settingsToggle}>
          <View style={s.settingsToggleDot} />
        </View>
      ) : (
        <Text style={s.chevron}>›</Text>
      )}
    </Pressable>
  );
}
