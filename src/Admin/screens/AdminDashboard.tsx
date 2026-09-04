import { Pressable, ScrollView, Text, View } from "react-native";

import { s } from "../../styles/styles";
import type { AdminOrder as AdminOrderData } from "../../types";

type Props = {
  adminProfile: () => void;
  orders: AdminOrderData[];
};

export default function AdminDashboard({ adminProfile, orders }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.scroll}
    >
      <View style={s.content}>
        {/* HEADER */}
        <View style={s.adminTop}>
          <View>
            <Text style={s.eyebrow}>FRESHCART ADMIN</Text>

            <Text style={s.h1}>Dashboard</Text>

            <Text style={s.muted}>Welcome back, Mano</Text>
          </View>

          <Pressable style={s.adminProfileButton} onPress={adminProfile}>
            <Text style={s.adminProfileIcon}>👤</Text>
          </Pressable>
        </View>

        {/* SALES SUMMARY */}
        <View style={s.adminStats}>
          <View style={s.adminStatCard}>
            <Text style={s.adminStatIcon}>₹</Text>

            <Text style={s.adminStatValue}>₹45,280</Text>

            <Text style={s.adminStatLabel}>Total sales</Text>
          </View>

          <View style={s.adminStatCard}>
            <Text style={s.adminStatIcon}>📦</Text>

            <Text style={s.adminStatValue}>128</Text>

            <Text style={s.adminStatLabel}>Orders</Text>
          </View>

          <View style={s.adminStatCard}>
            <Text style={s.adminStatIcon}>👥</Text>

            <Text style={s.adminStatValue}>342</Text>

            <Text style={s.adminStatLabel}>Customers</Text>
          </View>

          <View style={s.adminStatCard}>
            <Text style={s.adminStatIcon}>🌿</Text>

            <Text style={s.adminStatValue}>850 kg</Text>

            <Text style={s.adminStatLabel}>Stock</Text>
          </View>
        </View>

        {/* QUICK ACTIONS */}
        <View style={s.adminSection}>
          <View style={s.adminSectionHead}>
            <Text style={s.sectionTitle}>Quick actions</Text>
          </View>

          <View style={s.adminActions}>
            <Pressable style={s.adminAction}>
              <Text style={s.adminActionIcon}>＋</Text>

              <Text style={s.adminActionText}>Add product</Text>
            </Pressable>

            <Pressable style={s.adminAction}>
              <Text style={s.adminActionIcon}>📦</Text>

              <Text style={s.adminActionText}>View orders</Text>
            </Pressable>

            <Pressable style={s.adminAction}>
              <Text style={s.adminActionIcon}>🏷️</Text>

              <Text style={s.adminActionText}>Add coupon</Text>
            </Pressable>

            <Pressable style={s.adminAction}>
              <Text style={s.adminActionIcon}>📊</Text>

              <Text style={s.adminActionText}>Reports</Text>
            </Pressable>
          </View>
        </View>

        {/* RECENT ORDERS */}
        <View style={s.adminSection}>
          <View style={s.adminSectionHead}>
            <Text style={s.sectionTitle}>Recent orders</Text>

            <Text style={s.link}>View all</Text>
          </View>

          <View style={s.adminOrders}>
            {orders.slice(0, 4).map((order) => (
              <AdminOrder
                key={order.id}
                order={`#${order.id}`}
                customer={order.customer}
                amount={`₹${order.amount}`}
                status={order.status}
              />
            ))}
          </View>
        </View>

        {/* LOW STOCK */}
        <View style={s.adminSection}>
          <View style={s.adminSectionHead}>
            <Text style={s.sectionTitle}>Low stock</Text>

            <Text style={s.link}>View products</Text>
          </View>

          <View style={s.lowStock}>
            <View style={s.lowStockIcon}>
              <Text style={{ fontSize: 28 }}>🌿</Text>
            </View>

            <View style={s.lowStockInfo}>
              <Text style={s.productName}>Fresh Tamarind</Text>

              <Text style={s.muted}>Farm Fresh · 1 kg</Text>
            </View>

            <Text style={s.lowStockValue}>18 kg</Text>
          </View>
        </View>

        {/* BUSINESS SUMMARY */}
        <View style={s.adminSummary}>
          <Text style={s.eyebrow}>THIS MONTH</Text>

          <Text style={s.adminSummaryTitle}>Business overview</Text>

          <View style={s.adminSummaryRow}>
            <View>
              <Text style={s.muted}>Revenue</Text>

              <Text style={s.adminSummaryValue}>₹1,84,620</Text>
            </View>

            <View>
              <Text style={s.muted}>Orders</Text>

              <Text style={s.adminSummaryValue}>486</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

/* =========================
   ORDER COMPONENT
========================= */

type OrderProps = {
  order: string;
  customer: string;
  amount: string;
  status: string;
};

function AdminOrder({ order, customer, amount, status }: OrderProps) {
  return (
    <Pressable style={s.adminOrder}>
      <View style={s.adminOrderIcon}>
        <Text style={{ fontSize: 22 }}>📦</Text>
      </View>

      <View style={s.adminOrderInfo}>
        <Text style={s.productName}>{order}</Text>

        <Text style={s.muted}>{customer}</Text>
      </View>

      <View style={s.adminOrderRight}>
        <Text style={s.price}>{amount}</Text>

        <Text style={s.adminOrderStatus}>{status}</Text>
      </View>
    </Pressable>
  );
}
