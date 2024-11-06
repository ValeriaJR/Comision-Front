import { useState } from 'react';

export default function ButtonSwitch({ onToggle }) {
    const [activeButton, setActiveButton] = useState('Comisión');

    const handleClick = (button) => {
        setActiveButton(button);
        onToggle(button); // Llamada a la función para actualizar el estado en el componente padre
    };

    return (
        <div className="flex w-72 m-auto rounded-full bg-gray-300 p-1">
            <button
                className={`flex-1 text-center p-2 rounded-full text-base ${
                    activeButton === 'Comisión' ? 'bg-white text-black shadow' : 'text-gray-500'
                }`}
                onClick={() => handleClick('Comisión')}
            >
                Comisión
            </button>
            <button
                className={`flex-1 text-center p-2 rounded-full text-base ${
                    activeButton === 'Facturación' ? 'bg-white text-black shadow' : 'text-gray-500'
                }`}
                onClick={() => handleClick('Facturación')}
            >
                Facturación
            </button>
        </div>
    );
}
