import React, { useState } from 'react';
import { BsCardChecklist } from "react-icons/bs";
import ButtonDetModal from './ButtonDetModal';
import MetasDet from './MetasDet';
import ResultadosDet from './ResultadosDet';
import CumplimientosDet from './CumplimientoDet';


function ModalDetallada() {
  const [activeTable, setActiveTable] = useState('Metas');
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleModal} className="text-black hover:text-gray-800">
      <BsCardChecklist />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-gray-50 w-9/12 rounded-lg p-4 shadow-lg">
            <div>
              <ButtonDetModal onToggle={setActiveTable}/>
            </div>
            {activeTable === 'Metas' ? <MetasDet/> : activeTable === 'Resultados' ? <ResultadosDet/> : <CumplimientosDet/>}
            <button
              onClick={toggleModal}
              className="mt-4 w-20 m-auto items-center flex bg-gray-400 text-white px-4 py-1 rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalDetallada;
