import { Alert, Pressable, ScrollView, Text, TextInput, View } from "react-native";

import { useState } from "react";

import { s } from "../../../styles/styles";
import customService from "../../../services/customservice";

type Props = {
  userId: number | null;
  back: () => void;
  save: (address: string) => void;
};

export default function AddressForm({ userId, back, save }: Props) {
  const [type, setType] = useState("Home");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [house, setHouse] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [landmark, setLandmark] = useState("");

  const handleSave = async () => {
    if (!name || !mobile || !house || !area || !city || !state || !pincode) {
      Alert.alert("Warning", "Please fill in all required fields");
      return;
    }

    const fullAddress = `${house}, ${area}, ${city}, ${state} - ${pincode}`;

    if (!userId) {
      Alert.alert("Warning", "Please log in before adding an address.");
      return;
    }

    try {
      await customService().postApi("/Addresses", {
        userId,
        type,
        name,
        mobile,
        house,
        area,
        city,
        state,
        pincode,
        landmark,
      });

      save(fullAddress);
      Alert.alert("Success", "Address added successfully.");
    } catch (error) {
      console.log("Address Error:", error);
      Alert.alert("Error", "Failed to add address.");
    }
  };

  return (
    <View style={s.detailRoot}>
      <View style={s.detailTop}>
        <Pressable onPress={back}>
          <Text style={s.back}>‹</Text>
        </Pressable>

        <Text style={s.sectionTitle}>Add Address</Text>

        <Text style={s.back}> </Text>
      </View>

      <ScrollView contentContainerStyle={s.detailScroll}>
        <Text style={s.eyebrow}>DELIVERY ADDRESS</Text>

        <Text style={s.detailTitle}>Where should we deliver?</Text>

        <Text style={s.muted}>Address type</Text>

        <View style={{ flexDirection: "row", gap: 10, marginVertical: 12 }}>
          {["Home", "Work", "Other"].map((item) => (
            <Pressable
              key={item}
              onPress={() => setType(item)}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 18,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: type === item ? "#176B4D" : "#ddd",
              }}
            >
              <Text
                style={{
                  color: type === item ? "#176B4D" : "#555",
                  fontWeight: "700",
                }}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        <TextInput
          placeholder="Full name"
          value={name}
          onChangeText={setName}
          style={s.input}
        />

        <TextInput
          placeholder="Mobile number"
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
          style={s.input}
        />

        <TextInput
          placeholder="House / Flat / Door No."
          value={house}
          onChangeText={setHouse}
          style={s.input}
        />

        <TextInput
          placeholder="Street / Area"
          value={area}
          onChangeText={setArea}
          style={s.input}
        />

        <TextInput
          placeholder="City"
          value={city}
          onChangeText={setCity}
          style={s.input}
        />

        <TextInput
          placeholder="State"
          value={state}
          onChangeText={setState}
          style={s.input}
        />

        <TextInput
          placeholder="PIN Code"
          value={pincode}
          onChangeText={setPincode}
          keyboardType="number-pad"
          maxLength={6}
          style={s.input}
        />

        <TextInput
          placeholder="Landmark (Optional)"
          value={landmark}
          onChangeText={setLandmark}
          style={s.input}
        />

        <Pressable style={s.cta} onPress={handleSave}>
          <Text style={s.ctaText}>Save address →</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
