import { IAccount } from "./interfaces/Account";
import { ICustomer } from "./interfaces/Customer";

export class Customer implements ICustomer {
  id: number;
  name: string;
  address: string;
  phone: string;
  accounts: IAccount[] = [];

  constructor(id: number, name: string, address: string, phone: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
  }
  
  addAccount(account: IAccount): void {
    this.accounts.push(account);
  }
}