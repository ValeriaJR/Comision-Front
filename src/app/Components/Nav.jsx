'use client';
import Image from "next/image";
import Ejecutivo from "./Ejecutivo";
import Lider from "./Lider";

export default function Nav() {
    return (
        <nav className="bg-gray-300 bg-opacity-70 shadow-lg">
            <div className=" pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Image 
                            className="pl-3 p-1" 
                            src="/images/logo.png" 
                            alt="Descripción de la imagen" 
                            width={150}
                            height={50}   
                        />
                    </div>
                    <div>
                        <Ejecutivo />
                        <Lider/>
                        <button  className="px-4 py-2">Cerrar Sesión</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
