import { useState } from "react";
import { Alert, Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";

import type { Product } from "../../types";
import { color } from "../../constants/colors";
import { s } from "../../styles/styles";

type Props = {
  product?: Product;
  onSave: (product: Product) => void;
  onBack: () => void;
};

export default function ProductForm({ product, onSave, onBack }: Props) {
  const isEdit = !!product;

  const [name, setName] = useState(product?.name || "");
  const [brand, setBrand] = useState(product?.brand || "");
  const [qty, setQty] = useState(product?.qty || "");
  const [price, setPrice] = useState(product?.price?.toString() || "");
  const [mrp, setMrp] = useState(product?.mrp?.toString() || "");
  const [stock, setStock] = useState(product?.stock?.toString() || "");
  const [category, setCategory] = useState(product?.category || "Tamarind");
  const [emoji, setEmoji] = useState(product?.emoji || "🫘");

  const saveProduct = () => {
    if (!name.trim() || !price.trim() || !mrp.trim() || !stock.trim()) {
      Alert.alert("Warning", "Please fill in all required fields");
      return;
    }

    const newProduct: Product = {
      id: product?.id || Date.now().toString(),
      name: name.trim(),
      brand: brand.trim() || "Farm Fresh",
      qty: qty.trim() || "1 kg",
      price: Number(price),
      mrp: Number(mrp),
      stock: Number(stock),
      emoji: emoji || "🫘",
      tone: product?.tone || color.bright,
      category: category.trim() || "Tamarind",
    };

    onSave(newProduct);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.scroll}
    >
      <View style={s.content}>
        {/* HEADER */}

        <View style={s.formHeader}>
          <Pressable style={s.backButton} onPress={onBack}>
            <Text style={s.backButtonText}>‹</Text>
          </Pressable>

          <View style={s.formHeaderText}>
            <Text style={s.eyebrow}>PRODUCT MANAGEMENT</Text>

            <Text style={s.h1}>{isEdit ? "Edit product" : "Add product"}</Text>

            <Text style={s.muted}>
              {isEdit
                ? "Update product details."
                : "Add a new product to your catalog."}
            </Text>
          </View>
        </View>

        {/* PREVIEW */}

        <View style={s.productPreview}>
          <View style={s.productPreviewImage}>
            {product?.image ? (
              <Image
                source={product.image}
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
              />
            ) : (
              <Text style={{ fontSize: 42 }}>{emoji || "🫘"}</Text>
            )}
          </View>

          <View style={{ flex: 1 }}>
            <Text style={s.productName}>{name || "Product name"}</Text>

            <Text style={s.muted}>
              {brand || "Brand"} · {qty || "Quantity"}
            </Text>
          </View>
        </View>

        {/* BASIC INFORMATION */}

        <View style={s.formSection}>
          <Text style={s.sectionTitle}>Basic information</Text>

          <Text style={s.inputLabel}>Product name</Text>

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Fresh Tamarind"
            placeholderTextColor={color.muted}
            style={s.loginInput}
          />

          <Text style={s.inputLabel}>Brand</Text>

          <TextInput
            value={brand}
            onChangeText={setBrand}
            placeholder="Farm Fresh"
            placeholderTextColor={color.muted}
            style={s.loginInput}
          />

          <Text style={s.inputLabel}>Quantity</Text>

          <TextInput
            value={qty}
            onChangeText={setQty}
            placeholder="1 kg"
            placeholderTextColor={color.muted}
            style={s.loginInput}
          />

          <Text style={s.inputLabel}>Category</Text>

          <TextInput
            value={category}
            onChangeText={setCategory}
            placeholder="Tamarind"
            placeholderTextColor={color.muted}
            style={s.loginInput}
          />

          <Text style={s.inputLabel}>Product emoji</Text>

          <TextInput
            value={emoji}
            onChangeText={setEmoji}
            placeholder="🫘"
            placeholderTextColor={color.muted}
            style={s.loginInput}
          />
        </View>

        {/* PRICING */}

        <View style={s.formSection}>
          <Text style={s.sectionTitle}>Pricing</Text>

          <Text style={s.inputLabel}>Selling price</Text>

          <TextInput
            value={price}
            onChangeText={setPrice}
            placeholder="180"
            placeholderTextColor={color.muted}
            keyboardType="numeric"
            style={s.loginInput}
          />

          <Text style={s.inputLabel}>MRP</Text>

          <TextInput
            value={mrp}
            onChangeText={setMrp}
            placeholder="220"
            placeholderTextColor={color.muted}
            keyboardType="numeric"
            style={s.loginInput}
          />

          {price && (
            <View style={s.wholesalePreview}>
              <Text style={s.muted}>Wholesale price</Text>

              <Text style={s.wholesalePreviewValue}>
                ₹{Math.round(Number(price) * 0.9)}
              </Text>
            </View>
          )}
        </View>

        {/* INVENTORY */}

        <View style={s.formSection}>
          <Text style={s.sectionTitle}>Inventory</Text>

          <Text style={s.inputLabel}>Available stock</Text>

          <TextInput
            value={stock}
            onChangeText={setStock}
            placeholder="850"
            placeholderTextColor={color.muted}
            keyboardType="numeric"
            style={s.loginInput}
          />

          <Text style={s.muted}>Enter stock quantity available for sale.</Text>
        </View>

        {/* SAVE */}

        <Pressable style={s.adminSaveButton} onPress={saveProduct}>
          <Text style={s.adminSaveButtonText}>
            {isEdit ? "Save changes →" : "Add product →"}
          </Text>
        </Pressable>

        <Pressable style={s.adminCancelButton} onPress={onBack}>
          <Text style={s.adminCancelButtonText}>Cancel</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
