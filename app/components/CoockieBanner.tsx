import { useEffect, useState } from "react";
import logo3 from '/logo3.png';
import vector1 from '/vector1.png';

const CookieModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if running in the browser
    if (typeof window !== 'undefined') {
      const cookieConsent = localStorage.getItem("cookieConsent");
      if (!cookieConsent) {
        setIsVisible(true);
        document.body.style.overflowY = 'hidden'; // Lock scroll
      }
    }
  }, []);

  const handleAcceptCookies = (): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("cookieConsent", "accepted");
      setIsVisible(false);
      document.body.style.overflowY = 'auto'; // Unlock scroll
    }
  };

  const handleConfigureCookies = (): void => {
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      document.body.style.overflowY = 'auto'; // Unlock scroll
    }
  };

  const handlePolicy = (): void => {
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      document.body.style.overflowY = 'auto'; // Unlock scroll
    }
  };

  const handleClose = (): void => {
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      document.body.style.overflowY = 'auto'; // Unlock scroll
    }
  };

  // Prevent the modal from closing when clicking inside it
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.stopPropagation();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative overflow-hidden"
        onClick={handleModalClick}
      >
        {/* Close button (X) */}
        <button
          onClick={handleClose}
          className="absolute text-4xl top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        {/* Background vector */}
        <img
          src={vector1}
          alt="Vector"
          className="absolute top-24 right-0 w-[100px] transform -translate-y-1/2 translate-x-1/4 z-0 pointer-events-none"
          style={{ mixBlendMode: 'multiply' }}
        />
        
        {/* Main content */}
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <img
              src={logo3}
              alt="Logo"
              className="mr-4 w-10 h-10"
            />
            <p className="text-2xl font-bold">Este sitio web utiliza cookies</p>
          </div>
          <p className="mb-6 text-gray-700">
          Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación, analizar el uso del sitio y personalizar el contenido. Puedes aceptar todas las cookies o configurar tus preferencias.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handlePolicy}
              className="px-4 py-2 border border-primary text-primary font-semibold rounded-md hover:bg-blue-100"
            >
              Rechazar
            </button>
             
            <button
              onClick={handleAcceptCookies}
              className="px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Aceptar todas las cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
