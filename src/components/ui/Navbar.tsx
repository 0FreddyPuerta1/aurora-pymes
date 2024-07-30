"use client";
import {
  faBars,
  faPerson,
  faTruckField,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";
const items = [
  {
    itemName: "Inicio",
    path: "homepage",
    icon: faHome,
  },
  {
    itemName: "Clientes",
    path: "clientes",
    icon: faPerson,
  },
  {
    itemName: "Proveedores",
    path: "proveedores",
    icon: faTruckField,
  },
];
type NavbarProps = {
  currentItem: string;
};

export default function Navbar({ currentItem }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  function openMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="flex flex-col items-center h-12 bg-cyan-600 ">
      <FontAwesomeIcon
        icon={faBars}
        className="w-8 p-4 md:hidden center"
        color="white"
        onClick={openMenu}
      />
      <div
        className={` ${
          isOpen
            ? "bg-cyan-600  h-96 flex flex-col border-b z-50 w-96 items-center"
            : "md:flex md:justify-center"
        }`}
      >
        <ul className="md:flex md:justify-center md:gap-4 md:px-4">
          {items.map((item) => (
            <Link href={item.path} key={item.path}>
              <li
                className={`flex text-white p-2 gap-2 ${
                  currentItem === item.path ? "md:border-b" : ""
                }`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="w-6 h-6"
                  color="white"
                />
                {item.itemName}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
