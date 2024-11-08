import React, { useEffect, useState } from 'react';
import ModalIndice from './ModalIndice';

function DetaComisionTabla() {
  const [estadistica, setEstadisticas] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/comision/estadisticasLider/");
        const data = await response.json();
        setEstadisticas(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <div className="flex justify-center h-full overflow-hidden">
      <div className="overflow-x-auto w-4/5 my-4">
        <table className="min-w-full border-collapse shadow-lg">
          <thead>
            <tr className="bg-gray-500 bg-opacity-20 px-2 py-2 text-left">
              <th className="px-2">Comisión base</th>
              <th>Comisión total</th>
              <th>Facturación total</th>
              <th>Facturación meta</th>
              <th>Cumplimiento</th>
              <th className="mx-2"><ModalIndice/></th>
            </tr>
          </thead>
          <tbody>
            {estadistica.map((item, index) => (
              <tr key={index} className="bg-gray-300 bg-opacity-20 px-2 py-2 text-left">
                <td className="px-2 py-2 text-black">-</td>
                <td className="px-2 py-2 text-black">{item.comision}</td>
                <td className="px-2 py-2 text-black">{item.resultado_factura}</td>
                <td className="px-2 py-2 text-black">{item.meta_factura}</td>
                <td className="px-2 py-2 text-black">-</td>
                {/* <td className="px-2 py-2 text-black">{item.resultados[0].na_cumplimiento}</td> */}
                <td className="px-2 py-2 text-black">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetaComisionTabla;
