function calculateNewDimensions(
  /* @ts-ignore */
  imageWidth,
  /* @ts-ignore */
  imageHeight,
  /* @ts-ignore */
  targetWidth,
  /* @ts-ignore */
  targetHeight
) {
  
  let newWidth, newHeight;
  const aspectRatio = imageWidth / imageHeight;
  if (targetWidth && targetHeight == null) {
    newWidth = targetWidth;
    newHeight = newWidth / aspectRatio;
  } else if (targetHeight && targetWidth == null) {
    newHeight = targetHeight;
    newWidth = newHeight * aspectRatio;
  } else if (imageHeight > imageWidth) {
    newHeight = targetHeight;
    newWidth = newHeight * aspectRatio;
  } else if (imageHeight < imageWidth) {
    newWidth = targetHeight;
    newHeight = newWidth * aspectRatio;
  } else if (imageHeight = imageWidth) {
    newWidth = targetHeight;
    newHeight = newWidth * aspectRatio;
  }
  return { newWidth, newHeight };
}

/* @ts-ignore */
const ImageProcess = async (areaW, areaH, imageW, imageH) => {
   
  if (areaH > areaW) {
    const { newWidth, newHeight } = calculateNewDimensions(
      imageW,
      imageH,
      areaW,
      null
    );
    const spaceH = (areaH - newHeight) / 2;
    const spaceW = 0;
    console.log("HBIG",newWidth, newHeight, spaceH, spaceW)
    return { newWidth, newHeight, spaceH, spaceW };
  }
  if (areaH < areaW) {
    const { newWidth, newHeight } = calculateNewDimensions(
      imageW,
      imageH,
      null,
      areaH
    );
    const spaceW = (areaW - newWidth) / 2;
    const spaceH = 0;
    console.log("HSMALL",newWidth, newHeight, spaceH, spaceW)
    return { newWidth, newHeight, spaceH, spaceW };
  }

  if (areaH == areaW) {
 
    const { newWidth, newHeight } = calculateNewDimensions(
      imageW,
      imageH,
      areaH,
      areaH
    );
    const spaceW = (areaW - newWidth) / 2;
    const spaceH = (areaH - newHeight) / 2;
   
    return { newWidth, newHeight, spaceH, spaceW };
  }
};

export default ImageProcess;
