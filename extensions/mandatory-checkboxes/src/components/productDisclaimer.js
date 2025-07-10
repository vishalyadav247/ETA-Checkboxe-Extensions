import React from 'react'
import {
    BlockStack,
    Text,
    TextBlock,
    Image
} from "@shopify/ui-extensions-react/checkout";

function ProductDisclaimer() {
    return (

        <BlockStack spacing="loose">
            <Text emphasis="bold">Thank you for choosing our External Doors</Text>
            <TextBlock size="medium">
                We would like to make you aware of the following points regarding our External Doors and request that you read the following guidelines so we can continue to process your order.
            </TextBlock>
            <TextBlock size="medium">
                Failure to comply with the below will result in your warranty being void, you can find more details regarding the above in the Terms and Conditions on our website.
            </TextBlock>
            <TextBlock size="medium">
                Please check over the products within 48 hours after delivery to ensure that you are 100% satisfied!
            </TextBlock>
            <TextBlock size="medium">
                <BlockStack spacing="extraTight">
                    <Text emphasis="bold" italic>Storage - Flat and Dry Only</Text>
                    <Text>
                        Please ensure that your new products are stored flat and in a dry area, raised from the ground. It is worth noting that your door does not need to be in physical contact with water to take on moisture. All packaging is to be kept on the product, removed for inspection and then re-applied for storage. Your doors should not be left out of their sealed packaging.
                    </Text>
                </BlockStack>
            </TextBlock>
            <TextBlock size="medium">
                Timber is a comparatively soft and occasional light surface marks can happen during transit even with the best packaging. In most cases these can be easily sanded out with no adverse effect on the door. As wood is a natural product it is susceptible to changes in each room's atmosphere and as such please be mindful of this and take care to avoid damp areas. Please avoid placing close to a heat source such as radiators, direct sunlight or even building works that can generate an increased humidity such as plastering or decorating works.
            </TextBlock>
            <TextBlock size="medium">
                <BlockStack spacing="extraTight">
                    <Text emphasis="bold" italic>External Wooden Product Finishing - Hardwax Oil Only</Text>
                    <Text>
                        For your door to perform to an acceptable level in line with the guarantee, you must follow this finishing guidance. You must only use high quality external treatments such as Impranol Oils for external doors – this product comes highly recommended and is our tried, tested and preferred product. You will need to use at least 3-4 coats for maximum protection. Oak requires specific UVA protection as well as waterproofing, this is essential to the finishing process. Using a product which does not have UVA protection will gradually discolour your door over time. All of our doors must be treated before they are hung including all oak accessories and all sides of the door and the glazing must be fitted as well.
                    </Text>
                </BlockStack>
            </TextBlock>
            <TextBlock size="medium">
                <BlockStack spacing="extraTight">
                    <Text emphasis="bold" italic>Application - Prep The Door and Use The Right Products</Text>
                    <Text>
                        Oak is an oily timber, and it helps adhesion of finishes to remove excess oils. Using a white lint free rag, clean the surface down with thinners or a suitable degreaser such as methylated spirits. Do NOT use white spirits as this will leave a residue. We would recommend that you lay the door flat when treating to ensure the full absorption of the product into the grain. Note – your oak product may need a light sand before the second coat is applied.
                    </Text>
                </BlockStack>
            </TextBlock>
            <TextBlock size="medium">
                <BlockStack spacing="extraTight">
                    <Text emphasis="bold" italic>Fitting - External Frame and 3 Hinges</Text>
                    <Text>
                        We would recommend that you use a hardwood external frame and that this is also treated with the appropriate external treatment and that your goods are fitted with the appropriate hardware including a weather bar. You will need to use at least 3 x 75mm high quality butt hinges when installing your external door. Also remember that acids in oak will react with mild steel screws and cause dark staining in the immediate vicinity, therefore you should always use stainless steel or brass screws. Oak is a very dense timber so it is necessary to pilot drill all holes to prevent the timber splitting or the screws snapping.
                    </Text>
                </BlockStack>
            </TextBlock>
            <TextBlock size="medium">
                <BlockStack spacing="extraTight">
                    <Text emphasis="bold" italic>Location - Porch or Canopy</Text>
                    <Text>
                        Our external doors should always be kept dry and protected by either a canopy or porch that adheres to the below measurements on the door diagram. Your door should also be kept away from direct sunlight.
                    </Text>
                </BlockStack>
            </TextBlock>
            <TextBlock>
                <Image source="https://cdn.shopify.com/s/files/1/0894/7223/7912/files/disclaimer_img.jpg?v=1752065009" />
            </TextBlock>
            <TextBlock size="medium">
                <BlockStack spacing="extraTight">
                    <Text emphasis="bold" italic>Maintenance - Regular Checks and Treatment</Text>
                    <Text>
                        Remember to check your doors regularly after the door has been hung. The beauty of solid oak is that it can be sanded and retreated if ever scratched. We recommend that you clean and re-treat the doors every 6 months for the first 2 years and then every 2/3 years thereafter.  This care means your solid oak doors will always stay looking their best and can always be protected against moisture.
                    </Text>
                </BlockStack>
            </TextBlock>
            <Text emphasis="bold">
                By reading and accepting to the information in this document, you are aware that if the above guidance is not followed,  you will void the door’s warranty.
            </Text>
        </BlockStack>
    )
}

export default ProductDisclaimer;
