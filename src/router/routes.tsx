import React from "react";
import {
    ProductOutlined,
    AppstoreOutlined,
    SettingOutlined,
    StockOutlined
  } from '@ant-design/icons';

interface Route{
    path: string;
    content: string;
    icon: React.ReactElement;
}

export const routes: Route[] = [
    {
        path: "products",
        content: "Products",
        icon: <ProductOutlined style={{fontSize: 20}} />
    },
    {
        path: "categories",
        content: "Categories",
        icon: <AppstoreOutlined style={{fontSize: 20}} />
    },
    {
        path: "brands",
        content: "Brands",
        icon: <AppstoreOutlined style={{fontSize: 18}} />
    },
    {
        path: "brandcategories",
        content: "BrandCategory",
        icon: <AppstoreOutlined style={{fontSize: 18}} />
    },
    {
        path: "adds",
        content: "Adds",
        icon: <AppstoreOutlined style={{fontSize: 18}} />
    },
    {
        path: "stock",
        content: "Stock",
        icon: <StockOutlined style={{fontSize: 18}} />
    },
    {
        path: "settings",
        content: "Settings",
        icon: <SettingOutlined style={{fontSize: 18}} />
    },
    
]