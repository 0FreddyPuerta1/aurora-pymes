import { useState } from "react";
import CustomerCard from "../ui/CustomerCard";
import { Customer } from "@/interfaces/customer.interface";

interface PaginatedCustomerCardsProps {
  customers: Customer[];
  itemsPerPage: number;
}

const PaginatedCustomerCards: React.FC<PaginatedCustomerCardsProps> = ({
  customers,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCustomer = currentPage * itemsPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - itemsPerPage;
  const currentCustomers = customers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );
  const totalPages = Math.ceil(customers.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="flex flex-col gap-2 md:grid md:grid-cols-5">
        {currentCustomers.map((customer) => (
          <CustomerCard customer={customer} key={customer.id} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-4 py-2 mx-1 border ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
            >
              {number}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default PaginatedCustomerCards;
