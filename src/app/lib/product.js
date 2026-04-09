import { api } from "./axios";

export const getAllProducts = async () => {
  const res = await api.get("/products");
  return res.data.products;
};

export const getSingleProduct = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};
