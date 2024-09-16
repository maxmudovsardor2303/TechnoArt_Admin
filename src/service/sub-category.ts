import https from "./config";
import { Category, subCategory } from "@types";
const subCategory: Category = {
  get: (params: { search: any; limit: any; page: any; }) => {
    const { search, limit, page } = params;
    const url = `/category/search${search ? `?search=${search}` : ""}`;
    return https.get(url, {
      params: { limit, page },
    });
  },
  create_subcategory: (data: any) => https.post("/category/create", data),
  update_subcategory: (id: any, data: any) => https.patch(`/category/update/${id}`, data),
  delete_subcategory: (id: any) => https.delete(`/category/delete/${id}`),
  get_subcategory: (id: any) => https.get(`/sub-category/search/${id}`, {}),
};
export default subCategory;

