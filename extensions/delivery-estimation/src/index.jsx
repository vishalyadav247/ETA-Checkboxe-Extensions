import {
  reactExtension,
  Banner,
  useAttributeValues,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const [ETA] = useAttributeValues(['ETA']);

  return (
    <>
      <Banner
        status="success"
        title={`Based on your order we estimate your dispatch date will be ${ETA ? ETA : "YYYY-MM-DD"}`}
      />
    </>
  );
}