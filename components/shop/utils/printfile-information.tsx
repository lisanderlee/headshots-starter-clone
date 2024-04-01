/* @ts-ignore */
export const PrintfileInformation = async (
  variantIds: number[],
  placement: string,
  data1: any
) => {
  /* @ts-ignore */
  const matchingPrintFiles = []; // Initialize matchingPrintFiles directly

  if (data1) {
    // Iterate through variant_printfiles array
    /* @ts-ignore */
    data1.variant_printfiles.forEach((variantPrintfile) => {
      // Check if the variant_id is included in the variantIds list
      if (variantIds.includes(variantPrintfile.variant_id)) {
        // Get the printfile_id for the specified placement
        const printfileId = variantPrintfile.placements[placement];

        const printfile = data1.printfiles.find(
          /* @ts-ignore */
          (file) => file.printfile_id === printfileId
        );
        // Add the printfile to the matchingPrintFiles array
        if (printfile) {
          matchingPrintFiles.push(printfile);
        }
      }
    });
  }
  // Check if matchingPrintFiles is not empty
  if (matchingPrintFiles.length > 0) {
    /* @ts-ignore */
    const allSame = matchingPrintFiles.every(
      (value, index, arr) => value === arr[0]
    );
    // Reduce array if all elements are the same
    /* @ts-ignore */
    const reducedArray = allSame ? [matchingPrintFiles[0]] : matchingPrintFiles;
    return reducedArray;
  } else {
    return []; // Return empty array if no matching printfiles found
  }
};

/* @ts-ignore */
export default PrintfileInformation;
