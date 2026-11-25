export const getProductCategoryName = (product) =>
  product?.category?.name || product?.categoryName || "Uncategorized";

export const normalizeCategoryName = (name) =>
  String(name || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

export const isProductInCategory = (product, categoryName) => {
  const expected = normalizeCategoryName(categoryName);
  const categoryValues = [
    getProductCategoryName(product),
    product?.category?.description,
    product?.image,
  ];

  return categoryValues.some((value) =>
    normalizeCategoryName(value).includes(expected)
  );
};
