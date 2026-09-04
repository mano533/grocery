import { Image, Pressable, ScrollView, Text, View } from "react-native";

import type { Product } from "../../types";
import { s } from "../../styles/styles";

type Props = {
  products: Product[];
  onAdd: () => void;
  onEdit: (product: Product) => void;
};

export default function AdminProducts({ products, onAdd, onEdit }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.scroll}
    >
      <View style={s.content}>
        {/* HEADER */}
        <View style={s.adminPageHeader}>
          <View style={{ flex: 1 }}>
            <Text style={s.eyebrow}>PRODUCT MANAGEMENT</Text>

            <Text style={s.h1}>Products</Text>

            <Text style={s.muted}>Manage products, prices and stock.</Text>
          </View>

          <Pressable style={s.adminAddButton} onPress={onAdd}>
            <Text style={s.adminAddButtonText}>+ Add</Text>
          </Pressable>
        </View>

        {/* SUMMARY */}
        <View style={s.productSummary}>
          <View style={s.productSummaryCard}>
            <Text style={s.adminStatValue}>{products.length}</Text>

            <Text style={s.adminStatLabel}>Products</Text>
          </View>

          <View style={s.productSummaryCard}>
            <Text style={s.adminStatValue}>
              {products.filter((product) => product.stock > 0).length}
            </Text>

            <Text style={s.adminStatLabel}>In stock</Text>
          </View>

          <View style={s.productSummaryCard}>
            <Text style={s.adminStatValue}>
              {products.filter((product) => product.stock <= 10).length}
            </Text>

            <Text style={s.adminStatLabel}>Low stock</Text>
          </View>
        </View>

        {/* PRODUCT LIST */}
        <View style={s.adminSection}>
          <View style={s.adminSectionHead}>
            <Text style={s.sectionTitle}>All products</Text>

            <Text style={s.muted}>{products.length} items</Text>
          </View>

          <View style={s.adminProductList}>
            {products.map((product) => {
              const wholesalePrice = Math.round(product.price * 0.9);

              const lowStock = product.stock <= 10;

              return (
                <View style={s.adminProductCard} key={product.id}>
                  {/* IMAGE */}
                  <View
                    style={[
                      s.adminProductImage,
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
                      <Text style={s.adminProductEmoji}>{product.emoji}</Text>
                    )}
                  </View>

                  {/* INFO */}
                  <View style={s.adminProductInfo}>
                    <Text style={s.productName}>{product.name}</Text>

                    <Text style={s.muted}>
                      {product.brand} · {product.qty}
                    </Text>

                    <View style={s.adminPriceRow}>
                      <Text style={s.adminProductPrice}>₹{product.price}</Text>

                      <Text style={s.adminWholesale}>
                        ₹{wholesalePrice} wholesale
                      </Text>
                    </View>

                    <Text style={[s.adminStock, lowStock && s.adminLowStock]}>
                      {product.stock} in stock
                    </Text>
                  </View>

                  {/* EDIT */}
                  <Pressable
                    style={s.adminEditButton}
                    onPress={() => onEdit(product)}
                  >
                    <Text style={s.adminEditText}>Edit</Text>
                  </Pressable>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
