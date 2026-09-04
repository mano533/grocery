export type Product = {
  id: string;
  name: string;
  brand: string;
  qty: string;
  price: number;
  mrp: number;
  emoji: string;
  image?: number;
  tone: string;
  category: string;
  stock: number;
};

export type Mode = "Retail" | "Wholesale";

export type Tab = "Home" | "Categories" | "Orders" | "Cart" | "Profile";

export type Screen =
  | "login"
  | "main"
  | "detail"
  | "checkout"
  | "tracking"
  | "register"
  | "address"
  | "profileCompletion";

export type AdminScreen =
  | "adminLogin"
  | "admin"
  | "adminProductForm"
  | "adminScreenForm"
  | "adminProfile";

export type ScreenItem = {
  id: number;
  name: string;
  icon: string;
  isActive: boolean;
  displayOrder: number;
  userrole: string;
};

export type AdminOrder = {
  id: number;
  customerOrderId: number;
  userId: number;
  customer: string;
  amount: number;
  date: string;
  status: string;
  items: number;
};

export type AdminCustomer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  orders: number;
  spent: number;
  type: "Retail" | "Wholesale";
  status: "Active" | "Inactive";
};

export type Cart = Record<string, number>;
