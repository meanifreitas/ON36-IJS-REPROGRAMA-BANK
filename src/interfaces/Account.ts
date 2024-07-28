export interface IAccount {
  id: number;
  number: string;
  balance: number;
  type: 'checking' | 'savings';
  deposit(value: number): void;
  withdraw(value: number): boolean;
  transfer(value: number, destiny: IAccount): boolean;
}