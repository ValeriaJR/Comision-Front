'use client'
import ButtonLider from "@/app/Components/ButtonLider";
import LiderIndTabla from "@/app/Components/LiderIndTabla";
import LiderTabla from "@/app/Components/LiderTabla";
import ModalIndice from "@/app/Components/ModalIndice";
import Nav from "@/app/Components/Nav";
import Rol from "@/app/Components/Rol";
import { useState } from 'react';

export default function IndividualLider(){
    
    return (
        <div className="h-screen">
            <Nav />
            <div>
                <Rol />
                <div className="m-auto w-2/4 my-10 justify-evenly flex">
                    <ButtonLider />
                    <div className="flex p-2.5 justify-center align-center font-bold relative group m-auto rounded-xl w-64 bg-gray-300 bg-opacity-30 border border-gray-400 overflow-hidden before:absolute before:w-12 before:h-12 before:content['']">
                        <ModalIndice/></div>
                </div>
                <LiderIndTabla/>
            </div>
            
        </div>
    );
}
