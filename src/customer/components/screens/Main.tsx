import { ScrollView, View } from "react-native";

import Home from "./Home";
import Categories from "./Categories";
import Orders from "./Orders";
import Cart from "./Cart";
import Profile from "./Profile";

import type { Cart as CartType, Mode, Product, Tab } from "../../../types";
import { s } from "../../../styles/styles";

type Props = {
  tab: Tab;
  setTab: (tab: Tab) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
  query: string;
  setQuery: (query: string) => void;
  category: string;
  setCategory: (category: string) => void;
  list: Product[];
  products?: Product[];
  items: Product[];
  cart: CartType;
  add: (product: Product) => void;
  change: (id: string, d: number) => void;
  subtotal: number;
  savings: number;
  deliveryFee: number;
  total: number;
  getPrice: (product: Product) => number;
  open: (product: Product) => void;
  checkout: () => void;
  track: () => void;
  setScreen: (screen: any) => void;
};

export default function Main({
  tab,
  setTab,
  mode,
  setMode,
  query,
  setQuery,
  category,
  setCategory,
  list,
  products = [],
  items,
  cart,
  add,
  change,
  subtotal,
  savings,
  deliveryFee,
  total,
  getPrice,
  open,
  checkout,
  track,
  setScreen,
}: Props) {
  return (
    <View style={s.root}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.scroll}
      >
        {tab === "Home" && (
          <Home
            mode={mode}
            setMode={setMode}
            query={query}
            setQuery={setQuery}
            list={list}
            add={add}
            open={open}
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
            list={list}
            add={add}
            open={open}
          />
        )}

        {tab === "Orders" && (
          <Orders products={products} track={track} add={add} />
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
            checkout={checkout}
            mode={mode}
            getPrice={getPrice}
          />
        )}

        {tab === "Profile" && <Profile setScreen={setScreen} setTab={setTab} />}
      </ScrollView>
    </View>
  );
}
