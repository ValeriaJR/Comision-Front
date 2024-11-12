import { useState, useEffect } from "react";

export default function ButtonMes({ onChange }) {
  const [mes, setMes] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {  // Renombramos la función interna para evitar conflicto de nombres
      try {
        const response = await fetch("http://127.0.0.1:8000/comision/estadisticasLider/");  // Llamada fetch a la URL
        const data = await response.json(); // Parseamos la respuesta a JSON
        setMes(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos(); // Llamamos a la función async dentro del useEffect
  }, []);
  return <>
    <div
      className="relative group m-auto rounded-xl w-64 bg-gray-300 bg-opacity-30 border border-gray-400 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] "
    >
      <svg
        y="0"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        width="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        height="100"
        className="w-8 h-8 absolute right-0 -rotate-45 stroke-gray-500 top-1.5 group-hover:rotate-0 duration-300"
      >
        <path
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
          className="svg-stroke-primary"
        ></path>
      </svg>
      <select onClick={onChange}
        defaultValue="Mes" className="appearance-none relative bg-transparent ring-0 outline-none text-gray-500 text-sm font-bold rounded-lg block w-full p-2.5" >
        <option disabled value="Mes">Mes</option>
        {[...new Set(mes.map(item => item.mes))].map((mesUnico, index) => (
          <option key={index}>{mesUnico}</option>))}
      </select>
    </div>
  </>
}