import api from "../lib/axios";

export class ProductsService {
  getAll = async () => {
    const response = await api.get("/products/");
    return response.data.data;
  };

  update = async (id, data) => {
    const response = await api.patch(`/products/${id}`, {
      ...data,
    });
    return response.data.data;
  };
}
