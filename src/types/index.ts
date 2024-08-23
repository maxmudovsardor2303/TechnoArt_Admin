interface SignIn {
  phone_number: string | number;
  password: string | number;
}

export interface Auth {
  sign_in: (data: SignIn) => unknown;
}
