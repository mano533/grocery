import { Pressable, ScrollView, Text, View } from "react-native";

import { s } from "../../styles/styles";

type Category = {
  id: string;
  name: string;
  description: string;
  products: number;
  emoji: string;
  active: boolean;
};

type Props = {
  onAdd?: () => void;
  onEdit?: (category: Category) => void;
};

const categories: Category[] = [
  {
    id: "cat-001",
    name: "Raw Tamarind",
    description: "Fresh and natural tamarind products",
    products: 12,
    emoji: "🌿",
    active: true,
  },
  {
    id: "cat-002",
    name: "Bulk Packs",
    description: "Large quantity packs for businesses",
    products: 8,
    emoji: "📦",
    active: true,
  },
  {
    id: "cat-003",
    name: "Wholesale",
    description: "Products available for wholesale buyers",
    products: 15,
    emoji: "🏪",
    active: true,
  },
  {
    id: "cat-004",
    name: "Tamarind Paste",
    description: "Ready-to-use tamarind products",
    products: 6,
    emoji: "🥣",
    active: true,
  },
];

export default function AdminCategories({ onAdd, onEdit }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.scroll}
    >
      <View style={s.content}>
        {/* HEADER */}

        <View style={s.adminPageHeader}>
          <View style={{ flex: 1 }}>
            <Text style={s.eyebrow}>CATALOG MANAGEMENT</Text>

            <Text style={s.h1}>Categories</Text>

            <Text style={s.muted}>Organize products into categories.</Text>
          </View>

          <Pressable style={s.adminAddButton} onPress={onAdd}>
            <Text style={s.adminAddButtonText}>+ Add</Text>
          </Pressable>
        </View>

        {/* SUMMARY */}

        <View style={s.categorySummary}>
          <View style={s.categorySummaryCard}>
            <Text style={s.adminStatValue}>{categories.length}</Text>

            <Text style={s.adminStatLabel}>Categories</Text>
          </View>

          <View style={s.categorySummaryCard}>
            <Text style={s.adminStatValue}>
              {categories.filter((category) => category.active).length}
            </Text>

            <Text style={s.adminStatLabel}>Active</Text>
          </View>

          <View style={s.categorySummaryCard}>
            <Text style={s.adminStatValue}>
              {categories.reduce((sum, category) => sum + category.products, 0)}
            </Text>

            <Text style={s.adminStatLabel}>Products</Text>
          </View>
        </View>

        {/* CATEGORY LIST */}

        <View style={s.adminSection}>
          <View style={s.adminSectionHead}>
            <Text style={s.sectionTitle}>All categories</Text>

            <Text style={s.muted}>{categories.length} categories</Text>
          </View>

          <View style={s.categoryList}>
            {categories.map((category) => (
              <Pressable
                key={category.id}
                style={s.categoryCard}
                onPress={() => onEdit?.(category)}
              >
                {/* ICON */}

                <View style={s.categoryIcon}>
                  <Text style={{ fontSize: 28 }}>{category.emoji}</Text>
                </View>

                {/* INFO */}

                <View style={s.categoryInfo}>
                  <Text style={s.productName}>{category.name}</Text>

                  <Text style={s.muted}>{category.description}</Text>

                  <View style={s.categoryBottom}>
                    <Text style={s.categoryProducts}>
                      {category.products} products
                    </Text>

                    <View
                      style={[
                        s.categoryStatus,
                        !category.active && s.categoryStatusInactive,
                      ]}
                    >
                      <Text style={s.categoryStatusText}>
                        {category.active ? "Active" : "Inactive"}
                      </Text>
                    </View>
                  </View>
                </View>

                {/* EDIT */}

                <Text style={s.chevron}>›</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* INFO */}

        <View style={s.categoryInfoBanner}>
          <Text style={s.categoryInfoIcon}>💡</Text>

          <View style={{ flex: 1 }}>
            <Text style={s.categoryInfoTitle}>Keep your catalog organized</Text>

            <Text style={s.muted}>
              Categories help customers quickly find the right tamarind
              products.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
