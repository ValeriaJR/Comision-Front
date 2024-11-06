import React, { useState } from 'react';
import { GoListUnordered } from 'react-icons/go';

function ModalParticipacion() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleModal} className=" flex m-2 hover:text-gray-800 text-gray-500 text-sm">
       % Participación
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-gray-100 rounded-lg p-4 shadow-lg w-100 w-2/12">
            <div className="bg-gray-300 rounded-t-lg py-1 text-center font-semibold text-gray-700">
              Participación
            </div>
            <table className="min-w-full text-left mt-2">
              <thead>
                <tr>
                  <th className="px-2 py-1 text-gray-600">Tipo</th>
                  <th className="px-2 py-1 text-gray-600">Peso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 py-1 text-gray-600">Individual</td>
                  <td className="px-2 py-1 text-gray-800 text-center">0.6</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-gray-600">Grupal</td>
                  <td className="px-2 py-1 text-gray-800 text-center">0.4</td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={toggleModal}
              className="mt-4 bg-gray-500 text-white px-4 py-1 rounded-lg w-full"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalParticipacion;
