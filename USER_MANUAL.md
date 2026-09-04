# FreshCart Grocery Store

## User Manual and Application Report

Version: 1.0  
Prepared: 4 September 2026

## 1. Purpose

FreshCart is a grocery shopping application with two user areas:

- Customer area for browsing products, managing a cart, placing orders, viewing order history, managing addresses, and viewing a profile.
- Admin area for managing products and screens, and viewing recent orders and customers.

This manual describes the current application behavior and the connection between the mobile frontend, backend API, and database.

## 2. System Overview

| Area | Technology / Component |
|---|---|
| Mobile frontend | Expo, React Native, TypeScript, React Redux |
| Backend | ASP.NET Core Web API (.NET 8) |
| Database | PostgreSQL |
| Frontend API client | Existing Axios service in `src/services/customservice.jsx` |
| Authentication | Login API with JWT response and Redux auth state |
| Development API URL | `EXPO_PUBLIC_API_URL` in the frontend `.env` file |

The current development configuration uses the computer's LAN/mobile-hotspot address:

```text
http://10.172.175.148:5258/api
```

For a different network, update the address to the computer's current IPv4 address and restart Expo.

## 3. Starting the Application

### 3.1 Start the backend

Open a terminal and run:

```powershell
cd D:\newProject\backendGroceryStore\backendGroceryStore
dotnet run --launch-profile http
```

The backend listens on port `5258` in the current development configuration.

### 3.2 Start the frontend

Open a second terminal and run:

```powershell
cd D:\newProject\mygroceryStore
npm install
npx expo start
```

Open the application with Expo Go or an Android development build.

### 3.3 Phone and mobile-hotspot setup

1. Connect the computer and phone to the same Wi-Fi or mobile-hotspot network.
2. Find the computer's current IPv4 address with `ipconfig`.
3. Set that address in `D:\newProject\mygroceryStore\.env`:

```text
EXPO_PUBLIC_API_URL=http://COMPUTER_IPV4_ADDRESS:5258/api
```

4. Allow the .NET backend through Windows Firewall if the phone cannot connect.
5. Restart Expo after changing `.env` because Expo variables are bundled when the development server starts.
6. Test the API from the computer or phone browser:

```text
http://COMPUTER_IPV4_ADDRESS:5258/swagger
```

Do not use `localhost` in the phone build. On a phone, `localhost` refers to the phone itself, not the development computer.

## 4. Authentication and Roles

### Customer login

1. Open the application.
2. Enter the registered email and password.
3. Select **Login**.
4. A successful response stores the authentication details in Redux.
5. Customers are taken to the customer shopping area.

### Admin login

1. Open the admin login entry in the login screen.
2. Enter an active admin account.
3. Select **Login**.
4. Admin users are taken to the Admin Portal.

Invalid or missing authentication returns the user to login and shows **Invalid user**. Protected customer and admin content should not be used without valid authentication.

### Registration

1. Select **Create account** from the login screen.
2. Enter name, email, password, and password confirmation.
3. Select **Create account**.
4. After successful registration, return to login and sign in.

## 5. Customer User Guide

### 5.1 Home

The Home screen provides the main shopping entry point. Use the category shortcuts, search area, and product sections to find products. Selecting a product opens its details.

### 5.2 Categories

Open **Categories** from the bottom navigation. Select a category to view the matching products.

### 5.3 Product details

From Home or Categories, select a product. The Product Details screen shows the product information and provides the action to add it to the cart.

### 5.4 Cart

Open **Cart** from the bottom navigation.

The cart shows:

- Products currently selected.
- Quantity for each product.
- Product prices.
- Cart subtotal and total.
- The cart item badge in the bottom navigation.

Use the quantity controls to change quantities. Select **Proceed to checkout** when the cart is ready.

If the cart is empty, the existing empty-cart state is displayed.

### 5.5 Checkout and placing an order

1. Open Checkout from the Cart.
2. Confirm or add a delivery address.
3. Confirm the delivery slot shown by the application.
4. Confirm Cash on Delivery, where available.
5. Review the order summary and total.
6. Select **Place order**.

An order is created only after the backend accepts the request. After a successful order, the ordered cart items are removed and the cart count is updated. If order creation fails, the cart must remain unchanged.

### 5.6 Addresses

Use **Add Address** during checkout or from the address flow. Enter the address details and save them. The address is associated with the logged-in customer.

### 5.7 My Orders

Open **Orders** from the bottom navigation. The screen loads orders for the logged-in customer only.

Each order can contain multiple line items. The list dynamically displays all available customer orders and all items belonging to each order. If no past orders exist, the existing empty state is shown.

### 5.8 Profile and logout

Open **Profile** from the bottom navigation to view the logged-in user's profile. Use the available edit or completion flow to update profile information. Select **Logout** to end the session and return to login.

## 6. Admin User Guide

The Admin Portal is available only after successful admin authentication. Use the bottom admin navigation to switch between sections.

### 6.1 Dashboard

The Dashboard provides the admin landing page and the Recent Orders area. Recent orders are loaded from the backend and sorted newest first by order creation time. Each displayed record uses the actual order ID, customer, amount, status, and order date returned by the API.

### 6.2 Product management

1. Open **Products**.
2. Select **+ Add** to create a product, or select **Edit** on an existing product.
3. Enter or update the product name, brand, quantity, category, emoji, price, MRP, and available stock.
4. Select **Save changes** for an existing product or **Add product** for a new product.

When editing an existing product, the existing Product ID is used. The operation updates the existing database row and does not create a duplicate product. Existing image and description values are preserved when the edit form does not provide replacements.

### 6.3 Admin Orders

Open **Orders** to view the latest real orders returned by the admin recent-orders API. The list is dynamically populated and includes the current database order ID, customer name, item count, date/time, amount, and status.

### 6.4 Customer management

Open **Customers** to view the complete customer list returned by the customer API. The list is sourced from active customer-role records in the existing Users table, not from orders, order items, products, or hard-coded sample data.

The current backend database model contains customer ID, name, email, active status, order count, and total spent. It does not currently contain phone or registration-date columns, so those values cannot be populated without a database change.

### 6.5 Screen management

Open **Screens** to view the configured customer and admin screens. Existing screens can be edited, and new screen records can be added through the existing screen form.

### 6.6 Categories and other sections

The Categories section is available in the admin navigation. Some summary values and presentation content in the current interface are static display values rather than database reports. Product, order, customer, and screen data that has been connected to APIs is documented in the relevant sections above.

## 7. Current API Reference

All API routes use the `/api` prefix.

### Authentication

| Method | Route | Purpose |
|---|---|---|
| POST | `/auth/login` | Authenticate a user and return JWT/user details |
| POST | `/auth/register` | Register a customer account |

### Products

| Method | Route | Purpose |
|---|---|---|
| GET | `/Products` | Load products for shopping and admin display |
| POST | `/AdminProducts` | Create an admin product |
| PUT | `/AdminProducts/{id}` | Update an existing product by Product ID |
| DELETE | `/AdminProducts/{id}` | Delete a product |

### Orders

| Method | Route | Purpose |
|---|---|---|
| POST | `/Orders` | Create an order with its line items |
| GET | `/Orders/user/{userId}` | Load orders for one customer |
| GET | `/Orders/{id}/user/{userId}` | Load one customer order |
| GET | `/Orders/admin/recent?limit=20` | Load newest orders for the Admin Portal |

### Customers and profile

| Method | Route | Purpose |
|---|---|---|
| GET | `/Customers` | Load all users with the Customer role |
| GET | `/Profile/{userId}` | Load a user's profile |
| PUT | `/Profile/{userId}` | Update a user's profile |

### Addresses and screens

| Method | Route | Purpose |
|---|---|---|
| POST | `/Addresses` | Add a customer address |
| GET | `/Addresses/user/{userId}` | Load customer addresses |
| GET | `/Screens?userrole=Admin` | Load screens for an admin role |
| POST | `/Screens` | Create a screen record |
| PUT | `/Screens/{id}` | Update a screen record |

## 8. Data Flow Summary

### Customer order flow

```text
Login
  → Redux auth state
  → Products API
  → Cart state
  → Checkout
  → Orders API
  → Orders and OrderItems tables
  → Customer order list
```

### Admin recent-orders flow

```text
Orders and Users tables
  → OrderService.GetRecentOrdersAsync
  → GET /api/Orders/admin/recent
  → MainApp adminOrders state
  → AdminApp
  → Dashboard / Admin Orders screen
```

### Admin customer-list flow

```text
Users and Roles tables
  → CustomerService.GetCustomersAsync
  → GET /api/Customers
  → MainApp adminCustomers state
  → AdminApp
  → AdminCustomers screen
```

## 9. Troubleshooting

### Login or API error: Network request failed

Check the following:

1. The backend terminal is still running.
2. The phone and computer are on the same network.
3. The `.env` API address uses the computer's current IPv4 address.
4. Port `5258` is allowed through Windows Firewall.
5. The backend URL opens from a browser on the computer.
6. Expo was restarted after changing `.env`.
7. `localhost` was not used as the API host on the phone.

### Customer or admin list is empty

Check the API directly:

```text
http://COMPUTER_IPV4_ADDRESS:5258/api/Customers
http://COMPUTER_IPV4_ADDRESS:5258/api/Orders/admin/recent?limit=20
```

If the API returns data but the app does not, restart Expo and check the Metro console for frontend errors.

### Product edit does not appear immediately

Confirm that:

- The edit action was opened from the existing product row.
- The product has a numeric database ID.
- The update request uses `PUT /api/AdminProducts/{id}`.
- The backend returned HTTP 200.
- The Products screen was refreshed after the update.

### Swagger/API testing

In development, open:

```text
http://COMPUTER_IPV4_ADDRESS:5258/swagger
```

Use Swagger to verify HTTP method, route, request body, response status, and response values before testing the mobile screen.

## 10. Current Known Limitations

- The current database User model has no phone or registration-date fields for customers.
- The frontend type-check currently reports an existing unrelated `Product.stock` error in `src/customer/data/products.ts`.
- Some dashboard and summary values are presentation values and are not yet generated from reporting APIs.
- The current development API uses a local-network IP address and is not a production deployment URL.
- The application should be tested with a production HTTPS API and production database before release.

## 11. Release Checklist

Before going live:

- Replace the development LAN API URL with the production HTTPS API URL.
- Configure production database credentials on the backend only.
- Do not expose database passwords in frontend environment variables.
- Verify customer and admin authentication.
- Verify product create, update, and delete operations.
- Verify cart, checkout, and order placement.
- Verify ordered items are removed only after successful order creation.
- Verify customer-specific order history.
- Verify admin recent orders show newest records first.
- Verify admin customer list matches the Users table.
- Test empty states and API/network failures.
- Resolve the existing frontend type-check error before creating a production build.
- Test on a physical Android device using the production configuration.
