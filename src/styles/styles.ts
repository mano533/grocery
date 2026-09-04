import { StyleSheet } from "react-native";

import { color } from "../constants/colors";

export const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.bg,
  },
  navWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 12,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF",
  },

  scroll: {
    padding: 20,
    paddingBottom: 110,

    gap: 18,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: color.yellow,
    alignItems: "center",
    justifyContent: "center",
  },

  eyebrow: {
    fontSize: 11,
    letterSpacing: 1.4,
    color: color.green,
    fontWeight: "800",
  },

  h1: {
    fontSize: 27,
    fontWeight: "800",
    color: color.ink,
    marginTop: 5,
  },

  h2: {
    fontSize: 20,
    fontWeight: "800",
    color: color.ink,
  },

  muted: {
    color: color.muted,
    fontSize: 13,
    lineHeight: 19,
  },

  body: {
    color: color.ink,
    fontSize: 15,
    lineHeight: 22,
  },

  search: {
    height: 54,
    backgroundColor: color.white,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: color.line,
  },

  searchIcon: {
    color: color.green,
    fontSize: 28,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: color.line,
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    color: color.ink,
    backgroundColor: color.white,
    marginBottom: 14,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: color.ink,
    marginLeft: 8,
  },

  scan: {
    color: color.green,
    fontSize: 26,
  },

  modeSwitch: {
    backgroundColor: color.white,
    borderRadius: 16,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: color.line,
  },

  modeLabel: {
    fontSize: 10,
    color: color.muted,
    fontWeight: "800",
    letterSpacing: 1,
  },

  modePill: {
    flexDirection: "row",
    backgroundColor: color.bg,
    borderRadius: 10,
    padding: 3,
  },

  modeOption: {
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 8,
    color: color.muted,
    fontSize: 12,
    fontWeight: "700",
  },

  modeOptionActive: {
    backgroundColor: color.green,
    color: color.white,
  },

  banner: {
    backgroundColor: color.green,
    borderRadius: 24,
    minHeight: 190,
    padding: 22,
    flexDirection: "row",
    overflow: "hidden",
  },

  bannerKicker: {
    color: color.lime,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },

  bannerTitle: {
    color: color.white,
    fontSize: 28,
    lineHeight: 32,
    fontWeight: "800",
    marginVertical: 10,
  },

  bannerArt: {
    fontSize: 105,
    position: "absolute",
    right: 2,
    bottom: -8,
    transform: [
      {
        rotate: "-15deg",
      },
    ],
  },

  bannerButton: {
    backgroundColor: color.lime,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 11,
    alignSelf: "flex-start",
  },

  bannerButtonText: {
    color: color.green,
    fontWeight: "800",
  },

  sectionHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: color.ink,
  },

  link: {
    color: color.green,
    fontWeight: "800",
    fontSize: 13,
  },

  row: {
    gap: 12,
  },

  cat: {
    width: 78,
    alignItems: "center",
    gap: 7,
  },

  catIcon: {
    width: 64,
    height: 64,
    borderRadius: 22,
    backgroundColor: color.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: color.line,
  },

  catText: {
    fontSize: 11,
    color: color.ink,
    textAlign: "center",
  },

  product: {
    width: 176,
    backgroundColor: color.white,
    borderRadius: 20,
    padding: 10,
    gap: 5,
  },

  productCompact: {
    width: "48%",
  },

  productImage: {
    height: 138,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  discount: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: color.green,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },

  discountText: {
    color: color.white,
    fontSize: 10,
    fontWeight: "800",
  },

  productName: {
    fontSize: 14,
    fontWeight: "800",
    color: color.ink,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginTop: 2,
  },

  price: {
    fontSize: 16,
    fontWeight: "800",
    color: color.ink,
  },

  mrp: {
    color: color.muted,
    textDecorationLine: "line-through",
    fontSize: 12,
  },

  add: {
    marginLeft: "auto",
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: color.lime,
    alignItems: "center",
    justifyContent: "center",
  },

  addText: {
    color: color.green,
    fontSize: 22,
    fontWeight: "700",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  timer: {
    backgroundColor: color.yellow,
    padding: 6,
    borderRadius: 8,
  },

  timerText: {
    color: "#9B6512",
    fontSize: 10,
    fontWeight: "800",
  },

  buyAgain: {
    backgroundColor: color.bright,
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  nav: {
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 16,
    height: 68,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 6,
    elevation: 8,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    zIndex: 100,
  },

  navItem: {
    flex: 1,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
  },

  navItemActive: {
    backgroundColor: "#E8F5E9",
  },

  iconContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },

  navIcon: {
    fontSize: 22,
  },

  navLabel: {
    fontSize: 11,
    marginTop: 3,
  },

  active: {
    color: "#2E7D32",
    fontWeight: "700",
  },

  cartBadge: {
    position: "absolute",
    top: -6,
    right: -7,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: color.orange,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: color.white,
  },

  badgeText: {
    color: color.white,
    fontSize: 9,
    fontWeight: "800",
  },

  filter: {
    backgroundColor: color.white,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.line,
  },

  filterActive: {
    backgroundColor: color.green,
    borderColor: color.green,
  },

  filterText: {
    color: color.muted,
    fontSize: 12,
    fontWeight: "700",
  },

  filterTextActive: {
    color: color.white,
  },

  cartItem: {
    backgroundColor: color.white,
    borderRadius: 18,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  cartImage: {
    width: 74,
    height: 74,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  quantity: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: color.bright,
    borderRadius: 10,
    padding: 3,
    gap: 10,
  },

  qtyButton: {
    color: color.green,
    fontSize: 20,
    fontWeight: "700",
    width: 22,
    textAlign: "center",
  },

  qtyCount: {
    fontWeight: "800",
    color: color.green,
  },

  coupon: {
    backgroundColor: color.white,
    borderRadius: 15,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  summary: {
    backgroundColor: color.white,
    borderRadius: 18,
    padding: 18,
    gap: 14,
  },

  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalLine: {
    borderTopWidth: 1,
    borderColor: color.line,
    paddingTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  total: {
    fontSize: 22,
    color: color.green,
    fontWeight: "900",
  },

  cta: {
    backgroundColor: color.green,
    borderRadius: 16,
    padding: 17,
    alignItems: "center",
  },

  ctaText: {
    color: color.white,
    fontSize: 15,
    fontWeight: "800",
  },

  tabs: {
    flexDirection: "row",
    gap: 24,
    borderBottomWidth: 1,
    borderColor: color.line,
    paddingBottom: 12,
  },

  tabActive: {
    color: color.green,
    fontWeight: "800",
    borderBottomWidth: 2,
    borderColor: color.green,
    paddingBottom: 11,
  },

  orderCard: {
    backgroundColor: color.white,
    borderRadius: 20,
    padding: 16,
    gap: 15,
  },

  orderTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  status: {
    backgroundColor: color.bright,
    color: color.green,
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 6,
    fontSize: 10,
    fontWeight: "800",
    overflow: "hidden",
  },

  orderProducts: {
    backgroundColor: color.bg,
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  orderActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  outlineButton: {
    borderWidth: 1,
    borderColor: color.green,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 11,
    alignSelf: "flex-start",
  },

  outlineText: {
    color: color.green,
    fontWeight: "800",
    fontSize: 13,
  },

  textButton: {
    padding: 10,
  },

  past: {
    backgroundColor: color.white,
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  profileHero: {
    backgroundColor: color.white,
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    gap: 13,
    alignItems: "center",
  },

  profileAvatar: {
    width: 60,
    height: 60,
    backgroundColor: color.yellow,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  edit: {
    marginLeft: "auto",
    color: color.green,
    fontWeight: "800",
  },

  menuRow: {
    backgroundColor: color.white,
    minHeight: 56,
    paddingHorizontal: 15,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  menuIcon: {
    color: color.green,
    fontSize: 21,
    width: 24,
    textAlign: "center",
  },

  chevron: {
    color: color.muted,
    fontSize: 24,
    marginLeft: "auto",
  },

  detailRoot: {
    flex: 1,
    backgroundColor: color.bg,
  },

  detailTop: {
    padding: 18,
    paddingTop: 52,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: color.bg,
  },

  back: {
    color: color.green,
    fontSize: 34,
    lineHeight: 34,
  },

  detailScroll: {
    padding: 20,
    paddingTop: 4,
    gap: 15,
    paddingBottom: 115,
  },

  detailImage: {
    height: 270,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  detailBadge: {
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: color.green,
    padding: 8,
    borderRadius: 8,
  },

  detailTitle: {
    fontSize: 29,
    fontWeight: "900",
    color: color.ink,
  },

  rating: {
    color: "#D18A18",
    fontWeight: "800",
    fontSize: 15,
  },

  detailPrice: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 8,
  },

  detailCost: {
    fontSize: 29,
    fontWeight: "900",
    color: color.green,
  },

  detailCard: {
    backgroundColor: color.bright,
    padding: 16,
    borderRadius: 16,
    gap: 6,
  },

  sticky: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: color.white,
    borderTopWidth: 1,
    borderColor: color.line,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  ctaSmall: {
    flex: 1,
    backgroundColor: color.green,
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
  },

  checkoutSection: {
    gap: 10,
    backgroundColor: color.white,
    padding: 16,
    borderRadius: 18,
  },

  address: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  slotRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  slot: {
    borderWidth: 1,
    borderColor: color.line,
    padding: 11,
    borderRadius: 10,
  },

  slotActive: {
    backgroundColor: color.bright,
    borderColor: color.green,
  },

  slotText: {
    color: color.muted,
    fontSize: 12,
  },

  payment: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  trackingHero: {
    backgroundColor: color.bright,
    borderRadius: 22,
    padding: 24,
    alignItems: "center",
    gap: 5,
  },

  timeline: {
    paddingTop: 12,
  },

  timelineRow: {
    minHeight: 58,
    flexDirection: "row",
    gap: 12,
    position: "relative",
  },
  content: {
    paddingTop: 35,
    width: "100%",
    gap: 18,
  },
  emptyIcon: {
    fontSize: 50,
  },
  section: {
    width: "100%",
    gap: 12,
  },
  orderProductIcon: {
    fontSize: 30,
  },

  pastIcon: {
    fontSize: 30,
  },
  cartInfo: {
    flex: 1,
    marginHorizontal: 12,
  },

  cartEmoji: {
    fontSize: 34,
  },

  couponIcon: {
    fontSize: 22,
  },

  couponText: {
    flex: 1,
    color: color.green,
    fontWeight: "700",
  },
  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },

  profileEmoji: {
    fontSize: 34,
  },

  profileMenu: {
    width: "100%",
    gap: 2,
  },

  logoutIcon: {
    color: "#D64545",
  },

  logoutText: {
    color: "#D64545",
    fontWeight: "700",
  },
  bannerContent: {
    flex: 1,
  },

  catEmoji: {
    fontSize: 28,
  },

  buyAgainContent: {
    flex: 1,
    gap: 4,
  },

  buyAgainIcon: {
    fontSize: 42,
    marginLeft: 12,
  },

  dot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: color.line,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },

  dotDone: {
    backgroundColor: color.green,
  },

  timelineLine: {
    position: "absolute",
    width: 2,
    backgroundColor: color.line,
    left: 11,
    top: 23,
    bottom: 0,
  },

  empty: {
    flex: 1,
    minHeight: 500,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    paddingHorizontal: 20,
  },

  loginRoot: {
    flex: 1,
    backgroundColor: color.bg,
    padding: 25,
    justifyContent: "center",
  },

  loginLogo: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: color.bright,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 25,
  },

  loginTitle: {
    fontSize: 30,
    fontWeight: "900",
    color: color.ink,
    textAlign: "center",
  },

  loginSubtitle: {
    color: color.muted,
    fontSize: 14,
    textAlign: "center",
    marginTop: 7,
    marginBottom: 30,
  },

  loginForm: {
    backgroundColor: color.white,
    borderRadius: 22,
    padding: 20,
    gap: 10,
  },

  inputLabel: {
    color: color.ink,
    fontSize: 13,
    fontWeight: "800",
    marginTop: 5,
  },

  loginInput: {
    height: 52,
    borderWidth: 1,
    borderColor: color.line,
    borderRadius: 13,
    paddingHorizontal: 15,
    color: color.ink,
    fontSize: 15,
    backgroundColor: color.bg,
    marginBottom: 8,
  },

  loginButton: {
    height: 54,
    backgroundColor: color.green,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  loginButtonText: {
    color: color.white,
    fontSize: 16,
    fontWeight: "800",
  },

  loginFooter: {
    textAlign: "center",
    color: color.muted,
    fontSize: 12,
    marginTop: 12,
  },

  loginRoleContainer: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    padding: 4,
    marginTop: 20,
    marginBottom: 8,
  },

  loginRole: {
    flex: 1,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9,
  },

  loginRoleActive: {
    backgroundColor: "#E8F5E9",
  },

  loginRoleText: {
    fontSize: 14,
    fontWeight: "600",
    color: color.muted,
  },

  loginRoleTextActive: {
    color: color.green,
    fontWeight: "700",
  },
  adminTop: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  adminLogout: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDECEC",
  },

  adminStats: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  adminNavScroll: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 4,
  },
  adminComingSoon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  adminComingSoonIcon: {
    fontSize: 50,
    marginBottom: 12,
  },
  adminLoginRoot: {
    flex: 1,
    backgroundColor: color.bg,
    justifyContent: "center",
  },

  adminLoginCard: {
    backgroundColor: color.white,
    borderRadius: 20,
    padding: 24,
    marginTop: 20,
    gap: 14,
  },

  adminLoginTitle: {
    fontSize: 24,
    fontWeight: "700",
  },

  adminLoginSubtitle: {
    fontSize: 14,
    color: color.muted,
    marginBottom: 10,
  },

  adminLoginLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },

  adminLoginInput: {
    height: 50,
    borderWidth: 1,
    borderColor: color.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    backgroundColor: color.bg,
  },

  adminLoginButton: {
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.primary,
    marginTop: 10,
  },

  adminLoginButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: color.white,
  },

  adminStatCard: {
    width: "48%",
    minHeight: 120,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    elevation: 2,
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },

  adminStatIcon: {
    fontSize: 22,
  },

  adminStatValue: {
    fontSize: 22,
    fontWeight: "800",
  },

  adminStatLabel: {
    fontSize: 12,
    color: "#777",
  },

  adminSection: {
    width: "100%",
    gap: 12,
  },

  adminSectionHead: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  adminActions: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  adminAction: {
    width: "48%",
    minHeight: 90,
    borderRadius: 16,
    backgroundColor: "#E8F5E9",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  adminActionIcon: {
    fontSize: 24,
  },

  adminActionText: {
    fontSize: 13,
    fontWeight: "700",
  },

  adminOrders: {
    width: "100%",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
  },

  adminOrder: {
    minHeight: 74,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },

  adminOrderIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#F3F8F3",
    alignItems: "center",
    justifyContent: "center",
  },

  adminOrderInfo: {
    flex: 1,
    marginLeft: 12,
  },

  adminOrderRight: {
    alignItems: "flex-end",
    gap: 3,
  },

  adminOrderStatus: {
    fontSize: 10,
    fontWeight: "700",
    color: "#2E7D32",
  },

  lowStock: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },

  lowStockIcon: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#F3F8F3",
    alignItems: "center",
    justifyContent: "center",
  },
  adminProfileButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F8F2",
  },

  adminProfileIcon: {
    fontSize: 20,
    color: "#2E7D32",
    fontWeight: "700",
  },

  lowStockInfo: {
    flex: 1,
    marginLeft: 12,
  },

  lowStockValue: {
    fontSize: 15,
    fontWeight: "800",
    color: "#D64545",
  },

  adminSummary: {
    width: "100%",
    padding: 18,
    borderRadius: 18,
    backgroundColor: "#E8F5E9",
    gap: 6,
  },

  adminSummaryTitle: {
    fontSize: 20,
    fontWeight: "800",
  },

  adminSummaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  adminSummaryValue: {
    fontSize: 18,
    fontWeight: "800",
    marginTop: 4,
  },
  adminNav: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    padding: 8,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },

  adminNavItem: {
    width: "23%",
    minHeight: 72,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },

  adminNavItemActive: {
    backgroundColor: "#E8F5E9",
  },

  adminNavIcon: {
    fontSize: 18,
  },

  adminNavLabel: {
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
  },

  adminNavActive: {
    color: "#2E7D32",
    fontWeight: "800",
  },
  adminPageHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  adminAddButton: {
    paddingHorizontal: 16,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2E7D32",
  },

  adminAddButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },

  productSummary: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },

  productSummaryCard: {
    flex: 1,
    minHeight: 82,
    padding: 12,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },

  adminProductList: {
    width: "100%",
    gap: 10,
  },

  adminProductCard: {
    width: "100%",
    minHeight: 110,
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },

  adminProductImage: {
    width: 72,
    height: 72,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  adminProductEmoji: {
    fontSize: 34,
  },

  adminProductInfo: {
    flex: 1,
    marginHorizontal: 12,
  },

  adminPriceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 5,
  },

  adminProductPrice: {
    fontSize: 15,
    fontWeight: "800",
  },

  adminWholesale: {
    fontSize: 10,
    color: "#2E7D32",
    fontWeight: "700",
  },

  adminStock: {
    fontSize: 11,
    color: "#2E7D32",
    fontWeight: "700",
    marginTop: 4,
  },

  adminLowStock: {
    color: "#D64545",
  },

  adminEditButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 9,
    backgroundColor: "#F3F8F3",
  },

  adminEditText: {
    fontSize: 12,
    color: "#2E7D32",
    fontWeight: "700",
  },
  formHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  formHeaderText: {
    flex: 1,
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  backButtonText: {
    fontSize: 32,
    lineHeight: 36,
  },

  productPreview: {
    width: "100%",
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#E8F5E9",
    flexDirection: "row",
    alignItems: "center",
  },

  productPreviewImage: {
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  formSection: {
    width: "100%",
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    gap: 8,
  },

  wholesalePreview: {
    marginTop: 4,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#F3F8F3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  wholesalePreviewValue: {
    fontSize: 16,
    fontWeight: "800",
    color: "#2E7D32",
  },

  adminSaveButton: {
    width: "100%",
    height: 52,
    borderRadius: 14,
    backgroundColor: "#2E7D32",
    alignItems: "center",
    justifyContent: "center",
  },

  adminSaveButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  adminCancelButton: {
    width: "100%",
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  adminCancelButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#777777",
  },
  orderSummary: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },

  orderSummaryCard: {
    flex: 1,
    minHeight: 82,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },

  adminOrdersList: {
    width: "100%",
    gap: 10,
  },

  adminOrderCard: {
    width: "100%",
    minHeight: 120,
    padding: 14,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },

  adminOrderLargeIcon: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#F3F8F3",
    alignItems: "center",
    justifyContent: "center",
  },

  adminOrderDetails: {
    flex: 1,
    marginLeft: 12,
  },

  adminOrderTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },

  adminOrderCustomer: {
    fontSize: 13,
    fontWeight: "700",
    marginTop: 4,
  },

  adminOrderDate: {
    fontSize: 10,
    color: "#888888",
    marginTop: 5,
  },

  adminOrderAmount: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    minHeight: 55,
  },

  adminStatusBadge: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 6,
  },

  adminStatusText: {
    fontSize: 8,
    fontWeight: "800",
  },

  statusPreparing: {
    backgroundColor: "#FFF4D6",
  },

  statusProcessing: {
    backgroundColor: "#E8F0FF",
  },

  statusDelivered: {
    backgroundColor: "#E8F5E9",
  },

  statusCancelled: {
    backgroundColor: "#FDECEC",
  },
  customerSummary: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },

  customerSummaryCard: {
    flex: 1,
    minHeight: 82,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },

  customerList: {
    width: "100%",
    gap: 10,
  },

  customerCard: {
    width: "100%",
    minHeight: 125,
    padding: 14,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },

  customerAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#E8F5E9",
    alignItems: "center",
    justifyContent: "center",
  },

  customerAvatarText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2E7D32",
  },

  customerInfo: {
    flex: 1,
    marginHorizontal: 12,
  },

  customerNameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  customerType: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
    backgroundColor: "#F1F5F1",
  },

  customerTypeWholesale: {
    backgroundColor: "#FFF4D6",
  },

  customerTypeText: {
    fontSize: 8,
    fontWeight: "800",
    color: "#555555",
  },

  customerPhone: {
    fontSize: 11,
    color: "#777777",
    marginTop: 3,
  },

  customerStatsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
  },

  customerStatText: {
    fontSize: 10,
    color: "#888888",
  },

  customerSpent: {
    fontSize: 12,
    fontWeight: "800",
  },

  customerRight: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    minHeight: 55,
  },

  customerStatus: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: "#E8F5E9",
  },

  customerStatusInactive: {
    backgroundColor: "#FDECEC",
  },

  customerStatusText: {
    fontSize: 8,
    fontWeight: "800",
    color: "#2E7D32",
  },

  wholesaleCustomerBanner: {
    width: "100%",
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#E8F5E9",
    flexDirection: "row",
    alignItems: "center",
  },

  wholesaleCustomerIcon: {
    fontSize: 30,
    marginRight: 12,
  },

  wholesaleCustomerTitle: {
    fontSize: 16,
    fontWeight: "800",
  },

  wholesaleCustomerCount: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2E7D32",
  },
  categorySummary: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },

  categorySummaryCard: {
    flex: 1,
    minHeight: 82,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },

  categoryList: {
    width: "100%",
    gap: 10,
  },

  categoryCard: {
    width: "100%",
    minHeight: 105,
    padding: 14,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },

  categoryIcon: {
    width: 58,
    height: 58,
    borderRadius: 15,
    backgroundColor: "#E8F5E9",
    alignItems: "center",
    justifyContent: "center",
  },

  categoryInfo: {
    flex: 1,
    marginHorizontal: 12,
  },

  categoryBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 7,
  },

  categoryProducts: {
    fontSize: 10,
    fontWeight: "700",
    color: "#777777",
  },

  categoryStatus: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
    backgroundColor: "#E8F5E9",
  },

  categoryStatusInactive: {
    backgroundColor: "#FDECEC",
  },

  categoryStatusText: {
    fontSize: 8,
    fontWeight: "800",
    color: "#2E7D32",
  },

  categoryInfoBanner: {
    width: "100%",
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#E8F5E9",
    flexDirection: "row",
    alignItems: "center",
  },

  categoryInfoIcon: {
    fontSize: 28,
    marginRight: 12,
  },

  categoryInfoTitle: {
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 3,
  },
  settingsSection: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 6,
    overflow: "hidden",
  },

  settingsSectionTitle: {
    fontSize: 14,
    fontWeight: "800",
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 8,
  },

  settingsRow: {
    width: "100%",
    minHeight: 72,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  settingsIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#F3F8F3",
    alignItems: "center",
    justifyContent: "center",
  },

  settingsInfo: {
    flex: 1,
    marginLeft: 12,
  },

  settingsTitle: {
    fontSize: 14,
    fontWeight: "700",
  },

  settingsSubtitle: {
    fontSize: 10,
    color: "#888888",
    marginTop: 3,
  },

  settingsToggle: {
    width: 42,
    height: 24,
    borderRadius: 20,
    backgroundColor: "#2E7D32",
    padding: 3,
    justifyContent: "center",
    alignItems: "flex-end",
  },

  settingsToggleDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#FFFFFF",
  },

  adminLogoutButton: {
    width: "100%",
    height: 50,
    borderRadius: 14,
    backgroundColor: "#FDECEC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  adminLogoutIcon: {
    fontSize: 20,
    color: "#D64545",
  },

  adminLogoutText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#D64545",
  },

  adminVersion: {
    textAlign: "center",
    fontSize: 10,
    color: "#999999",
    marginTop: 4,
    marginBottom: 20,
  },
});
