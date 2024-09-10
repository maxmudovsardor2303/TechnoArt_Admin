import https from "./config";
import { Category } from "@types";

const category: Category = {
    get: params => {
        const { search = "", limit, page } = params;

        // URLni dinamik yaratish
        const url = `https://texnoshop.ilyosbekdev.uz/category/search${search ? `=${search}` : ""}`;

        return https.get(url, {
            params: { limit, page },
        });
    },
    create: function (): Promise<any> {
        throw new Error("Function not implemented.");
    }
};

export default category;