"use client";
import loginPageImage from "../assets/images/loginPageImage.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col bg-white w-full h-screen p-4 items-center justify-center ">
      <div className="border p-4 bg-cyan-600  rounded flex flex-col gap-4 md:bg-white md:flex-row-reverse md:border-none md:items-center md:p-0 md:w-screen md:gap-0 ">
        <div className="flex flex-row gap-2 rounded bg-white w-full px-2 justify-center md:bg-white md:w-full">
          <Image
            src={loginPageImage}
            alt="image"
            className="rounded-full w-[100px] md:w-full"
          ></Image>
        </div>

        <div className="flex flex-col text-white gap-8 mt-6 md:bg-cyan-600 md:items-center md:h-screen md:w-full md:p-8 md:justify-center">
          <div className="flex-col gap-2 text-white text-center mt-6">
            <h1 className="text-3xl font-bold md:text-6xl">Aurora Pymes</h1>
            <h2 className="text-sm font-light md:text-xl">
              Todo tu negocio, en un solo lugar
            </h2>
          </div>
          <div className="flex flex-col md:w-96">
            <label htmlFor="">E-mail:</label>
            <input type="text" className="w-full border-b bg-transparent " />
          </div>
          <div className="flex flex-col md:w-96">
            <label htmlFor="">Contraseña:</label>
            <input type="password" className="w-full border-b bg-transparent" />
          </div>
          <button className="bg-white text-cyan-600 font-bold rounded h-10 md:w-96">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
}
