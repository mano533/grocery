import { Image, Pressable, Text, View } from "react-native";
import { Mode, Product } from "../types";
import { s } from "../styles/styles";

type Props = {
  mode: Mode;
  p: Product;
  add: (p: Product) => void;
  open: (p: Product) => void;
  compact?: boolean;
};

export default function Card({ mode, p, add, open, compact }: Props) {
  const price = mode === "Wholesale" ? Math.round(p.price * 0.9) : p.price;

  const discount = Math.round((1 - price / p.mrp) * 100);

  return (
    <Pressable
      onPress={() => open(p)}
      style={[s.product, compact && s.productCompact]}
    >
      <View
        style={[
          s.productImage,
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
          <Text
            style={{
              fontSize: compact ? 42 : 54,
            }}
          >
            {p.emoji}
          </Text>
        )}

        <View style={s.discount}>
          <Text style={s.discountText}>
            {mode === "Wholesale" ? "BULK −10%" : `${discount}% OFF`}
          </Text>
        </View>
      </View>

      <Text style={s.productName} numberOfLines={1}>
        {p.name}
      </Text>

      <Text style={s.muted}>
        {p.brand} · {p.qty}
      </Text>

      <View style={s.priceRow}>
        <Text style={s.price}>₹{price}</Text>

        <Text style={s.mrp}>₹{p.mrp}</Text>

        <Pressable
          onPress={(e) => {
            e.stopPropagation();
            add(p);
          }}
          style={s.add}
        >
          <Text style={s.addText}>+</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}
