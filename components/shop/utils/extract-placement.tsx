function ExtractUniqueCombinations(data: any) {
  const uniqueCombinations = {
    product_variants: [],
    placements: [],
    product_options: [],
  };
  /* @ts-ignore */
  data.forEach((item) => {
    const { catalog_variant_id, placements, product_options } = item;

    // Add catalog_variant_id to product_variants if not already present
    /* @ts-ignore */
    if (!uniqueCombinations.product_variants.includes(catalog_variant_id)) {
      /* @ts-ignore */
      uniqueCombinations.product_variants.push(catalog_variant_id);
    }

    // Add placements to placements array if not already present
    /* @ts-ignore */
    placements.forEach((placement) => {
      if (
        !uniqueCombinations.placements.find(
          (p) => JSON.stringify(p) === JSON.stringify(placement)
        )
      ) {
        /* @ts-ignore */
        uniqueCombinations.placements.push(placement);
      }
    });

    // Add product_options to product_options array if not already present
    /* @ts-ignore */
    product_options.forEach((option) => {
      if (
        !uniqueCombinations.product_options.find(
          (p) => JSON.stringify(p) === JSON.stringify(option)
        )
      ) {
        /* @ts-ignore */
        uniqueCombinations.product_options.push(option);
      }
    });
  });

  return uniqueCombinations;
}
/* @ts-ignore */
export default ExtractUniqueCombinations;
