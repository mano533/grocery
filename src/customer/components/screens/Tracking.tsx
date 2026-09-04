import { Pressable, ScrollView, Text, View } from "react-native";

import { s } from "../../../styles/styles";

type Props = {
  back: () => void;
};

export default function Tracking({ back }: Props) {
  return (
    <View style={s.detailRoot}>
      <View style={s.detailTop}>
        <Pressable onPress={back}>
          <Text style={s.back}>‹</Text>
        </Pressable>

        <Text style={s.sectionTitle}>Track order</Text>

        <Text style={s.back}>⋯</Text>
      </View>

      <ScrollView contentContainerStyle={s.detailScroll}>
        <View style={s.trackingHero}>
          <Text style={{ fontSize: 56 }}>🛵</Text>

          <Text style={s.h2}>Arriving today</Text>

          <Text style={s.muted}>Between 4:00 – 6:00 PM</Text>
        </View>

        <View style={s.timeline}>
          {[
            ["Order placed", "10:24 AM", true],
            ["Order confirmed", "10:25 AM", true],
            ["Preparing your order", "10:40 AM", true],
            ["Out for delivery", "Next up", false],
            ["Delivered", "", false],
          ].map(([label, time, done]) => (
            <View style={s.timelineRow} key={String(label)}>
              <View style={[s.dot, done && s.dotDone]}>
                <Text style={{ color: "#FFF" }}>{done ? "✓" : ""}</Text>
              </View>

              <View style={s.timelineLine} />

              <View
                style={{
                  flex: 1,
                  paddingBottom: 25,
                }}
              >
                <Text
                  style={[
                    s.productName,
                    !done && {
                      color: "#728078",
                    },
                  ]}
                >
                  {String(label)}
                </Text>

                <Text style={s.muted}>{String(time)}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={s.address}>
          <Text style={{ fontSize: 24 }}>⌖</Text>

          <View>
            <Text style={s.productName}>Delivering to Home</Text>

            <Text style={s.muted}>12, Green Park Avenue, Bengaluru</Text>
          </View>
        </View>

        <Pressable style={s.outlineButton} onPress={() => {}}>
          <Text style={s.outlineText}>Contact support</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
