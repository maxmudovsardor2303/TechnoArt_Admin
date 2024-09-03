import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { SignUp, SignIn, Mainlayout,Products,Settings,Brands,Categories, BrandCategories, Adds, Stock } from "@pages";
const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="main/*" element={<Mainlayout />}>
          <Route path="products" element={<Products />} />
          <Route path="settings" element={<Settings />} />
          <Route path="brands" element={<Brands />} />
          <Route path="categories" element={<Categories />} />
          <Route path="brandcategories" element={<BrandCategories />} />
          <Route path="adds" element={<Adds/>} /> 
          <Route path="stock" element={<Stock />} />


        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default Index;
