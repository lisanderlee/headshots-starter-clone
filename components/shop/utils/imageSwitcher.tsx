/* @ts-ignore */
function updatePreviewUrlsAndSetProduct(product, NewMockups, setProduct) {
  console.log(product)
  console.log(NewMockups)
  const updatedProducts = { ...product };

  /* @ts-ignore */
  updatedProducts[0].variants.forEach(productVariant => {
      /* @ts-ignore */
    productVariant.files.forEach(productFile => {
        if (productFile.type === 'preview') {
            /* @ts-ignore */
            const matchingMockup = NewMockups.result.mockups.find(mockup => mockup.variant_ids.includes(productVariant.variant_id));
            if (matchingMockup) {
                productFile.preview_url = matchingMockup.mockup_url;
            }
        }
    });
});
setProduct(updatedProducts);

}

export default updatePreviewUrlsAndSetProduct;