"use client";
import NavLink from "next/link";
import { usePathname } from "next/navigation";
// FaInfoCircle
import {
  FaInfoCircle,
  FaDashcube,
  FaInfinity,
  FaShareAlt,
  FaLeaf,
} from "react-icons/fa";
const Nav = () => {
  const pathname = usePathname();

  // Función para verificar si la ruta está activa
  const isActive = (href: string) => pathname === href;
  return (
    <nav className="fixed w-full bottom-0 left-0 right-0 bg-[#f5f5f4] shadow-lg">
      <ul className="flex w-full">
        <li
          className={`flex-1 ${
            isActive("/") ? "bg-[#797f75] text-white" : "text-[#5f6259]"
          }`}
        >
          <NavLink href="/" className="py-3 block text-center">
            <FaInfoCircle className="mx-auto" size={24} />
            <span className="text-[10px]">Producto</span>
          </NavLink>
        </li>
        <li
          className={`flex-1 ${
            isActive("/trazabilidad")
              ? "bg-[#797f75] text-white"
              : "text-[#5f6259]"
          }`}
        >
          <NavLink href="/trazabilidad" className="py-3 block text-center">
            <FaDashcube className="mx-auto" size={24} />
            <span className="text-[10px]">Trazabilidad</span>
          </NavLink>
        </li>
        <li
          className={`flex-1 ${
            isActive("/sostenibilidad")
              ? "bg-[#797f75] text-white"
              : "text-[#5f6259]"
          }`}
        >
          <NavLink href="/sostenibilidad" className="py-3 block text-center">
            <FaLeaf className="mx-auto" size={24} />
            <span className="text-[10px]">Sostenibilidad</span>
          </NavLink>
        </li>
        <li
          className={`flex-1 ${
            isActive("/blockchain")
              ? "bg-[#797f75] text-white"
              : "text-[#5f6259]"
          }`}
        >
          <NavLink href="/blockchain" className="py-3 block text-center">
            <FaInfinity className="mx-auto" size={24} />
            <span className="text-[10px]">Blockchain</span>
          </NavLink>
        </li>
        <li
          className={`flex-1 ${
            isActive("/compartir")
              ? "bg-[#797f75] text-white"
              : "text-[#5f6259]"
          }`}
        >
          <NavLink href="/compartir" className="py-3 block text-center">
            <FaShareAlt className="mx-auto" size={24} />
            <span className="text-[10px]">Compartir</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
