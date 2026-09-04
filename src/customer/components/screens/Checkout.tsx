import { Pressable, ScrollView, Text, View } from "react-native";

import { s } from "../../../styles/styles";
import Box from "../../../common/Box";
import Line from "../../../common/Line";

type Props = {
  total: number;
  subtotal: number;
  savings: number;
  deliveryFee: number;
  count: number;
  address: string;
  changeAddress: () => void;
  place: () => void;
  back: () => void;
};

export default function Checkout({
  total,
  subtotal,
  savings,
  deliveryFee,
  count,
  address,
  changeAddress,
  place,
  back,
}: Props) {
  const canPlaceOrder = address.trim().length > 0;

  const handlePlaceOrder = () => {
    if (!canPlaceOrder) {
      return;
    }

    place();
  };

  return (
    <View style={s.detailRoot}>
      <View style={s.detailTop}>
        <Pressable onPress={back}>
          <Text style={s.back}>‹</Text>
        </Pressable>

        <Text style={s.sectionTitle}>Checkout</Text>

        <Text style={s.back}> </Text>
      </View>

      <ScrollView contentContainerStyle={s.detailScroll}>
        <Text style={s.eyebrow}>ALMOST THERE</Text>

        <Text style={s.detailTitle}>Complete your order</Text>

        <Box title="Delivery address">
          <View style={s.address}>
            <Text style={{ fontSize: 24 }}>⌖</Text>

            <View style={{ flex: 1 }}>
              {address ? (
                <>
                  <Text style={s.productName}>Home</Text>
                  <Text style={s.muted}>{address}</Text>
                </>
              ) : (
                <Text style={s.muted}>No delivery address added</Text>
              )}
            </View>

            <Pressable onPress={changeAddress}>
              {!address ? (
                <Text style={s.link}> Add Address</Text>
              ) : (
                <Text style={s.link}> Change </Text>
              )}
            </Pressable>
          </View>
        </Box>

        <Box title="Delivery slot">
          <View style={s.slotRow}>
            {["10–12 AM", "12–2 PM", "4–6 PM", "6–8 PM"].map((slot, index) => (
              <View key={slot} style={[s.slot, index === 2 && s.slotActive]}>
                <Text
                  style={[
                    s.slotText,
                    index === 2 && {
                      color: "#176B4D",
                      fontWeight: "800",
                    },
                  ]}
                >
                  {slot}
                </Text>
              </View>
            ))}
          </View>
        </Box>

        <Box title="Payment">
          <View style={s.payment}>
            <Text style={{ fontSize: 22 }}>◉</Text>

            <Text style={s.body}>Cash on Delivery</Text>

            <Text style={s.link}>Change</Text>
          </View>
        </Box>

        <Box title={`Order summary · ${count} items`}>
          <Line l="Subtotal" v={`₹${subtotal}`} />

          <Line l="Discount" v={`− ₹${savings}`} green />

          <Line
            l="Delivery fee"
            v={deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
          />

          <View style={s.totalLine}>
            <Text style={s.sectionTitle}>Total</Text>

            <Text style={s.total}>₹{total}</Text>
          </View>
        </Box>
      </ScrollView>

      <View style={s.sticky}>
        <View>
          <Text style={s.muted}>Total to pay</Text>

          <Text style={s.total}>₹{total}</Text>
        </View>

        <Pressable
          style={[s.ctaSmall, !address.trim() && { opacity: 0.5 }]}
          disabled={!address.trim()}
          onPress={place}
        >
          <Text style={s.ctaText}>
            {!address.trim() ? "Add address" : "Place order →"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
