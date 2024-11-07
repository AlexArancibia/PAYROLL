import { NavLink } from "@remix-run/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "/logo.png";
import logo2 from "/logo2.png";
import base from "/base.png";
import HamburguerMenu from "./HamburguerMenu";

const navItems = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#software", label: "Software" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#soluciones", label: "Soluciones" },
];

function Navbar() {
  const [active, setActive] = useState<number | null>(null);
  const [showLogo1, setShowLogo1] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo1((prev) => !prev);
    }, 4000); // Alterna entre logos cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <div className="container-section py-4 lg:py-2 bg-background fixed top-0 left-0 w-full z-20 shadow-lg shadow-primary/5">
      <div className="content-section flex justify-between items-center gap-0">
        
        <div className="flex   items-center  overflow-y-hidden justify-start w-[400px] lg:w-1/4 relative">
        <NavLink to="/" className="">
  <img src={base} alt="Logo Base" className="w-[170px] h-auto" />

  {/* Logo principal */}
  <motion.img
    src={logo}
    alt="Logo Alternativo"
    className="w-[90px] h-auto absolute left-[80px] bottom-[5px]"
    animate={{
      y: [0, 15, -15, 0,0],        // Comienza desde más abajo, sube al centro y luego hacia arriba
      opacity: [1, 0, 0, 1 , 1],        // Aparece y desaparece
    }}
    transition={{
      duration: 6,                    // Aumentar la duración a 4 segundos
      ease: "easeInOut",
      times: [0, 0.25, 0.5, 0.75, 1],   // Tiempos específicos para un efecto más fluido
      repeat: Infinity,
      repeatDelay: 0.5,               // Breve pausa antes de reiniciar
    }}
  />
  <motion.img
    src={logo2}
    alt="Logo Alternativo"
    className="w-[90px] h-auto absolute left-[80px] bottom-[5px]"
    animate={{
      y: [-15, 0, 0, 15,-15],        // Comienza desde más abajo, sube al centro y luego hacia arriba
      opacity: [0, 1, 1 , 0, 0],        // Aparece y desaparece
    }}
    transition={{
      duration: 6,                    // Aumentar la duración a 4 segundos
      ease: "easeInOut",
      times: [0, 0.25, 0.5, 0.75, 1],   // Tiempos específicos para un efecto más fluido
      repeat: Infinity,
      repeatDelay: 0.5,               // Breve pausa antes de reiniciar
    }}
  />
 
</NavLink>

          
        </div>

        <div className="hidden lg:flex w-1/2 justify-center">
          <nav className="flex items-center justify-center p-2 text-primary font-normal">
            {navItems.map((item, index) => (
              <li key={index} className="list-none">
                <NavLink
                  to={item.href}
                  className={`flex items-center justify-center px-3 py-2 w-[150px] box-border transition-all duration-500 border-b-2 ${
                    active === index
                      ? "bg-primary text-white rounded-xl"
                      : "text-primary border-transparent hover:border-primary"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </nav>
        </div>

        <div className="w-2/3 lg:w-1/4 lg:flex justify-end items-center hidden">
          <NavLink
            to="https://wa.me/+51987654321"
            className="bg-primary text-white px-5 py-2 rounded-xl font-normal hover:text-white transition-all duration-500 ease-in-out flex items-center"
          >
            Contáctanos
          </NavLink>
        </div>

        <div className="flex w-full justify-end items-center lg:hidden">
          <HamburguerMenu navItems={navItems} />
        </div>
      </div>
    </div>  
  );
}

export default Navbar;
