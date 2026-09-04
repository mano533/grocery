import { Pressable, ScrollView, Text, View } from "react-native";

import { s } from "../../styles/styles";
import type { AdminOrder } from "../../types";

type OrderStatus =
  | "Preparing"
  | "Confirmed"
  | "Processing"
  | "Delivered"
  | "Cancelled";

type Props = {
  orders: AdminOrder[];
  onOpen?: (order: AdminOrder) => void;
};

export default function AdminOrders({ orders, onOpen }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.scroll}
    >
      <View style={s.content}>
        {/* HEADER */}

        <View style={s.adminPageHeader}>
          <View style={{ flex: 1 }}>
            <Text style={s.eyebrow}>ORDER MANAGEMENT</Text>

            <Text style={s.h1}>Orders</Text>

            <Text style={s.muted}>Manage customer and wholesale orders.</Text>
          </View>
        </View>

        {/* SUMMARY */}

        <View style={s.orderSummary}>
          <View style={s.orderSummaryCard}>
            <Text style={s.adminStatValue}>128</Text>

            <Text style={s.adminStatLabel}>Total</Text>
          </View>

          <View style={s.orderSummaryCard}>
            <Text style={s.adminStatValue}>18</Text>

            <Text style={s.adminStatLabel}>Preparing</Text>
          </View>

          <View style={s.orderSummaryCard}>
            <Text style={s.adminStatValue}>24</Text>

            <Text style={s.adminStatLabel}>Processing</Text>
          </View>

          <View style={s.orderSummaryCard}>
            <Text style={s.adminStatValue}>86</Text>

            <Text style={s.adminStatLabel}>Completed</Text>
          </View>
        </View>

        {/* ORDERS */}

        <View style={s.adminSection}>
          <View style={s.adminSectionHead}>
            <Text style={s.sectionTitle}>Recent orders</Text>

            <Text style={s.muted}>{orders.length} shown</Text>
          </View>

          <View style={s.adminOrdersList}>
            {orders.map((order) => (
              <Pressable
                key={order.id}
                style={s.adminOrderCard}
                onPress={() => onOpen?.(order)}
              >
                {/* ICON */}

                <View style={s.adminOrderLargeIcon}>
                  <Text style={{ fontSize: 25 }}>📦</Text>
                </View>

                {/* DETAILS */}

                <View style={s.adminOrderDetails}>
                  <View style={s.adminOrderTitleRow}>
                    <Text style={s.productName}>#{order.id}</Text>

                    <StatusBadge status={order.status} />
                  </View>

                  <Text style={s.adminOrderCustomer}>{order.customer}</Text>

                  <Text style={s.muted}>{order.items} item(s)</Text>

                  <Text style={s.adminOrderDate}>
                    {new Date(order.date).toLocaleString()}
                  </Text>
                </View>

                {/* PRICE */}

                <View style={s.adminOrderAmount}>
                  <Text style={s.price}>₹{order.amount}</Text>

                  <Text style={s.chevron}>›</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

/* =========================
   STATUS BADGE
========================= */

function StatusBadge({ status }: { status: string }) {
  const statusStyle =
    status === "Delivered"
      ? s.statusDelivered
      : status === "Cancelled"
        ? s.statusCancelled
        : status === "Preparing"
          ? s.statusPreparing
          : s.statusProcessing;

  return (
    <View style={[s.adminStatusBadge, statusStyle]}>
      <Text style={s.adminStatusText}>{status.toUpperCase()}</Text>
    </View>
  );
}
