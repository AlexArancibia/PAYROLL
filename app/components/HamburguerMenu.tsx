import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from '@remix-run/react';
import { FaWhatsapp } from 'react-icons/fa'; // Asegúrate de instalar react-icons
import { IoClose, IoMenu } from 'react-icons/io5'; // Iconos de cierre "X" y de menú hamburguesa

// Definición del tipo MenuItem sin 'submenu'
interface MenuItem {
  href: string;
  label: string;
}

interface HamburgerMenuProps {
  navItems: MenuItem[];
}

function HamburguerMenu({ navItems }: HamburgerMenuProps) {
  const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      {/* Botón de apertura del menú */}
      <button
        onClick={() => setActive((prev) => !prev)}
        className="relative z-50 h-10 w-10 rounded-full text-primary"
      >
        <IoMenu className="text-3xl" />
      </button>

      {/* Menú Desplegable */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex pt-16 bg-black bg-opacity-10 justify-center p-8"
            onClick={() => setActive(false)} // Cerrar menú al hacer clic en el área exterior
          >
            {/* Contenedor del Menú */}
            <div
              className="relative flex items-center justify-center h-[90%] w-[90%] bg-primary p-8 rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer clic en el contenido del menú
            >
              {/* Botón de cierre "X" dentro del menú */}
              <button
                onClick={() => setActive(false)}
                className="absolute top-4 right-4 text-white text-3xl"
              >
                <IoClose />
              </button>

              <ul className="m-auto space-y-10 text-center">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `text-zinc-100 transition-colors text-xl hover:${isActive ? 'text-secondary font-normal' : ''}`
                      }
                      onClick={() => setActive(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}

                {/* Enlace a WhatsApp */}
                <li>
                  <a
                    href="https://wa.me/51994037392" // Reemplaza con tu número de WhatsApp
                    className="flex items-center justify-center text-zinc-100 text-xl border border-zinc-100 rounded-xl px-6 py-4 transition-colors hover:bg-secondary/10"
                  >
                    <FaWhatsapp className="mr-2" /> {/* Icono de WhatsApp */}
                    994037392
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

export default HamburguerMenu;
