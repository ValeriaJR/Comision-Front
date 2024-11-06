import React, { useState } from 'react';
import { BsCardChecklist } from "react-icons/bs";
import ButtonSwitch from './ButtonSwitch';
import ComisionEjecMes from './EjecMesComision';
import FactEjecMes from './EjecMesFactura';


function ModalEjecMes() {
  const [activeTable, setActiveTable] = useState('Comisión');
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleModal} className=" flex text-black hover:text-gray-800">
       Mes <BsCardChecklist size={20}/>
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-gray-50 w-9/12 rounded-lg p-4 shadow-lg">
            <div>
              <ButtonSwitch onToggle={setActiveTable}/>
            </div>
            {activeTable === 'Comisión' ? <ComisionEjecMes/> : <FactEjecMes/>}
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

export default ModalEjecMes;
