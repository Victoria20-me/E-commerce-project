import { api } from "./axios";

export const getAllProducts = async () => {
  const res = await api.get("/products");
  return res.data.products;
};

export const getSingleProduct = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};
export const getCategories = async () => {
  const res = await api.get(`/products/categories`);
  return res.data;
};
export const getProductsByCategory = async (category) => {
  try {
    // console.log("fetching category:", category);
    const res = await api.get(`/products/category/${category}`);
    // console.log("api response:", res.data);
    return res.data.products;
  } catch (error) {
    //      
    return [];
  }
};
