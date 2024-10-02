// ========= GLOBAL ========
interface IParams {
  limit: number;
  page: number;
  search?: string;
}
// ========= AUTH ==========

interface SignIn {
  phone_number: string | undefined;
  password: string | undefined;
}

export interface Auth {
  sign_in: (data: SignIn) => any;
}

// ==========  Sign-Up =======
 interface SignUp{
  first_name: string
  last_name: string
  phone_number: string | number 
  email: string | number 
  password: string | number 

}
export interface Auth {
  sign_up: (data: SignUp) => any;
}

// ==========  CATEGORY =======
export interface Category {
  get: (params: IParams) => any;
  create: (name: any | number) => Promise<any>;
  update: (id: string | number, data: any) => Promise<any>;
  delete: (id: string | number) => Promise<any>;
}

// ==========  SUBCATEGORY =======
export interface subCategory {
  get: (params: IParams) => any;
  create_subcategory: (name: any | number) => Promise<any>;
  update_subcategory: (id: string | number, data: any) => Promise<any>;
  delete_subcategory: (id: string | number) => Promise<any>;
  get_subcategory: (id: string | number) => Promise<any>;
}

// ==========  BRAND =======
export interface Brand {
  get : (params: IParams) => any;
  create: (name: any | number) => Promise<any>;
  update: (id: string | number, data: any) => Promise<any>;
  delete: (id: string | number) => Promise<any>;
}

// ==========  BRAND-CATEGORY =======
export interface BrandCategory {
  get : (params: IParams) => any;
  create: (name: any | number) => Promise<any>;
  update: (id: string | number, data: any) => Promise<any>;
  delete: (id: string | number) => Promise<any>;
}

// ==========  Adds =======

export interface Adds {
  get : (params: IParams) => any;
  create: (name: any | number) => Promise<any>;
  update: (id: string | number, data: any) => Promise<any>;
  delete: (id: string | number) => Promise<any>;
}