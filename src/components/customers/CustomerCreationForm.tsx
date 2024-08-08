"use client";

import { Customer } from "@/interfaces/customer.interface";
import { useState } from "react";
import { CustomerServices } from "@/services/api/customer.api.services";

const customerServices = new CustomerServices();

const initialFormData: Customer = {
  name: "",
  idType: "CC",
  idNumber: "",
  address: "",
  phone: "",
  email: "",
  contactPerson: "",
  postalCode: "",
  city: "",
  country: "",
  loyaltyPoints: 0,
};
export default function CustomerCreationForm() {
  const [formData, setFormData] = useState<Customer>(initialFormData);
  function onInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  async function onSubmitForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const customer = await customerServices.createNewCustomer(formData);
    if (customer) {
    }
  }
  return (
    <>
      <div className="flex flex-col bg-gray-100 p-1">
        <h2 className="text-l font-semibold">
          Formulario de Creacion de Clientes
        </h2>
        <p className="font-light text-sm">
          Complete el siguiente formulario para crear un nuevo cliente en el
          sistema.
        </p>
      </div>
      <form className="flex flex-col gap-4 md:grid md:grid-cols-3">
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="name">Nombre del Cliente:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-b w-full"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="idType">Tipo de Identificacion</label>
          <select
            name="idType"
            id="idType"
            className="border-b"
            onChange={(e) => onInputChange(e)}
          >
            <option value="CC">CC</option>
            <option value="NIT">NIT</option>
          </select>
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="idNumber">Numero de Identificacion</label>
          <input
            type="number"
            name="idNumber"
            id="idNumber"
            className="border-b w-full"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="address">Direccion</label>
          <input
            type="text"
            name="address"
            id="address"
            className="border-b w-full"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="phone">Telefono:</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="border-b w-full"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-b w-full"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="contactPerson">Contacto:</label>
          <input
            type="text"
            name="contactPerson"
            id="contactPerson"
            className="border-b w-full"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="postalCode">Codigo postal:</label>
          <input
            type="number"
            name="postalCode"
            id="postalCode"
            className="border-b w-full"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="city">Ciudad</label>
          <input
            type="text"
            name="city"
            id="city"
            className="border-b w-full"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="country">Pais:</label>
          <input
            type="text"
            name="country"
            id="country"
            className="border-b w-full"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-500 h-10 md:col-span-3 md:mt-4"
          onClick={(e) => onSubmitForm(e)}
        >
          Crear Cliente
        </button>
      </form>
    </>
  );
}
