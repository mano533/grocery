import { Pressable, ScrollView, Text, View } from "react-native";

import { s } from "../../styles/styles";
import type { AdminCustomer as Customer } from "../../types";

type Props = {
  customers: Customer[];
  onOpen?: (customer: Customer) => void;
};

export default function AdminCustomers({ customers, onOpen }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.scroll}
    >
      <View style={s.content}>
        {/* HEADER */}

        <View style={s.adminPageHeader}>
          <View style={{ flex: 1 }}>
            <Text style={s.eyebrow}>CUSTOMER MANAGEMENT</Text>

            <Text style={s.h1}>Customers</Text>

            <Text style={s.muted}>Manage retail and wholesale customers.</Text>
          </View>
        </View>

        {/* SUMMARY */}

        <View style={s.customerSummary}>
          <View style={s.customerSummaryCard}>
            <Text style={s.adminStatValue}>342</Text>

            <Text style={s.adminStatLabel}>Total</Text>
          </View>

          <View style={s.customerSummaryCard}>
            <Text style={s.adminStatValue}>318</Text>

            <Text style={s.adminStatLabel}>Active</Text>
          </View>

          <View style={s.customerSummaryCard}>
            <Text style={s.adminStatValue}>24</Text>

            <Text style={s.adminStatLabel}>Inactive</Text>
          </View>
        </View>

        {/* CUSTOMER LIST */}

        <View style={s.adminSection}>
          <View style={s.adminSectionHead}>
            <Text style={s.sectionTitle}>All customers</Text>

            <Text style={s.muted}>{customers.length} shown</Text>
          </View>

          <View style={s.customerList}>
            {customers.map((customer) => (
              <Pressable
                key={customer.id}
                style={s.customerCard}
                onPress={() => onOpen?.(customer)}
              >
                {/* AVATAR */}

                <View style={s.customerAvatar}>
                  <Text style={s.customerAvatarText}>
                    {customer.name.charAt(0).toUpperCase()}
                  </Text>
                </View>

                {/* DETAILS */}

                <View style={s.customerInfo}>
                  <View style={s.customerNameRow}>
                    <Text style={s.productName}>{customer.name}</Text>

                    <View
                      style={[
                        s.customerType,
                        customer.type === "Wholesale" &&
                          s.customerTypeWholesale,
                      ]}
                    >
                      <Text style={s.customerTypeText}>{customer.type}</Text>
                    </View>
                  </View>

                  <Text style={s.muted}>{customer.email}</Text>

                  <Text style={s.customerPhone}>{customer.phone}</Text>

                  <View style={s.customerStatsRow}>
                    <Text style={s.customerStatText}>
                      {customer.orders} orders
                    </Text>

                    <Text style={s.customerSpent}>
                      ₹{customer.spent.toLocaleString()}
                    </Text>
                  </View>
                </View>

                {/* STATUS */}

                <View style={s.customerRight}>
                  <View
                    style={[
                      s.customerStatus,
                      customer.status === "Inactive" &&
                        s.customerStatusInactive,
                    ]}
                  >
                    <Text style={s.customerStatusText}>{customer.status}</Text>
                  </View>

                  <Text style={s.chevron}>›</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>

        {/* WHOLESALE SUMMARY */}

        <View style={s.wholesaleCustomerBanner}>
          <Text style={s.wholesaleCustomerIcon}>🏪</Text>

          <View style={{ flex: 1 }}>
            <Text style={s.wholesaleCustomerTitle}>Wholesale customers</Text>

            <Text style={s.muted}>
              Manage bulk buyers and business accounts.
            </Text>
          </View>

          <Text style={s.wholesaleCustomerCount}>28</Text>
        </View>
      </View>
    </ScrollView>
  );
}
