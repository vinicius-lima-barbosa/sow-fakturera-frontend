export const transformProduct = (product) => {
  return {
    articleNumber: product.articleNumber ? Number(product.articleNumber) : "",
    name: product.name || "",
    inPrice: product.inPrice ? Number(product.inPrice) : 0,
    price: product.price ? Number(product.price) : 0,
    unit: product.unit || "",
    inStock: product.inStock ? Number(product.inStock) : 0,
    description: product.description || "",
  };
};
