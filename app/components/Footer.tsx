import React from 'react'; 
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import logo from '/logofooter.png'; // Importa tu logo
import { NavLink } from '@remix-run/react';

function Footer() {
  return (
    <>
      <footer className="bg-primary text-white py-12 lg:py-16 container-section">
        <div className="content-section flex flex-col lg:flex-row justify-between items-start">
          {/* Primera División: Logo y Redes Sociales */}
          <div className="flex flex-col items-start mb-4 lg:mb-0 w-full lg:w-1/5">
            <img src={logo} alt="Logo" className="mb-4" /> {/* Ajusta la altura del logo según sea necesario */}
            <div className="flex space-x-4 mt-2 mb-8">
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Segunda División: Horario de Atención */}
          <div className="flex flex-col items-start mb-8 lg:mb-0 w-full lg:w-1/5 gap-4">
            <h2 className="font-semibold text-lg lg:text-xl text-white">Horario de atención:</h2>
            <p className="text-md lg:text-base text-white">Lunes - Viernes</p>
            <p className="text-md lg:text-base text-white">9am - 6pm</p>
          </div>

          {/* Tercera División: Servicios */}
          <div className="flex flex-col items-start mb-8 lg:mb-0 w-full lg:w-1/5 gap-4">
  <NavLink to="#servicios" className="text-white hover:underline">
    <h2 className="font-semibold text-lg lg:text-xl text-white">Servicios</h2>
    </NavLink>
  <ul className="list-disc list-inside text-md lg:text-base text-white">
    <li>
      <NavLink to="#servicios" className="text-white hover:underline">
        · Proceso de nóminas
      </NavLink>
    </li>
    <li>
      <NavLink to="#servicios" className="text-white hover:underline">
        · Gestión del tiempo del personal
      </NavLink>
    </li>
    <li>
      <NavLink to="#servicios" className=" text-white hover:underline">
        · Gestión de datos maestros
      </NavLink>
    </li>
    <li>
      <NavLink to="#servicios" className="text-white hover:underline">
        · Reportes
      </NavLink>
    </li>
    <li>
      <NavLink to="#servicios" className="text-white hover:underline">
        · Administración de sistemas
      </NavLink>
    </li>
    <li>
      <NavLink to="#servicios" className="text-white hover:underline">
        · Self Service Human Resource Online
      </NavLink>
    </li>
  </ul>
</div>

          {/* Cuarta División: Links */}
          <div className="flex flex-col items-start mb-8 lg:mb-0 w-full lg:w-1/5 gap-4">
            <h2 className="font-semibold text-lg lg:text-xl text-white">Enlaces</h2>
            <ul className="list-none text-md lg:text-base ">
              <li><a href="#servicios" className=" text-white hover:text-gray-300 transition duration-300">Servicios</a></li>
              <li><a href="#software" className="text-white hover:text-gray-300 transition duration-300">Software</a></li>
              <li><a href="#nosotros" className="text-white hover:text-gray-300 transition duration-300">Acerca de</a></li>
              <li><a href="#faq" className="text-white hover:text-gray-300 transition duration-300">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Quinta División: Repetir enlaces */}
          <div className="flex flex-col items-start lg:mb-0 w-full lg:w-1/5 gap-4 ">
            <h2 className="font-semibold text-lg lg:text-xl text-white">Legales</h2>
            <p className="text-md lg:text-base ml-4 text-white">· Políticas de privacidad</p>
            <p className="text-md lg:text-base ml-4 text-white">· Términos y condiciones</p>
            <h2 className="font-semibold text-lg lg:text-xl text-white">Libro de reclamaciones</h2>
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a 
        href="https://wa.me/123456789" // Reemplaza con tu número de WhatsApp
        className="fixed bottom-6 right-6 z-[9999] bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={40} />
      </a>
    </>
  );
}

export default Footer;
