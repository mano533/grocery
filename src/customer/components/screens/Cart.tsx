import { Image, Pressable, ScrollView, Text, View } from "react-native";

import type { Product, Cart as CartType } from "../../../types";
import { s } from "../../../styles/styles";
import { color } from "../../../constants/colors";
import Header from "../../../common/Header";
import Quantity from "../../../common/Quantity";
import Line from "../../../common/Line";
import Empty from "../../../common/Empty";

type Props = {
  items: Product[];
  cart: CartType;
  change: (id: string, d: number) => void;
  subtotal: number;
  savings: number;
  deliveryFee: number;
  total: number;
  checkout: () => void;
  mode: "Retail" | "Wholesale";
  getPrice: (product: Product) => number;
};

export default function Cart({
  items,
  cart,
  change,
  subtotal,
  savings,
  deliveryFee,
  total,
  checkout,
  mode,
  getPrice,
}: Props) {
  const count = Object.values(cart).reduce((sum, value) => sum + value, 0);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.scroll}
    >
      <View style={s.content}>
        {/* HEADER */}
        <Header title="Your cart" sub={`${count} ITEMS READY`} />

        {items.length ? (
          <>
            {/* CART ITEMS */}
            <View style={s.section}>
              {items.map((product) => (
                <View style={s.cartItem} key={product.id}>
                  <View
                    style={[
                      s.cartImage,
                      {
                        backgroundColor: product.tone,
                      },
                    ]}
                  >
                    {product.image ? (
                      <Image
                        source={product.image}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="contain"
                      />
                    ) : (
                      <Text style={s.cartEmoji}>{product.emoji}</Text>
                    )}
                  </View>

                  <View style={s.cartInfo}>
                    <Text style={s.productName}>{product.name}</Text>

                    <Text style={s.muted}>
                      {product.brand} · {product.qty}
                    </Text>

                    <Text style={s.price}>
                      ₹{getPrice(product) * cart[product.id]}
                    </Text>
                  </View>

                  <Quantity
                    count={cart[product.id]}
                    change={(d) => change(product.id, d)}
                  />
                </View>
              ))}
            </View>

            {/* COUPON */}
            <View style={s.coupon}>
              <Text style={s.couponIcon}>⌁</Text>

              <Text style={s.couponText}>Apply coupon</Text>

              <Text style={s.link}>Choose</Text>
            </View>

            {/* PRICE SUMMARY */}
            <View style={s.summary}>
              <Text style={s.sectionTitle}>Price details</Text>

              <Line l="Subtotal" v={`₹${subtotal}`} />

              <Line
                l="Delivery fee"
                v={deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
              />

              <Line l="You save" v={`− ₹${savings}`} green />

              <View style={s.totalLine}>
                <Text style={s.sectionTitle}>Total</Text>

                <Text style={s.total}>₹{total}</Text>
              </View>
            </View>

            {/* CHECKOUT */}
            <Pressable style={s.cta} onPress={checkout}>
              <Text style={s.ctaText}>Proceed to checkout →</Text>
            </Pressable>
          </>
        ) : (
          <Empty />
        )}
      </View>
    </ScrollView>
  );
}
