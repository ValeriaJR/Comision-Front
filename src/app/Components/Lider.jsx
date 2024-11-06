import { useState } from 'react';

export default function Lider() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2"
      >
        Lider
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-30 bg-gray-100 rounded-md shadow-lg ring-opacity-5">
          <div className="py-1">
            <a
              href="/Pages/Detallada"
              className="block px-4 py-2 text-gray-500 hover:bg-gray-200 border-b border-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Vista detallada
            </a>
            <a
              href="/Pages/MesLider"
              className="block px-4 py-2 text-gray-500 hover:bg-gray-200 border-b border-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Mes
            </a>
            <a
              href="/Pages/IndividualLider"
              className="block px-4 py-2 text-gray-500 hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Lider
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
