import React, { useState } from 'react';
import FormComponent from './FormComponent'; // Importa el formulario

interface ModalWrapperProps {
  label: string; // Propiedad para el texto del botón
  variation?: 'default' | 'blue'; // Propiedad para el tipo de botón
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ label, variation = 'default' }) => {
  const [showModal, setShowModal] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const openModal = () => {
    setShowModal(true);
    setTimeout(() => setFadeIn(true), 0); // Asegura que la animación de entrada se inicie inmediatamente
  };

  const closeModal = () => {
    setFadeIn(false);
    setTimeout(() => setShowModal(false), 300); // Espera a que la animación termine
  };

  // Función para cerrar el modal al hacer clic fuera del contenido
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className='w-full lg:w-fit'>
      {/* Botón para abrir el modal */}
      <button
        className={`w-full lg:w-fit shadow-md transition-all duration-500 ease-in-out px-5 py-3 rounded-xl font-normal 
          ${variation === 'blue' ? 'bg-primary text-white hover:bg-blue-700' : 'bg-background text-primary hover:text-white hover:bg-primary hover:shadow-primary/30'}`}
        onClick={openModal}
      >
        {label} {/* Usar la propiedad label para el texto del botón */}
      </button>

      {/* Modal */}
      {showModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
            fadeIn ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleOutsideClick} // Cerrar modal al hacer clic afuera
        >
          <div
            className={`relative bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 lg:max-w-6xl overflow-y-auto max-h-[90vh] transition-transform duration-300 ${
              fadeIn ? 'transform translate-y-0' : 'transform translate-y-4'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón para cerrar el modal */}
            <button
              className="absolute top-2 text-3xl right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Formulario dentro del modal */}
            <FormComponent onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalWrapper;
