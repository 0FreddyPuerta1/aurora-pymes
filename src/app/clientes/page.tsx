"use client";
import CustomerCard from "@/components/ui/CustomerCard";
import Optionsbar from "@/components/ui/Optionsbar";
import { SuggestionListComponent } from "@/components/customers/SuggestionInput";
import { CustomerServices } from "@/services/api/customer.service";
import { Customer } from "@/types/customer.interface";
import {
  faArrowAltCircleUp,
  faFileText,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { CustomerUtilServices } from "@/services/utils/customer.utils.services";

const options = [
  { icon: faPlus, optionName: "Creacion de Clientes" },
  { icon: faArrowAltCircleUp, optionName: "Actualizacion de Clientes" },
  { icon: faFileText, optionName: "Informes de Clientes" },
];
export default function Clientes() {
  const [option, setOption] = useState("");
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [userInput, setUserInput] = useState("");
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
      <div className="flex flex-col gap-2  md:grid md:grid-cols-5" key={key}>
        {customers.map((customer) => (
          <CustomerCard customer={customer} key={customer.id} />
        ))}
      </div>
    </div>
  );
}
