import { IAccount } from "./Account";

export interface ICustomer {
  id: number;
  name: string;
  address: string;
  phone: string;
  accounts: IAccount[];
}