import { useState } from "react";

import AdminNav, { type AdminTab } from "./navigation/AdminNav";

import { s } from "../styles/styles";
import AdminDashboard from "./screens/AdminDashboard";
import AdminProducts from "./screens/AdminProducts";
import AdminOrders from "./screens/AdminOrders";
import AdminCustomers from "./screens/AdminCustomers";
import AdminCategories from "./screens/AdminCategories";
import AdminSettings from "./screens/AdminSettings";
import AdminScreens from "./screens/AdminScreens";
import { AdminCustomer, AdminOrder, Product, ScreenItem } from "../types";
import { Text, View } from "react-native";

type Props = {
  onProfile: () => void;
  products: Product[];
  onAddProduct: () => void;
  onEditProduct: (product: Product) => void;
  screens: ScreenItem[];
  onAddScreen: () => void;
  onEditScreen: (screen: ScreenItem) => void;
  orders: AdminOrder[];
  customers: AdminCustomer[];
};

export default function AdminApp({
  onProfile,
  products,
  onAddProduct,
  onEditProduct,
  screens,
  onAddScreen,
  onEditScreen,
  orders,
  customers,
}: Props) {
  const [tab, setTab] = useState<AdminTab>("Dashboard");

  return (
    <>
      {/* =========================
          ADMIN CONTENT
      ========================= */}

      {tab === "Dashboard" && (
        <AdminDashboard adminProfile={onProfile} orders={orders} />
      )}

      {tab === "Products" && (
        <AdminProducts
          products={products}
          onAdd={onAddProduct}
          onEdit={onEditProduct}
        />
      )}

      {tab === "Orders" && <AdminOrders orders={orders} />}

      {tab === "Customers" && <AdminCustomers customers={customers} />}

      {tab === "Categories" && <AdminCategories />}

      {tab === "Screens" && (
        <AdminScreens
          screens={screens}
          onAdd={onAddScreen}
          onEdit={onEditScreen}
        />
      )}

      <AdminNav tab={tab} setTab={setTab} />
    </>
  );
}

/* =========================
   TEMPORARY SCREENS
========================= */

function ComingSoon({ title }: { title: string }) {
  return (
    <View style={s.adminComingSoon}>
      <Text style={s.adminComingSoonIcon}>🚧</Text>

      <Text style={s.h1}>{title}</Text>

      <Text style={s.muted}>This section is ready to be built.</Text>
    </View>
  );
}
