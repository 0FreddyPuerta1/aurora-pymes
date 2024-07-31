import { Customer } from "@/interfaces/customer.interface";
import axios from "axios";

export class CustomerServices {
  async getAllCustomers(): Promise<Customer[] | undefined> {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const customers = await axios.get<Customer[]>(`${API_URL}/customers`);
      return customers.data;
    } catch (error) {
      return undefined;
    }
  }
}
