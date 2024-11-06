'use client'
import ButtonLider from "@/app/Components/ButtonLider";
import ButtonMes from "@/app/Components/ButtonMes";
import ButtonSwitch from "@/app/Components/ButtonSwitch";
import DetaComisionTabla from "@/app/Components/DetaComisionTabla";
import DetaFacturacionTabla from "@/app/Components/DetaFacturacionTabla";
import Nav from "@/app/Components/Nav";
import Rol from "@/app/Components/Rol";
import { useState } from 'react';

export default function Detallada(){
    const [activeTable, setActiveTable] = useState('Comisión');

    return (
        <div className="h-screen">
            <Nav />
            <div>
                <Rol />
                <div className="m-auto w-2/4 my-10 justify-evenly flex">
                    <ButtonLider />
                    <ButtonMes />
                </div>
                <ButtonSwitch onToggle={setActiveTable} />
            </div>
            {activeTable === 'Comisión' ? <DetaComisionTabla /> : <DetaFacturacionTabla />}
        </div>
    );
}
