import { ScrollView, Text, View } from "react-native";

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
  query: string;
  setQuery: (value: string) => void;
  list: Product[];
  add: (product: Product) => void;
  open: (product: Product) => void;
};

const cats = [
  ["🌿", "Raw Tamarind"],
  ["📦", "Bulk Packs"],
  ["🏪", "Wholesale"],
  ["🚚", "Fast Delivery"],
];

export default function Home({
  mode,
  setMode,
  query,
  setQuery,
  list,
  add,
  open,
}: Props) {
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
          title={
            mode === "Wholesale"
              ? "Stock up, save more."
              : "Quality tamarind, daily."
          }
          sub={
            mode === "Wholesale"
              ? "BUSINESS PRICING • BULK ORDERS"
              : "DELIVER TO • HOME"
          }
        />

        {/* SEARCH */}
        <Search value={query} setValue={setQuery} />

        {/* BANNER */}
        <View style={s.banner}>
          <View style={s.bannerContent}>
            <Text style={s.bannerKicker}>
              {mode === "Wholesale"
                ? "WHOLESALE PRICES LIVE"
                : "QUALITY GUARANTEED"}
            </Text>

            <Text style={s.bannerTitle}>
              {mode === "Wholesale"
                ? "Better margins for\nyour business."
                : "Premium tamarind\nfor your business."}
            </Text>

            <View style={s.bannerButton}>
              <Text style={s.bannerButtonText}>
                {mode === "Wholesale" ? "Browse bulk packs →" : "Shop now →"}
              </Text>
            </View>
          </View>

          <Text style={s.bannerArt}>🌿</Text>
        </View>

        {/* CATEGORIES */}
        <View style={s.section}>
          <Title
            text={mode === "Wholesale" ? "Bulk categories" : "Shop by category"}
            action="See all"
          />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={s.row}
          >
            {cats.map(([emoji, name]) => (
              <View style={s.cat} key={name}>
                <View style={s.catIcon}>
                  <Text style={s.catEmoji}>{emoji}</Text>
                </View>

                <Text style={s.catText}>{name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* POPULAR PRODUCTS */}
        <View style={s.section}>
          <Title
            text={
              mode === "Wholesale" ? "Best value packs" : "Popular tamarind"
            }
            action="View all"
          />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={s.row}
          >
            {list.slice(0, 4).map((product) => (
              <Card
                mode={mode}
                p={product}
                add={add}
                open={open}
                key={product.id}
              />
            ))}
          </ScrollView>
        </View>

        {/* DEALS */}
        <View style={s.section}>
          <View style={s.sectionHead}>
            <Text style={s.sectionTitle}>
              {mode === "Wholesale" ? "Wholesale deals" : "Today's deals"}
            </Text>

            <View style={s.timer}>
              <Text style={s.timerText}>ENDS IN 04:32:18</Text>
            </View>
          </View>

          <View style={s.grid}>
            {list.slice(4).map((product) => (
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
        </View>

        {/* QUICK REORDER */}
        <View style={s.buyAgain}>
          <View style={s.buyAgainContent}>
            <Text style={s.eyebrow}>
              {mode === "Wholesale" ? "BULK ORDERING" : "QUICK REORDER"}
            </Text>

            <Text style={s.sectionTitle}>
              {mode === "Wholesale"
                ? "Refill your stock faster."
                : "Need more tamarind?"}
            </Text>

            <Text style={s.muted}>
              {mode === "Wholesale"
                ? "Bulk quantities available for wholesale buyers."
                : "Quality tamarind ready for your next order."}
            </Text>
          </View>

          <Text style={s.buyAgainIcon}>📦</Text>
        </View>
      </View>
    </ScrollView>
  );
}
