'use client'
import ButtonMes from "@/app/Components/ButtonMes";
import ButtonSwitch from "@/app/Components/ButtonSwitch";
import EjecIndComisionTabla from "@/app/Components/EjecIndComisionTabla";
import EjecIndFacturaTabla from "@/app/Components/EjecIndFacturaTabla";
import EjecMesComisionTabla from "@/app/Components/EjecMesComTabla";
import EjecMesFacturaTabla from "@/app/Components/EjecMesFacturaTabla";
import ModalIndice from "@/app/Components/ModalIndice";
import ModalParticipacion from "@/app/Components/ModalParticipacion";
import Nav from "@/app/Components/Nav";
import Rol from "@/app/Components/Rol";
import { fetchData } from "@/services/axiosConfig";
import { useEffect, useState } from 'react';

export default function EjecutivoMes(){
    const [activeTable, setActiveTable] = useState('Comisión');

    return (
        <div className="h-screen">
            <Nav />
            <div>
                <Rol />
                <div className="m-auto w-2/4 justify-evenly flex">
                    <ButtonMes/>
                    <div className="flex p-2.5 justify-center align-center font-bold relative group m-8 rounded-xl w-64 bg-gray-300 bg-opacity-30 border border-gray-400 overflow-hidden before:absolute before:w-12 before:h-12 before:content['']">
                        <ModalIndice/></div>
                        <div className="flex p-0.5 justify-center align-center font-bold relative group m-auto rounded-xl w-64 bg-gray-300 bg-opacity-30 border border-gray-400 overflow-hidden before:absolute before:w-12 before:h-12 before:content['']">
                            <ModalParticipacion/></div>
                </div>
                <ButtonSwitch onToggle={setActiveTable} />
            </div>
            {activeTable === 'Comisión' ? <EjecMesComisionTabla /> : <EjecMesFacturaTabla />}
        </div>
    );
}
