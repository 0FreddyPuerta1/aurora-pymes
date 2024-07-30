import Navbar from "@/components/ui/Navbar";

export default function HomepageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentItem="clientes" />
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-100 text-center p-4 font-light">
        Developed with ♥ and code by Freddy Puerta
      </footer>
    </div>
  );
}
