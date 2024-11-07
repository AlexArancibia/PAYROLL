import { useEffect, useState } from "react";
import logo from '/logo4.png'; // Ruta del logo
import welcomeImage from '/Img-banner.jpg'; // Ruta de la imagen de bienvenida
import { FaWhatsapp } from 'react-icons/fa'; // Importa el ícono de WhatsApp

const WelcomeBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsVisible(true);
      localStorage.setItem("hasVisited", "true"); // Marcar como visitado
    }
  }, []);

  const handleClose = (): void => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[9999]">
      <div className="flex flex-col h-full w-full lg:flex-row">
        {/* Columna de la imagen */}
        <div className="relative flex items-center justify-center w-full h-full lg:w-1/2">
          <img
            src={welcomeImage}
            alt="Bienvenida"
            className="h-full w-full object-cover"
          />
          {/* Botón de cerrar en la imagen para pantallas pequeñas */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-5xl lg:hidden" // Ocultar en pantallas grandes
          >
            &times; {/* Icono de cierre */}
          </button>
        </div>

        {/* Columna de contenido */}
        <div className="flex flex-col items-center justify-center w-full h-full lg:w-1/2 p-8 bg-white relative">
          {/* Botón de cerrar en el div de contenido para pantallas grandes */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-5xl lg:block hidden" // Mostrar en pantallas grandes
          >
            &times; {/* Icono de cierre */}
          </button>

          <img src={logo} alt="Logo" className="mb-6 w-[400px]" /> {/* Ajusta el tamaño del logo según sea necesario */}
          <p className="text-2xl font-bold text-center mb-4">
            Simplifica tu vida y ahorra tiempo.
          </p>
          <p className="text-gray-700 text-center mb-6">
            ¡Descubre nuestro servicio de nóminas y libérate de tareas administrativas!
          </p>
          <a
            href="https://wa.me/tuNumeroDeWhatsApp" // Reemplaza con tu número de WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-blue-700 text-lg"
          >
            <FaWhatsapp className="mr-2 text-xl" /> {/* Ícono de WhatsApp */}
            Saber más
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
