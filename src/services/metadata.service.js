import api from "../lib/axios";

export class MetadataService {
  getAll = async () => {
    const response = await api.get("/metadata/");
    return response.data.data;
  };
}
