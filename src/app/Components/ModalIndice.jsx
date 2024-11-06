import React, { useState } from 'react';
import { GoListUnordered } from 'react-icons/go';

function ModalIndice() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleModal} className=" flex  hover:text-gray-800 text-gray-500 text-sm">
       Indice <GoListUnordered size={20}/>
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-gray-100 rounded-lg p-4 shadow-lg w-100">
            <div className="bg-gray-300 rounded-t-lg py-1 text-center font-semibold text-gray-700">
              Cumplimiento
            </div>
            <table className="min-w-full text-left mt-2">
              <thead>
                <tr>
                  <th className="px-2 py-1 text-gray-600">Cumplimiento</th>
                  <th className="px-2 py-1 text-gray-600">% de comisión</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 py-1 text-gray-600">Menor a 80%</td>
                  <td className="px-2 py-1 text-gray-800 text-center">0%</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-gray-600">Entre 80% y 90%</td>
                  <td className="px-2 py-1 text-gray-800 text-center">80%</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-gray-600">Entre 90% y 90.9%</td>
                  <td className="px-2 py-1 text-gray-800 text-center">90%</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-gray-600">100 o mayor</td>
                  <td className="px-2 py-1 text-gray-800 text-center">100%</td>
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

export default ModalIndice;
