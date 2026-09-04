import { StatusBar } from "expo-status-bar";
import { Alert } from "react-native";

import { useEffect, useMemo, useRef, useState } from "react";

import type { Product, Mode, Screen, Tab, AdminScreen, ScreenItem, AdminOrder, AdminCustomer } from "./src/types";

import { color } from "./src/constants/colors";

import Login from "./src/pages/Login";

// =========================
// CUSTOMER
// =========================

import Detail from "./src/customer/components/screens/Detail";
import Checkout from "./src/customer/components/screens/Checkout";
import Tracking from "./src/customer/components/screens/Tracking";
import Home from "./src/customer/components/screens/Home";
import Categories from "./src/customer/components/screens/Categories";
import Orders from "./src/customer/components/screens/Orders";
import Cart from "./src/customer/components/screens/Cart";
import Profile from "./src/customer/components/screens/Profile";

import BottomNav from "./src/customer/navigation/BottomNav";

// =========================
// ADMIN
// =========================

import AdminApp from "./src/Admin/AdminApp";
import ProductForm from "./src/Admin/screens/ProductForm";
import AdminProfile from "./src/Admin/screens/AdminProfile";
import ScreenForm from "./src/Admin/screens/ScreenForm";
import Register from "./src/pages/Register";
import { AppDispatch, RootState } from "./src/store/store";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "./src/store/authSlice";
import AddressForm from "./src/customer/components/screens/AddressForm";
import ProfileCompletion from "./src/customer/components/screens/ProfileCompletion";
import customService from "./src/services/customservice";

// =========================
// PRODUCTS
// =========================

const initialProducts: Product[] = [
  {
    id: "tamarind",
    name: "Fresh Tamarind",
    brand: "Farm Fresh",
    qty: "1 kg",
    price: 180,
    mrp: 220,
    emoji: "🫘",
    image: require("./assets/tamarind.png"),
    tone: color.bright,
    category: "Tamarind",
    stock: 850,
  },
];

export default function MainApp() {
  const authDetails = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const authIsValid =
    authDetails.isLoggedIn &&
    !!authDetails.token &&
    !!authDetails.user &&
    (authDetails.user.role === "Customer" || authDetails.user.role === "Admin");
  const invalidAuthShown = useRef(false);

  console.log("authDetails", authDetails);

  // =========================
  // PRODUCTS
  // =========================

  const [products, setProducts] = useState<Product[]>(initialProducts);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await customService().getApi("/Products");

        const apiProducts: Product[] = response.map((product: any) => ({
          id: String(product.id),
          name: product.name,
          brand: product.brand || "",
          qty: product.qty || "",
          price: Number(product.price),
          mrp: Number(product.price),
          emoji: "🫘",
          image: /tamarind/i.test(`${product.name} ${product.category}`)
            ? require("./assets/tamarind.png")
            : undefined,
          tone: color.bright,
          category: product.category,
          stock: Number(product.stock || 0),
        }));

        setProducts(apiProducts);
      } catch (error) {
        console.log("Products Error:", error);
      }
    };

    loadProducts();
  }, []);

  // =========================
  // CUSTOMER STATE
  // =========================

  const [tab, setTab] = useState<Tab>("Home");
  const [mode, setMode] = useState<Mode>("Retail");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<Product>(initialProducts[0]);
  const [selectedScreen, setSelectedScreen] = useState<ScreenItem>();
  const [needsProfileCompletion, setNeedsProfileCompletion] = useState(false);

  // =========================
  // SCREEN
  // =========================

  const [screen, setScreen] = useState<Screen>("login");
  const [adminScreen, setAdminScreen] = useState<AdminScreen>("admin");
  const [userAddress, setUserAddress] = useState("");
  const [addressForm, setAddressForm] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);
  const [adminOrders, setAdminOrders] = useState<AdminOrder[]>([]);
  const [adminCustomers, setAdminCustomers] = useState<AdminCustomer[]>([]);

  useEffect(() => {
    if (!authIsValid && screen !== "login" && screen !== "register") {
      setScreen("login");
      setAdminScreen("admin");

      if (!invalidAuthShown.current) {
        Alert.alert("Error", "Invalid user");
        invalidAuthShown.current = true;
      }
    }

    if (authIsValid) {
      invalidAuthShown.current = false;
    }
  }, [authIsValid, screen]);
  const [screens, setScreens] = useState<ScreenItem[]>([]);

  useEffect(() => {
    const loadScreens = async () => {
      if (authDetails.user?.role !== "Admin") {
        return;
      }

      try {
        const response = await customService().getApi("/Screens?userrole=Admin");
        setScreens(response);
      } catch (error) {
        console.log("Screens Error:", error);
      }
    };

    loadScreens();
  }, [authDetails.user?.role]);

  useEffect(() => {
    const loadAdminOrders = async () => {
      if (authDetails.user?.role !== "Admin") {
        return;
      }

      try {
        const response = await customService().getApi("/Orders/admin/recent?limit=20");
        setAdminOrders(Array.isArray(response) ? response : []);
      } catch (error) {
        console.log("Admin Orders Error:", error);
      }
    };

    loadAdminOrders();
  }, [authDetails.user?.role]);

  useEffect(() => {
    const loadAdminCustomers = async () => {
      if (authDetails.user?.role !== "Admin") {
        return;
      }

      try {
        const response = await customService().getApi("/Customers");
        setAdminCustomers(Array.isArray(response) ? response : []);
      } catch (error) {
        console.log("Admin Customers Error:", error);
      }
    };

    loadAdminCustomers();
  }, [authDetails.user?.role]);

  useEffect(() => {
    const loadOrders = async () => {
      if (!authDetails.user?.userId || tab !== "Orders") {
        return;
      }

      try {
        const response = await customService().getApi(
          `/Orders/user/${authDetails.user.userId}`,
        );
        setOrders(Array.isArray(response) ? response : []);
      } catch (error) {
        console.log("Orders Error:", error);
      }
    };

    loadOrders();
  }, [authDetails.user?.userId, tab]);

  const handlePlaceOrder = async (): Promise<void> => {
    if (!authDetails.user?.userId || !userAddress.trim() || items.length === 0) {
      return;
    }

    const orderedItems = items.map((product) => ({
      productId: Number(product.id),
      quantity: cart[product.id],
    }));

    try {
      const order = await customService().postApi("/Orders", {
        userId: authDetails.user.userId,
        deliveryAddress: userAddress,
        paymentMethod: "CashOnDelivery",
        items: orderedItems,
      });

      setOrders((current) => [order, ...current]);
      setCart((current) => {
        const updated = {
          ...current,
        };

        orderedItems.forEach(({ productId, quantity }) => {
          const id = String(productId);
          const remaining = (updated[id] || 0) - quantity;

          if (remaining > 0) {
            updated[id] = remaining;
          } else {
            delete updated[id];
          }
        });

        return updated;
      });
      Alert.alert("Success", "Order placed successfully.");
      setScreen("tracking");
    } catch (error) {
      console.log("Order Error:", error);
      Alert.alert("Error", "Failed to place order.");
    }
  };

  // =========================
  // PRICE
  // =========================

  const getPrice = (p: Product): number => {
    if (mode === "Wholesale") {
      return Math.round(p.price * 0.9);
    }

    return p.price;
  };

  // =========================
  // CART
  // =========================

  const add = (p: Product): void => {
    setCart((current) => ({
      ...current,
      [p.id]: (current[p.id] || 0) + 1,
    }));
    Alert.alert("Success", "Product added to cart.");
  };

  const change = (id: string, d: number): void => {
    setCart((current) => {
      const quantity = Math.max(0, (current[id] || 0) + d);

      const updated = {
        ...current,
      };

      if (quantity > 0) {
        updated[id] = quantity;
      } else {
        delete updated[id];
      }

      Alert.alert(
        "Success",
        quantity > 0 ? "Quantity updated successfully." : "Product removed from cart.",
      );

      return updated;
    });
  };

  // =========================
  // CART CALCULATIONS
  // =========================

  const items: Product[] = products.filter((p: Product) => cart[p.id]);

  const count: number = Object.values(cart).reduce(
    (total: number, value: number) => total + value,
    0,
  );

  const subtotal: number = items.reduce(
    (sum: number, p: Product) => sum + getPrice(p) * cart[p.id],
    0,
  );

  const savings: number = items.reduce(
    (sum: number, p: Product) => sum + (p.mrp - getPrice(p)) * cart[p.id],
    0,
  );

  const deliveryFee: number = subtotal > 399 ? 0 : 25;

  const total: number = Math.max(0, subtotal + deliveryFee);

  // =========================
  // FILTER PRODUCTS
  // =========================

  const filtered: Product[] = useMemo(() => {
    const search = query.trim().toLowerCase();

    return products.filter((p: Product) => {
      const matchesSearch =
        !search ||
        `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(search);

      const matchesCategory = category === "All" || p.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, query, category]);

  // =========================
  // PRODUCT DETAIL
  // =========================

  const openProduct = (p: Product): void => {
    setSelected(p);
    setScreen("detail");
  };

  // =========================
  // CUSTOMER TAB
  // =========================

  const handleTabChange = (newTab: Tab): void => {
    setTab(newTab);
    setScreen("main");
  };

  // =========================
  // ADD PRODUCT
  // =========================

  const handleAddProduct = (): void => {
    setSelected({
      id: `product-${Date.now()}`,
      name: "",
      brand: "",
      qty: "",
      price: 0,
      mrp: 0,
      emoji: "🫘",
      tone: color.bright,
      category: "Tamarind",
      stock: 0,
    });

    setAdminScreen("adminProductForm");
  };

  // =========================
  // EDIT PRODUCT
  // =========================

  const handleEditProduct = (product: Product): void => {
    setSelected(product);
    setAdminScreen("adminProductForm");
  };

  // =========================
  // SAVE PRODUCT
  // =========================

  const handleSaveProduct = (product: Product): void => {
    const saveProduct = async () => {
      const data = {
        name: product.name,
        category: product.category,
        price: product.price,
        brand: product.brand,
        qty: product.qty,
        wholesalePrice: getPrice(product),
        imagePath: null,
        description: null,
        stock: product.stock,
      };

      try {
        const response = product.id.match(/^\d+$/)
          ? await customService().putApi(`/AdminProducts/${product.id}`, data)
          : await customService().postApi("/AdminProducts", data);

        const savedProduct: Product = {
          ...product,
          id: String(response.id),
        };

        setProducts((current) => {
          const exists = current.some((item) => item.id === product.id);

          if (exists) {
            return current.map((item) =>
              item.id === product.id ? savedProduct : item,
            );
          }

          return [...current, savedProduct];
        });

        setAdminScreen("admin");
        setScreen("main");
        Alert.alert(
          "Success",
          product.id.match(/^\d+$/)
            ? "Product updated successfully."
            : "Product added successfully.",
        );
      } catch (error) {
        console.log("Admin Product Error:", error);
        Alert.alert(
          "Error",
          product.id.match(/^\d+$/)
            ? "Failed to update product."
            : "Failed to add product.",
        );
      }
    };

    saveProduct();
    return;

    /*
    setProducts((current) => {
      const exists = current.some((item) => item.id === product.id);

      if (exists) {
        return current.map((item) => (item.id === product.id ? product : item));
      }

      return [...current, product];
    });

    setAdminScreen("admin");
    setScreen("main");
    */
  };

  const handleAddScreen = (): void => {
    setSelectedScreen({
      id: 0,
      name: "",
      icon: "",
      isActive: true,
      displayOrder: screens.length + 1,
      userrole: "Admin",
    });
    setAdminScreen("adminScreenForm");
  };

  const handleEditScreen = (screen: ScreenItem): void => {
    setSelectedScreen(screen);
    setAdminScreen("adminScreenForm");
  };

  const handleSaveScreen = (screen: ScreenItem): void => {
    const saveScreen = async () => {
      const data = {
        name: screen.name,
        icon: screen.icon,
        isActive: screen.isActive,
        displayOrder: screen.displayOrder,
        userrole: screen.userrole,
      };

      try {
        const response = screen.id > 0
          ? await customService().putApi(`/Screens/${screen.id}`, data)
          : await customService().postApi("/Screens", data);

        const savedScreen: ScreenItem = {
          ...screen,
          id: Number(response.id),
        };

        setScreens((current) => {
          const exists = current.some((item) => item.id === screen.id);

          if (exists) {
            return current.map((item) =>
              item.id === screen.id ? savedScreen : item,
            );
          }

          return [...current, savedScreen];
        });

        setAdminScreen("admin");
        Alert.alert(
          "Success",
          screen.id > 0
            ? "Screen updated successfully."
            : "Screen added successfully.",
        );
      } catch (error) {
        console.log("Screen Error:", error);
        Alert.alert(
          "Error",
          screen.id > 0
            ? "Failed to update screen."
            : "Failed to add screen.",
        );
      }
    };

    saveScreen();
  };

  // =========================
  // LOGIN SCREEN
  // =========================

  if (screen === "login" || (!authIsValid && screen !== "register")) {
    return (
      <>
        <StatusBar style="dark" />

        <Login
          onLogin={(role, token, user, profileCompletionRequired) => {
            // Redux is already storing the token and user
            // here we only handle the navigation

            if (role === "Customer") {
              setNeedsProfileCompletion(!!profileCompletionRequired);
              setScreen("main");
              setTab("Home");
            }

            if (role === "Admin") {
              setScreen("main");
              setAdminScreen("admin");
            }
          }}
          onCreateAccount={() => {
            setScreen("register");
          }}
        />
      </>
    );
  }
  if (screen === "register") {
    return (
      <Register
        onBack={() => setScreen("login")}
        onRegister={() => {
          setScreen("main");
          setTab("Home");
        }}
      />
    );
  }

  // =========================
  // ADMIN DASHBOARD
  // =========================

  if (authDetails.user?.role === "Admin" && adminScreen === "admin" && screen === "main") {
    return (
      <>
        <StatusBar style="dark" />

        <AdminApp
          onProfile={() => {
            setAdminScreen("adminProfile");
          }}
          products={products}
          onAddProduct={handleAddProduct}
          onEditProduct={handleEditProduct}
          screens={screens}
          orders={adminOrders}
          customers={adminCustomers}
          onAddScreen={handleAddScreen}
          onEditScreen={handleEditScreen}
        />
      </>
    );
  }

  // =========================
  // ADMIN PROFILE
  // =========================

  if (
    authDetails.user?.role === "Admin" &&
    adminScreen === "adminProfile" &&
    screen === "main"
  ) {
    return (
      <>
        <StatusBar style="dark" />

        <AdminProfile
          onBack={() => {
            setAdminScreen("admin");
          }}
          onLogout={() => {
            Alert.alert("Success", "Logout successful.");
            setAdminScreen("admin");
            setScreen("login");
          }}
        />
      </>
    );
  }

  // =========================
  // ADMIN PRODUCT FORM
  // =========================

  if (authDetails.user?.role === "Admin" && adminScreen === "adminProductForm") {
    return (
      <>
        <StatusBar style="dark" />

        <ProductForm
          product={selected}
          onBack={() => {
            setAdminScreen("admin");
          }}
          onSave={handleSaveProduct}
        />
      </>
    );
  }

  if (
    authDetails.user?.role === "Customer" &&
    needsProfileCompletion &&
    authDetails.user.userId
  ) {
    return (
      <>
        <StatusBar style="dark" />
        <ProfileCompletion
          userId={authDetails.user.userId}
          name={authDetails.user.name}
          email={authDetails.user.email}
          onComplete={(name, email) => {
            if (authDetails.token && authDetails.user) {
              dispatch(
                loginSuccess({
                  token: authDetails.token,
                  user: {
                    ...authDetails.user,
                    name,
                    email,
                  },
                }),
              );
            }

            setNeedsProfileCompletion(false);
            setScreen("main");
            setTab("Home");
          }}
        />
      </>
    );
  }

  // =========================
  // ADMIN SCREEN FORM
  // =========================

  if (authDetails.user?.role === "Admin" && adminScreen === "adminScreenForm") {
    return (
      <>
        <StatusBar style="dark" />

        <ScreenForm
          screen={selectedScreen}
          onBack={() => {
            setAdminScreen("admin");
          }}
          onSave={handleSaveScreen}
        />
      </>
    );
  }

  // =========================
  // PRODUCT DETAIL
  // =========================

  if (screen === "detail") {
    return (
      <>
        <StatusBar style="dark" />

        <Detail
          p={selected}
          mode={mode}
          count={cart[selected.id] || 0}
          add={add}
          change={change}
          back={() => setScreen("main")}
          cart={() => setScreen("checkout")}
          price={getPrice(selected)}
        />
      </>
    );
  }

  // =========================
  // CHECKOUT
  // =========================

  if (screen === "checkout") {
    return (
      <>
        <StatusBar style="dark" />

        <Checkout
          total={total}
          subtotal={subtotal}
          savings={savings}
          deliveryFee={deliveryFee}
          count={count}
          address={userAddress}
          changeAddress={() => setScreen("address")}
          place={handlePlaceOrder}
          back={() => setScreen("main")}
        />
      </>
    );
  }

  // =========================
  // ORDER TRACKING
  // =========================

  if (screen === "tracking") {
    return (
      <>
        <StatusBar style="dark" />

        <Tracking
          back={() => {
            setScreen("main");
            setTab("Orders");
          }}
        />
      </>
    );
  }
  // =========================
  // ADDRESS
  // =========================

  if (screen === "address") {
    return (
      <>
        <StatusBar style="dark" />

        <AddressForm
          userId={authDetails.user?.userId || null}
          back={() => setScreen("checkout")}
          save={(address) => {
            setUserAddress(address);
            setScreen("checkout");
          }}
        />
      </>
    );
  }

  // =========================
  // CUSTOMER MAIN APP
  // =========================

  return (
    <>
      <StatusBar style="dark" />

      {tab === "Home" && (
        <Home
          mode={mode}
          setMode={setMode}
          query={query}
          setQuery={setQuery}
          list={filtered}
          add={add}
          open={openProduct}
        />
      )}

      {tab === "Categories" && (
        <Categories
          mode={mode}
          setMode={setMode}
          category={category}
          setCategory={setCategory}
          query={query}
          setQuery={setQuery}
          list={filtered}
          add={add}
          open={openProduct}
        />
      )}

      {tab === "Orders" && (
        <Orders
          orders={orders}
          products={products}
          track={() => setScreen("tracking")}
          add={add}
        />
      )}

      {tab === "Cart" && (
        <Cart
          items={items}
          cart={cart}
          change={change}
          subtotal={subtotal}
          savings={savings}
          deliveryFee={deliveryFee}
          total={total}
          checkout={() => {
            if (!userAddress.trim()) {
              Alert.alert("Warning", "Please select a delivery address.");
              setScreen("address");
              return;
            }

            setScreen("checkout");
          }}
          mode={mode}
          getPrice={getPrice}
        />
      )}

      {tab === "Profile" && (
        <Profile
          userId={authDetails.user?.userId || null}
          setScreen={setScreen}
          setTab={setTab}
        />
      )}

      <BottomNav tab={tab} setTab={handleTabChange} count={count} />
    </>
  );
}
