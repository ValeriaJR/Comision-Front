import React from 'react';
import ModalCalidad from './ModalCalidad';
import ModalDetallada from './ModalDetallada';

function DetaFacturacionTabla({dataCampaña}) {
  
    return (
        <div className="flex justify-center h-full overflow-hidden">
        <div className="overflow-x-auto w-4/5 my-4">
          <table className="min-w-full border-collapse shadow-lg">
            <thead>
                <tr className="bg-gray-500 bg-opacity-20 px-2 py-2 text-left ">
                <th className="px-2">Campaña</th>
                <th className="">Ejecutivo</th>
                <th className="">Meta FTE</th>
                <th className="">Facturación</th>
                <th className="">Especificaciones</th>
                <th className="flex mx-2 ">
                    <div className='text-center align-center m-1'>
                    <ModalCalidad />
                    </div>
                </th>
                </tr>
            </thead>
            <tbody>
            {dataCampaña?.map((item, index) => (<tr key={index} className="bg-gray-300 bg-opacity-20 px-2 py-2 text-left ">
                <td  className="px-2 py-2 text-black">{item.nombre}</td>
                <td className="py-2 text-black">-</td>
                <td className="py-2 text-black">-</td>
                <td className="py-2 text-black">-</td>
                <td className="py-2 text-black"><ModalDetallada /></td>
                <td className="py-2 text-black">-</td>
                </tr>))}
            </tbody>
            </table>
        </div>
        </div>
    );
}

export default DetaFacturacionTabla;