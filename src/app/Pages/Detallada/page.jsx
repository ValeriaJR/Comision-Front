'use client'
import ButtonLider from "@/app/Components/ButtonLider";
import ButtonMes from "@/app/Components/ButtonMes";
import ButtonSwitch from "@/app/Components/ButtonSwitch";
import DetaComisionTabla from "@/app/Components/DetaComisionTabla";
import DetaFacturacionTabla from "@/app/Components/DetaFacturacionTabla";
import Nav from "@/app/Components/Nav";
import Rol from "@/app/Components/Rol";
import { useEffect, useState } from 'react';

export default function Detallada() {
    const [activeTable, setActiveTable] = useState('Comisión');
    const [dataCampaña, setDataCampaña] = useState([]);
    const [dataFilteredCampaña, setDataFilteredCampaña] = useState([]);
    const [search, setSearch] = useState("");
    

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const response = await fetch("http://localhost:8000/comision/estadisticasLider/");
                const data = await response.json();
                setDataCampaña(data);
                setDataFilteredCampaña(data); // Guardar los datos sin filtrar
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        obtenerDatos();
    }, []);

    useEffect(() => {
    setDataFilteredCampaña(
        dataCampaña.filter(row =>
            (row.lider && row.lider.toString().toLowerCase().includes(search.toLowerCase())) ||
            (row.resultados.some(result => 
                result.campaña && result.campaña.toString().toLowerCase().includes(search.toLowerCase())
            )) ||
            (search === "Lider" && row)
        )
    );
}, [search, dataCampaña]);
    

    return (
        <div className="h-screen">
            <Nav />
            <div>
                <Rol />
                <div className="m-auto w-2/4 my-10 justify-evenly flex">
                    <ButtonLider onChange={e => setSearch(e.target.value)} />
                    <ButtonMes />
                </div>
                <ButtonSwitch onToggle={setActiveTable} />
            </div>
            {activeTable === 'Comisión' ? (
                <DetaComisionTabla />
            ) : (
                <DetaFacturacionTabla dataCampaña={dataFilteredCampaña} />
            )}
        </div>
    );
}
