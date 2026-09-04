import { Image, Pressable, ScrollView, Text, View } from "react-native";

import type { Mode, Product } from "../../../types";
import { s } from "../../../styles/styles";
import { color } from "../../../constants/colors";
import Quantity from "../../../common/Quantity";

type Props = {
  p: Product;
  mode: Mode;
  count: number;
  add: (product: Product) => void;
  change: (id: string, d: number) => void;
  back: () => void;
  cart: () => void;
  price: number;
};

export default function Detail({
  p,
  mode,
  count,
  add,
  change,
  back,
  cart,
  price,
}: Props) {
  const discount = Math.round((1 - price / p.mrp) * 100);

  return (
    <View style={s.detailRoot}>
      <View style={s.detailTop}>
        <Pressable onPress={back}>
          <Text style={s.back}>‹</Text>
        </Pressable>

        <Text style={s.sectionTitle}>Product details</Text>

        <Text style={s.back}>♡</Text>
      </View>

      <ScrollView contentContainerStyle={s.detailScroll}>
        <View
          style={[
            s.detailImage,
            {
              backgroundColor: p.tone,
            },
          ]}
        >
          {p.image ? (
            <Image
              source={p.image}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
            />
          ) : (
            <Text style={{ fontSize: 130 }}>{p.emoji}</Text>
          )}

          <View style={s.detailBadge}>
            <Text style={s.discountText}>{discount}% OFF</Text>
          </View>
        </View>

        <Text style={s.eyebrow}>{p.brand.toUpperCase()}</Text>

        <Text style={s.detailTitle}>{p.name}</Text>

        <Text style={s.muted}>
          {mode === "Wholesale" ? `Bulk pack · ${p.qty}` : p.qty} · In stock ·
          Delivery in 30 mins
        </Text>

        <Text style={s.rating}>
          ★ 4.8 <Text style={s.muted}>128 reviews</Text>
        </Text>

        <View style={s.detailPrice}>
          <Text style={s.detailCost}>₹{price}</Text>

          <Text style={s.mrp}>MRP ₹{p.mrp}</Text>

          <Text style={s.status}>SAVE ₹{p.mrp - price}</Text>
        </View>

        <Text style={s.sectionTitle}>About this product</Text>

        <Text style={s.body}>
          Carefully selected quality tamarind. Fresh, naturally processed, and
          suitable for wholesale and everyday use.
        </Text>

        <View style={s.detailCard}>
          <Text style={s.productName}>Why you’ll love it</Text>

          <Text style={s.muted}>
            ✓ Quality checked · ✓ Easy returns · ✓ Freshly packed
          </Text>
        </View>
      </ScrollView>

      <View style={s.sticky}>
        <Quantity count={count} change={(d) => change(p.id, d)} />

        <Pressable
          style={s.ctaSmall}
          onPress={() => {
            add(p);
            back();
          }}
        >
          <Text style={s.ctaText}>Add to cart · ₹{price}</Text>
        </Pressable>
      </View>
    </View>
  );
}
