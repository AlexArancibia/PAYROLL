import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from '@remix-run/react';
import { FaWhatsapp } from 'react-icons/fa'; // Asegúrate de instalar react-icons

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
      {/* Botón Hamburguesa */}
      <motion.button
        onClick={() => setActive((pv) => !pv)}
        className={`relative z-50 h-10 w-10 rounded-full transition-colors ${active ? 'bg-transparent' : 'bg-transparent'}`}
        animate={active ? 'open' : 'closed'}
        initial={false}
      >
        <motion.span
          style={{
            left: '50%',
            top: '30%',
            x: '-50%',
            y: '-50%',
          }}
          className={`absolute h-1 w-8 ${active ? 'bg-white' : 'bg-primary'}`}
          variants={{
            open: {
              rotate: ['0deg', '0deg', '45deg'],
              top: ['30%', '50%', '50%'],
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              top: ['50%', '50%', '30%'],
            },
          }}
        />
        <motion.span
          style={{
            left: '50%',
            top: '50%',
            x: '-50%',
            y: '-50%',
          }}
          className={`absolute h-1 w-8 ${active ? 'bg-white' : 'bg-primary'}`}
          variants={{
            open: {
              rotate: ['0deg', '0deg', '-45deg'],
            },
            closed: {
              rotate: ['-45deg', '0deg', '0deg'],
            },
          }}
        />
        <motion.span
          style={{
            left: '68%',
            bottom: '30%',
            x: '-50%',
            y: '50%',
          }}
          className={`absolute h-1 w-4 ${active ? 'bg-white' : 'bg-primary'}`}
          variants={{
            open: {
              rotate: ['0deg', '0deg', '45deg'],
              left: '50%',
              bottom: ['30%', '50%', '50%'],
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              left: '68%',
              bottom: ['50%', '50%', '30%'],
            },
          }}
        />
      </motion.button>

      {/* Menú Desplegable */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 z-40 flex h-full w-full bg-primary p-8"
          >
            <ul className="m-auto space-y-8 text-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `text-zinc-100 transition-colors text-xl hover:${isActive ? 'text-secondary font-semibold' : ''}`
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
                  href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
                  className="flex items-center justify-center text-zinc-100 text-xl border border-zinc-100 rounded-xl px-6 py-4 transition-colors hover:bg-secondary/10"
                >
                  <FaWhatsapp className="mr-2" /> {/* Icono de WhatsApp */}
                  987654321
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

export default HamburguerMenu;
