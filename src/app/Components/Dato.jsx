'use client'
import { useState } from "react";

export default function FileUploadButton() {
  const [buttonText, setButtonText] = useState("Selecciona tu archivo"); // Texto inicial del botón
  const [file, setFile] = useState(null); // Estado para almacenar el archivo seleccionado

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile); // Guardar el archivo seleccionado
      setButtonText("Cargar"); // Cambiar el texto del botón
    }
  };

  const handleUpload = () => {
    if (file) {
      // Aquí puedes implementar la lógica para cargar el archivo
      console.log("Cargando archivo:", file);
      // Restablecer después de la carga (opcional)
      setButtonText("Selecciona tu archivo");
      setFile(null);
    }
  };

  return (
    <div className="relative m-auto group rounded-xl w-64 bg-gray-300 bg-opacity-30 border border-gray-400 overflow-hidden cont">
      <div className="flex flex-col items-center p-4 header">
        <input
          type="file"
          id="file-upload"
          onChange={handleFileChange}
          style={{ display: 'none' }} // Ocultar input para personalizarlo
        />
        <label htmlFor="file-upload" className="cursor-pointer">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <path d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15" 
          stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </label>
        {/* Mostrar el nombre del archivo seleccionado */}
        {file && <p className="text-gray-600 text-sm mt-2 truncate">{file.name}</p>}
      </div>
      <button
        onClick={handleUpload}
        className="w-full p-2.5 bg-green-500 text-white font-bold text-sm rounded-b-lg"
      >
        {buttonText}
      </button>
    </div>
  );
}
