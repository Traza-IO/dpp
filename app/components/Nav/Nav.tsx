import NavLink from "next/link";
// FaInfoCircle
import {
  FaInfoCircle,
  FaDashcube,
  FaInfinity,
  FaShareAlt,
  FaLeaf,
} from "react-icons/fa";
const Nav = () => {
  return (
    <nav className="fixed w-full bottom-0 left-0 right-0 bg-[#f5f5f4] shadow-lg">
      <ul className="flex w-full">
        <li className="flex-1">
          <NavLink href="/" className="py-3 block text-center">
            <FaInfoCircle className="mx-auto" />
            <span className="text-[10px]">Producto</span>
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink href="/trazabilidad" className="py-3 block text-center">
            <FaDashcube className="mx-auto" />
            <span className="text-[10px]">Trazabilidad</span>
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink href="/" className="py-3 block text-center">
            <FaLeaf className="mx-auto" />
            <span className="text-[10px]">Sostenibilidad</span>
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink href="/" className="py-3 block text-center">
            <FaInfinity className="mx-auto" />
            <span className="text-[10px]">Blockchain</span>
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink href="/" className="py-3 block text-center">
            <FaShareAlt className="mx-auto" />
            <span className="text-[10px]">Compartir</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
