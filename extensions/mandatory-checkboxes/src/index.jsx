import { useState, useEffect } from "react";
import {
  reactExtension,
  useApi,
  useBuyerJourneyIntercept,
  useApplyAttributeChange,
  BlockStack,
  Checkbox,
  Text,
  Banner,
  Link,
  useSettings,
  useCartLines
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <ConditionalMandatoryCheckboxes />
));

function ConditionalMandatoryCheckboxes() {
  const { check_1, check_2, check_3 } = useSettings();
  const applyAttributeChange = useApplyAttributeChange();
  const { lines } = useApi();
  const cartLines = useCartLines();

  let products = lines.current;
  let allProductTypes = products.map((product) => {
    return product.merchandise?.product?.productType;
  })

  const checkFinishLogic = (products) => {
    const hasFinish = products.some(product =>
      product.merchandise?.selectedOptions?.some(option => option.name === "finish")
    );

    const hasUnfinished = products.some(product =>
      product.merchandise?.selectedOptions?.some(
        option => option.name === "finish" && option.value === "unfinished"
      )
    );

    if (hasFinish) {
      return !hasUnfinished
    } else {
      return false; // If no finish option, we assume it's valid
    }
  }
  // console.log(allSelectedProductOptions)

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [blockPaymentJourney, setBlockPaymentJourney] = useState(false);

  const [showThirdCheckbox,setShowThirdCheckbox] = useState(false);

  // Determine which checkboxes should be shown
  const showSecondCheckbox = allProductTypes.some(type => typeof type === 'string' && type.toLowerCase() === 'internal doors');
  
  useEffect(() => {
    let res = checkFinishLogic(cartLines);
    setShowThirdCheckbox(res);
  }, [JSON.stringify(cartLines)]);

  useEffect(() => {
    // Only consider checkboxes that are visible for logic and attributes
    // 1st checkbox always shown
    if (checked1) {
      applyAttributeChange({
        key: "Accepted Terms & Conditions",
        type: "updateAttribute",
        value: "Yes",
      });
    } else {
      applyAttributeChange({
        key: "Accepted Terms & Conditions",
        type: "removeAttribute",
      });
    }

    if (showSecondCheckbox) {
      if (checked2) {
        applyAttributeChange({
          key: "Accepted Door Disclaimer",
          type: "updateAttribute",
          value: "Yes",
        });
      } else {
        applyAttributeChange({
          key: "Accepted Door Disclaimer",
          type: "removeAttribute",
        });
      }
    } else {
      // Always remove if not shown
      applyAttributeChange({
        key: "Accepted Door Disclaimer",
        type: "removeAttribute",
      });
    }

    if (showThirdCheckbox) {
      if (checked3) {
        applyAttributeChange({
          key: "Accepted Custom Finish",
          type: "updateAttribute",
          value: "Yes",
        });
      } else {
        applyAttributeChange({
          key: "Accepted Custom Finish",
          type: "removeAttribute",
        });
      }
    } else {
      // Always remove if not shown
      applyAttributeChange({
        key: "Accepted Custom Finish",
        type: "removeAttribute",
      });
    }

    // Block banner logic: only consider visible checkboxes
    if (
      checked1 &&
      (!showSecondCheckbox || checked2) &&
      (!showThirdCheckbox || checked3)
    ) {
      setBlockPaymentJourney(false);
    }
  }, [checked1, checked2, checked3, applyAttributeChange, showSecondCheckbox, showThirdCheckbox]);

  useBuyerJourneyIntercept(() => {
    // Only require visible checkboxes
    if (
      !checked1 ||
      (showSecondCheckbox && !checked2) ||
      (showThirdCheckbox && !checked3)
    ) {
      setBlockPaymentJourney(true);
      return {
        behavior: "block",
        reason: "You must accept all terms to continue.",
      };
    }
    return { behavior: "allow" };
  });

  return (
    <BlockStack spacing="tight">
      <Text emphasis="bold">Please confirm before payment:</Text>
      <Checkbox checked={checked1} onChange={setChecked1} id="check1">
        <Text>I have read and accept the <Link to={check_1}>terms and conditions</Link>.</Text>
      </Checkbox>
      {showSecondCheckbox && (
        <Checkbox checked={checked2} onChange={setChecked2} id="check2">
          <Text>I have read and understood the <Link to={check_2}>External Door Product Disclaimer</Link> and understand that by not following this information, I will void the door's warranty.</Text>
        </Checkbox>
      )}
      {showThirdCheckbox && (
        <Checkbox checked={checked3} onChange={setChecked3} id="check3">
          <Text>I understand that my order contains a custom finish, which voids the right to change my mind.</Text>
        </Checkbox>
      )}
      {blockPaymentJourney && (
        <Text appearance="critical" variant="bodyLg">All checkboxes are required to continue. Please check all before paying.</Text>
      )}
    </BlockStack>
  );
}

