"use client";
import { Customer } from "@/types/customer.interface";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type CustomerCardProps = {
  customer: Customer;
};

export default function CustomerCard({ customer }: CustomerCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col w-full  max-w-96 ">
      <div className="text-white text-center rounded p-4 bg-cyan-500">
        <h1 className=" text-xl">{customer.name}</h1>
        <h2 className="text-sm">
          {customer.idType}: {customer.idNumber}
        </h2>
        <h2 className="text-sm">
          Puntos de Fidelidad: {customer.loyaltyPoints}
        </h2>
      </div>
      <div className="flex flex-col items-center mt-[-15px] ">
        {isOpen ? (
          <FontAwesomeIcon
            icon={faMinusCircle}
            color="Tomato"
            size="2xl"
            className="hover:cursor-pointer hover:scale-105"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faPlusCircle}
            color="Tomato"
            size="2xl"
            className="hover:cursor-pointer hover:scale-105"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        <div
          className={`relative inline-block  w-full mt-2 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="flex ">
            <table className="w-full shadow-md rounded-xl">
              <thead>
                <tr className="bg-cyan-500 text-white ">
                  <th className="py-3 px-4 text-center">Dato</th>
                  <th className="py-3 px-4 text-center">Valor</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-center">
                <tr className="border-b border-blue-gray-200">
                  <td className="py-3 px-4">Pais</td>
                  <td className="py-3 px-4">{customer.country}</td>
                </tr>
                <tr className="border-b border-blue-gray-200">
                  <td className="py-3 px-4">Ciudad</td>
                  <td className="py-3 px-4">{customer.city}</td>
                </tr>
                <tr className="border-b border-blue-gray-200">
                  <td className="py-3 px-4">Direccion</td>
                  <td className="py-3 px-4">{customer.address}</td>
                </tr>
                <tr className="border-b border-blue-gray-200">
                  <td className="py-3 px-4">Telefono</td>
                  <td className="py-3 px-4">{customer.phone}</td>
                </tr>
                <tr className="border-b border-blue-gray-200">
                  <td className="py-3 px-4">Contacto</td>
                  <td className="py-3 px-4">{customer.contactPerson}</td>
                </tr>
                <tr className="border-b border-blue-gray-200">
                  <td className="py-3 px-4">E-mail</td>
                  <td className="py-3 px-4">{customer.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-x-8 border-x-transparent border-b-8 border-b-cyan-500"></div>
        </div>
      </div>
    </div>
  );
}
