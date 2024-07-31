import { Customer } from "@/interfaces/customer.interface";

export class CustomerUtilServices {
  reorderCustomersArray(customers: Customer[], identifier: string): Customer[] {
    const [name, idNumber] = identifier.split(" - ").map((part) => part.trim());
    const index = customers.findIndex(
      (customer) => customer.name === name && customer.idNumber === idNumber
    );
    if (index > -1) {
      const [customer] = customers.splice(index, 1);
      customers.unshift(customer);
    }

    return customers;
  }
}
