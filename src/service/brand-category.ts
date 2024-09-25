import https from "./config";
import { BrandCategory as Brand,  } from "@types";
const brand: Brand = {
  get: (params: any) => https.get("/brand-category/search", { params }),
  create: (data: any) => https.post("/brand-category/create", data),
  update: (id: any, data: any) => https.patch(`/brand-category/update/${id}`, data),
  delete: (id: any) => https.delete(`/brand-category/delete/${id}`),
};
export default brand;