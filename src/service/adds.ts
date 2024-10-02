import https from "./config";
import { Adds } from "@types";

const adds: Adds = {
    get: (params) => https.get("/adds/search", { params }),  
    create: (data) => https.post("/adds/create", data),
    update: (id, data) => https.patch(`/adds/update/${id}`, data),
    delete: (id) => https.delete(`/adds/delete/${id}`),
};

export default adds;
