import React, { useState } from 'react';
import { GoListUnordered } from 'react-icons/go';

function ModalCalidad() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleModal} className=" text-center align-center justify-center flex hover:text-gray-800 text-gray-500 text-sm">
       Calidad <GoListUnordered size={20} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-gray-100 rounded-lg p-4 shadow-lg w-64">
            <div className="bg-gray-300 rounded-t-lg py-1 text-center font-semibold text-gray-700">
              Calidad
            </div>
            <table className="min-w-full text-left mt-2">
              <tbody>
                <tr>
                  <td className="px-2 py-1 text-gray-600">Calidad</td>
                  <td className="px-2 py-1 text-gray-800">90.5%</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-gray-600">PTE</td>
                  <td className="px-2 py-1 text-gray-800">75%</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-gray-600">FTE</td>
                  <td className="px-2 py-1 text-gray-800">95.7%</td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-gray-600">Cumplimiento final</td>
                  <td className="px-2 py-1 text-gray-800">87.9%</td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={toggleModal}
              className="mt-4 bg-gray-400 text-white px-4 py-1 rounded-lg w-full"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalCalidad;
