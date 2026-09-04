import { Pressable, ScrollView, Text, View } from "react-native";

import type { Product } from "../../../types";
import { s } from "../../../styles/styles";
import Header from "../../../common/Header";
import Empty from "../../../common/Empty";

type Props = {
  orders?: any[];
  products: Product[];
  track: () => void;
  add: (product: Product) => void;
};

export default function Orders({ orders = [], products, track, add }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.scroll}
    >
      <View style={s.content}>
        {/* HEADER */}
        <Header title="My orders" sub="YOUR SHOPPING HISTORY" />

        {/* TABS */}
        <View style={s.tabs}>
          <Text style={s.tabActive}>Active</Text>
          <Text style={s.muted}>Completed</Text>
          <Text style={s.muted}>Cancelled</Text>
        </View>

        {orders.length > 0 ? (
          orders.map((order) => {
            const orderItems = Array.isArray(order.items) ? order.items : [];

            return (
              <View style={s.orderCard} key={order.id}>
                <View style={s.orderTop}>
                  <View style={{ flex: 1 }}>
                    <Text style={s.productName}>
                      Order #{order.customerOrderId || order.id}
                    </Text>

                    <Text style={s.muted}>{orderItems.length} item(s)</Text>
                  </View>

                  <Text style={s.status}>{order.status || "PREPARING"}</Text>
                </View>

                <View style={s.orderProducts}>
                  <View style={{ flex: 1 }}>
                    {orderItems.map((item: any) => {
                      const product = products.find(
                        (current) => Number(current.id) === Number(item.productId),
                      );

                      return (
                        <View
                          key={item.id || `${item.productId}-${item.quantity}`}
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text style={s.orderProductIcon}>
                            {product?.emoji || "🌿"}
                          </Text>

                          <Text style={s.muted}>
                            {product?.name || `Product #${item.productId}`} × {item.quantity}
                          </Text>
                        </View>
                      );
                    })}
                  </View>

                  <Text style={s.price}>₹{order.total}</Text>
                </View>

                <Text style={s.muted}>Delivery address · {order.deliveryAddress}</Text>

                <View style={s.orderActions}>
                  <Pressable style={s.outlineButton} onPress={track}>
                    <Text style={s.outlineText}>Track order</Text>
                  </Pressable>

                  <Pressable onPress={() => {}} style={s.textButton}>
                    <Text style={s.link}>Buy again</Text>
                  </Pressable>
                </View>
              </View>
            );
          })
        ) : (
          <Empty />
        )}
      </View>
    </ScrollView>
  );
}
