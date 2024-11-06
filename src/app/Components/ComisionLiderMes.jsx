import React from 'react';
function ComisionLiderMes() {
  return (
    <div className="flex justify-center">
    <div className="overflow-x-auto w-4/5 my-6">
      <table className="min-w-full border-collapse shadow-lg">
        <thead>
          <tr className="bg-gray-500 bg-opacity-20 px-2 py-2 text-left ">
            <th className="px-2">Lider</th>
            <th className="">Cump factura</th>
            <th className="">Cump Calidad</th>
            <th className="">Cump PYE</th>
            <th className="">Cump FTE</th>
            <th className="">Cump Final</th>
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

export default ComisionLiderMes;
