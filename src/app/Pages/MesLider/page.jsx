'use client'

import ButtonMes from "@/app/Components/ButtonMes";
import LiderTabla from "@/app/Components/LiderTabla";
import ModalIndice from "@/app/Components/ModalIndice";
import Nav from "@/app/Components/Nav";
import Rol from "@/app/Components/Rol";
import { useEffect, useState } from "react";
export default function MesLider(){

const [dataMes, setDataMes] = useState([]);
const [dataFilteredMes, setDataFilteredMes] = useState([]);
const [search, setSearch] = useState("");
useEffect(() => {
    const obtenerDatos = async () => {
        try {
            const response = await fetch("http://localhost:8000/comision/estadisticasLider/");
            const data = await response.json();
            setDataMes(data);
            setDataFilteredMes(data); // Guardar los datos sin filtrar
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    obtenerDatos();
}, []);

useEffect(() => {
    setDataFilteredMes(
        dataMes.filter(row =>
            (row.lider && row.lider.toString().toLowerCase().includes(search.toLowerCase())) ||
            (row.mes && row.mes.toString().toLowerCase().includes(search.toLowerCase())) ||
            (search === "Mes" && row)
        )
    );
}, [search, dataMes]);
    
console.log(dataMes)

    return (
        <div className="h-screen">
            <Nav />
            <div>
                <Rol />
                <div className="m-auto w-2/4 my-10 justify-evenly flex">
                    <ButtonMes onChange={e => setSearch(e.target.value)}/>
                    <div className="flex p-2.5 justify-center align-center font-bold relative group m-auto rounded-xl w-64 bg-gray-300 bg-opacity-30 border border-gray-400 overflow-hidden before:absolute before:w-12 before:h-12 before:content['']">
                        <ModalIndice/></div>
                </div>
                <LiderTabla dataMes={dataFilteredMes}/>
            </div>
            
        </div>
    );
}
