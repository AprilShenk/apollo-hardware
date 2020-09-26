import api from "./apiConfig";

export const getProducts = async () => {
  try {
    const res = await api.get("/products");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (id) => {
  try {
    const res = await api.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (product) => {
  try {
    const res = await api.post(`/products`, product);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateProdduct = async (id, product) => {
  try {
    const res = await api.put(`/products/${id}`, product);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await api.delete(`/products/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
