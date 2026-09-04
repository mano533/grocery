import { Pressable, ScrollView, Text, View } from "react-native";

import type { Mode, Product } from "../../../types";
import { s } from "../../../styles/styles";
import ModeSwitch from "../../../common/ModeSwitch";
import Header from "../../../common/Header";
import Search from "../../../common/Search";
import Title from "../../../common/Title";
import Card from "../../../common/Card";

type Props = {
  mode: Mode;
  setMode: (mode: Mode) => void;
  category: string;
  setCategory: (category: string) => void;
  query: string;
  setQuery: (value: string) => void;
  list: Product[];
  add: (product: Product) => void;
  open: (product: Product) => void;
};

export default function Categories({
  mode,
  setMode,
  category,
  setCategory,
  query,
  setQuery,
  list,
  add,
  open,
}: Props) {
  const filters = ["All", "Raw Tamarind", "Bulk Packs", "Wholesale"];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.scroll}
    >
      <View style={s.content}>
        {/* MODE */}
        <ModeSwitch mode={mode} setMode={setMode} />

        {/* HEADER */}
        <Header
          title={mode === "Wholesale" ? "Wholesale catalog" : "Browse tamarind"}
          sub={
            mode === "Wholesale"
              ? "CASES, CARTONS & BULK SAVINGS"
              : "PREMIUM TAMARIND PRODUCTS"
          }
        />

        {/* SEARCH */}
        <Search value={query} setValue={setQuery} />

        {/* FILTERS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={s.row}
        >
          {filters.map((filter) => (
            <Pressable
              onPress={() => setCategory(filter)}
              key={filter}
              style={[s.filter, category === filter && s.filterActive]}
            >
              <Text
                style={[
                  s.filterText,
                  category === filter && s.filterTextActive,
                ]}
              >
                {filter}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* PRODUCTS TITLE */}
        <Title
          text={category === "All" ? "All products" : category}
          action={`${list.length} items`}
        />

        {/* PRODUCTS */}
        {list.length > 0 ? (
          <View style={s.grid}>
            {list.map((product) => (
              <Card
                mode={mode}
                p={product}
                add={add}
                open={open}
                key={product.id}
                compact
              />
            ))}
          </View>
        ) : (
          <View style={s.empty}>
            <Text style={s.emptyIcon}>🔍</Text>

            <Text style={s.h2}>No products found</Text>

            <Text style={s.muted}>Try another search or category.</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
