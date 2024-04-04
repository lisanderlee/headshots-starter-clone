const MockProcess = async ({ productId }: any) => {
    getProductVariants(productId);
};
/* @ts-ignore */
const getProductVariants = async (productId) => {
    const response = await fetch(`/api/getProductVariants/${productId}`);
//   const data = await response.json();
//   console.log(data)

};


export default MockProcess;
