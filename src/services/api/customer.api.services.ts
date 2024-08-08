import { Customer } from "@/interfaces/customer.interface";
import axios from "axios";

export class CustomerServices {
  protected API_URL: string | undefined;

  constructor() {
    this.API_URL = process.env.NEXT_PUBLIC_API_URL;
  }
  async getAllCustomers(): Promise<Customer[] | undefined> {
    try {
      const customers = await axios.get<Customer[]>(
        `${this.API_URL}/customers`
      );
      return customers.data;
    } catch (error) {
      return undefined;
    }
  }

  async createNewCustomer(formData: Customer): Promise<Customer | undefined> {
    try {
      const customer = await axios.post(`${this.API_URL}/customer`, formData);
      return customer.data;
    } catch (error) {
      return undefined;
    }
  }
}
