import { useEffect, useState } from "react";
import {
  reactExtension,
  useApi,
  Banner,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  // useApi() gives access to checkout data, including cart lines
  const [estimatedDate, setEstimatedDate] = useState();
  const [isEmptyCart, setIsEmptyCart] = useState(false);

  const { lines } = useApi();

  useEffect(() => {
    let products = lines.current;
    let productDeliveryEstmaitedDateArray = products
      .map(
        (product) =>
          product.attributes.find(
            (attribute) => attribute.key === "Estimated Dispatch"
          )?.value
      )
      .filter(Boolean);

    if (productDeliveryEstmaitedDateArray.length > 0) {
      console.log(productDeliveryEstmaitedDateArray);
      let laterDate = new Date(
        Math.max(
          ...productDeliveryEstmaitedDateArray.map((date) => new Date(date))
        )
      );
      let formattedLaterDate = laterDate.toISOString().split("T")[0];
      setEstimatedDate(formattedLaterDate);
      setIsEmptyCart(false); // Cart is not empty, we have a valid delivery date
    } else {
      setIsEmptyCart(true); // No estimated dispatch dates, so the cart is considered empty
    }
  }, [lines]);

  // If there are no lines (cart is empty), handle gracefully
  if (isEmptyCart) {
    return (
      <>
        <Banner status="critical" title="Delivery date required." />
      </>
    );
  }

  return (
    <>
      <Banner
        status="success"
        title={`Your order will be delivered on ${
          estimatedDate ? estimatedDate : "YYYY-MM-DD"
        }`}
      />
    </>
  );
}
