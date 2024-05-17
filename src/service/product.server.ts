import apiService from './apiService';

export const getProductList = async () => {
  try {
    const { data, total } = await apiService.get('/product/list');
    return { data, total };
  } catch (error) {
    return {
      data: null,
      total: 0,
    };
  }
};

export const getProductDetail = async (id: string) => {
  try {
    const { data } = await apiService.get(`/product/${id}`);
    return data;
  } catch (error) {
    return null;
  }
};
