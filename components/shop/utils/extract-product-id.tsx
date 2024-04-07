function ExtractProductId(data:any) {
  let productId = '';

  // Iterate over the data array
        /* @ts-ignore */
  data.forEach(product => {
    // Check if variants array exists and has items
    if (product.variants && product.variants.length > 0) {
      // Iterate over variants array
            /* @ts-ignore */
      product.variants.forEach(variant => {
        // Extract product_id value from the first variant found
        if (!productId && variant.product && variant.product.product_id) {
          productId = variant.product.product_id;
        }
      });
    }
  });

  return productId;
}


/* @ts-ignore */
export default ExtractProductId;