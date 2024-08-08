"use client";
import Optionsbar from "@/components/ui/Optionsbar";
import { SuggestionListComponent } from "@/components/customers/SuggestionInput";
import { CustomerServices } from "@/services/api/customer.api.services";
import { Customer } from "@/interfaces/customer.interface";
import {
  faArrowAltCircleUp,
  faFileText,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { CustomerUtilServices } from "@/services/utils/customer.utils.services";
import PaginatedCustomerCards from "@/components/customers/PaginatedCustomerCards";
import CustomerCreationForm from "@/components/customers/CustomerCreationForm";

const options = [
  { icon: faHome, optionName: "Home" },
  { icon: faPlus, optionName: "Creacion de Clientes" },
  { icon: faArrowAltCircleUp, optionName: "Actualizacion de Clientes" },
  { icon: faFileText, optionName: "Informes de Clientes" },
];
export default function Clientes() {
  const [option, setOption] = useState("Home");
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [userInput, setUserInput] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [key, setKey] = useState<number>(0);
  useEffect(() => {
    async function loadCustomers() {
      const customerService = new CustomerServices();
      const customerData = await customerService.getAllCustomers();
      if (customerData) setCustomers(customerData);
    }
    if (customers.length === 0) {
      loadCustomers();
    }
  }, [customers]);
  function searchCustomer() {
    const customerServices = new CustomerUtilServices();
    const reOrderCustomers = customerServices.reorderCustomersArray(
      customers,
      userInput
    );
    setCustomers(reOrderCustomers);
    setKey(key + 1);
  }
  return (
    <div className="flex flex-col gap-4">
      <Optionsbar option={option} setOption={setOption} options={options} />
      <h1 className="text-xl font-semibold">Modulo de Clientes</h1>
      {option === "Home" && (
        <>
          <div className="w-full bg-gray-100 h-20 md:h-40 flex items-center justify-center p-4">
            <SuggestionListComponent
              userInput={userInput}
              setUserInput={setUserInput}
              suggestionList={customers}
            />
            <button
              className="bg-cyan-900 h-12 w-24 text-white rounded-r-full md:w-52"
              onClick={searchCustomer}
            >
              Buscar
            </button>
          </div>
          <div className="flex flex-col gap-2" key={key}>
            <div className="flex gap-2">
              <label>Mostrar</label>
              <select
                defaultValue={10}
                onChange={(e) => {
                  setItemsPerPage(parseInt(e.target.value));
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
              <label>clientes por página</label>
            </div>
            <PaginatedCustomerCards
              customers={customers}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </>
      )}
      {option === "Creacion de Clientes" && <CustomerCreationForm />}
      {option === "Actualizacion de Clientes" && (
        <h2>Actualizacion de Clientes</h2>
      )}
    </div>
  );
}
