# UK Oak Doors Shopify Checkout UI Extensions

This Shopify app contains two custom checkout UI extensions:

## Extensions

### 1. Delivery Estimation (`delivery-estimation`)
Displays an estimated dispatch date to customers at checkout, based on cart or product attributes.  
- **Location:** `/extensions/delivery-estimation`
- **Features:**  
  - Shows a banner with the estimated dispatch date.
  - Reacts to cart changes and dynamically updates the estimation.

### 2. Mandatory Checkboxes (`mandatory-checkboxes`)
Adds mandatory checkboxes to the checkout, requiring customers to accept terms and disclaimers before payment.
- **Location:** `/extensions/mandatory-checkboxes`
- **Features:**  
  - Dynamically shows checkboxes based on cart contents (e.g., product type or options).
  - Prevents checkout until all required checkboxes are checked.

## Installation & Setup

1. **Clone this repository** and install dependencies:
   ```sh
   npm install
   ```

2. **Update environment variables** and Shopify app settings as needed.

3. **Configure metafields**  
   For the delivery estimation extension, ensure the required product metafields (e.g., `custom.dispatch_eta_map`) are created and published to the Storefront API.

4. **Deploy extensions to your Shopify store:**
   ```sh
   shopify app dev
   ```
   or
   ```sh
   shopify extension push
   ```

5. **Test in your development store** to ensure both extensions appear and function as expected at checkout.

## Extension-specific README files

Each extension folder contains its own `README.md` with more detailed usage and configuration instructions.

---

For more information, see the [Shopify Checkout UI Extensions documentation](https://shopify.dev/docs/api/checkout-ui-extensions).
