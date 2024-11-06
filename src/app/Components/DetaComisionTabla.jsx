import React from 'react';
import { GoListUnordered } from "react-icons/go";
import ModalIndice from './ModalIndice';
function DetaComisionTabla() {
  return (
    <div className="flex justify-center">
    <div className="overflow-x-auto w-4/5 my-6">
      <table className="min-w-full border-collapse shadow-lg">
        <thead>
          <tr className="bg-gray-500 bg-opacity-20 px-2 py-2 text-left ">
            <th className="px-2">Comisión base</th>
            <th className="">Comisión total</th>
            <th className="">Facturación total</th>
            <th className="">Facturación meta</th>
            <th className="">Cumplimiento</th>
            <th className="mx-2 "><ModalIndice/></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-300 bg-opacity-20 px-2 py-2 text-left ">
            <td className="px-2 py-2 text-gray-700">-</td>
            <td className="px-2 py-2 text-gray-700">-</td>
            <td className="px-2 py-2 text-gray-700">-</td>
            <td className="px-2 py-2 text-gray-700">-</td>
            <td className="px-2 py-2 text-gray-700">-</td>
            <td className="px-2 py-2 text-gray-700">-</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default DetaComisionTabla;
