export interface IAddress {
  street: string;
  city: string;
  zipcode?: string;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
}

export interface IUser {
  id: number;
  name: string | undefined;
  address: IAddress | undefined;
  company: ICompany | undefined;
  username: string;
}
