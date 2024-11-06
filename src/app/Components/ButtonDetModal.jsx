import { useState } from 'react';

export default function ButtonDetModal({ onToggle }) {
    const [activeButton, setActiveButton] = useState('Metas');

    const handleClick = (button) => {
        setActiveButton(button);
        onToggle(button); // Llamada a la función para actualizar el estado en el componente padre
    };

    return (
        <div className="flex w-72 m-auto rounded-full bg-gray-300 p-1">
            <button
                className={`flex-1 text-center p-2 rounded-full text-base ${
                    activeButton === 'Metas' ? 'bg-white text-black shadow' : 'text-gray-500'
                }`}
                onClick={() => handleClick('Metas')}
            >
                Metas
            </button>
            <button
                className={`flex-1 text-center p-2 rounded-full text-base ${
                    activeButton === 'Resultados' ? 'bg-white text-black shadow' : 'text-gray-500'
                }`}
                onClick={() => handleClick('Resultados')}
            >
                Resultados
            </button>
            <button
                className={`flex-1 text-center p-2 rounded-full text-base ${
                    activeButton === 'Cumplimiento' ? 'bg-white text-black shadow' : 'text-gray-500'
                }`}
                onClick={() => handleClick('Cumplimiento')}
            >
                Cumplimiento
            </button>
        </div>
    );
}
