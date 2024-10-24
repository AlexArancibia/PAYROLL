import { NavLink } from "@remix-run/react";
import { useState } from "react";
import logo from "/logo.png";
import logo2 from "/logo.png";
import HamburguerMenu from "./HamburguerMenu";

// Configuración de los elementos de navegación.
const navItems = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#software", label: "Software" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#soluciones", label: "Soluciones" },
];

function Navbar() {
  // Estado para controlar el ítem activo del navbar
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActive(index); // Actualiza el ítem activo con su índice
  };

  return (
    <div className="container-section py-4 lg:py-2 bg-background fixed top-0 left-0 w-full z-50 shadow-lg shadow-primary/5">
      <div className="content-section flex justify-between items-center gap-0">
        
        {/* Columna del logo */}
        <div className="flex items-center justify-start w-2/3 lg:w-1/4">
          {/* Logo para pantallas grandes (lg en adelante) */}
          <NavLink to="/" className="hidden lg:block">
            <img src={logo} alt="Logo Villacer" className="w-[170px] h-auto" />
          </NavLink>
          
          {/* Logo como NavLink para pantallas pequeñas (menores a lg) */}
          <NavLink to="/" className="block lg:hidden">
            <img src={logo2} alt="Logo Villacer 2" className="w-[150px] h-auto" />
          </NavLink>
        </div>

        {/* Columna del menú de navegación */}
        <div className="hidden lg:flex w-1/2 justify-center">
          <nav className="flex items-center justify-center p-2 text-primary font-normal">
            {navItems.map((item, index) => (
              <li key={index} className="list-none">
                <NavLink
                  to={item.href}
                  className={`flex items-center justify-center px-6 pb-3 pt-3 w-[150px] box-border transition-all duration-500 border-b-2 ${
  active === index
    ? "bg-primary text-white"  // Fondo primario si está activo
    : "text-primary border-transparent hover:border-primary"  // Borde inferior en hover
}`}
                  onClick={() => handleClick(index)}  // Actualiza el estado al hacer clic
                >
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </nav>
        </div>

        {/* Columna del botón de contacto */}
        <div className="w-2/3 lg:w-1/4 lg:flex justify-end items-center hidden">
          <NavLink
            to="/#contactanos"
            className="bg-primary text-white px-5 py-2 rounded-xl font-normal hover:text-white transition-all duration-500 ease-in-out flex items-center"
          >
            Contáctanos
          </NavLink>
        </div>

        {/* Menú hamburguesa para dispositivos móviles */}
        <div className="flex w-full justify-end items-center lg:hidden">
          <HamburguerMenu navItems={navItems} />
        </div>
      </div>
    </div>  
  );
}

export default Navbar;
