import Dato from "@/app/Components/Dato";
import Image from "next/image";
export default function Carga(){
    return<>
<div >
    <Image className="pl-3 pt-3" 
        src='/images/logo.png' 
        alt="Descripción de la imagen" 
        width={200}
        height={150}
      />
    <div className="flex flex-col items-center justify-center m-8">
    <h1 className="text-3xl font-bold mb-6 text-center ">Bienvenido, Nelson</h1>
    <h2 className="text-xs text-gray-500 font-bold mb-6 text-center">Por favor, carga la base de datos</h2>
        <Dato/>
    </div>
</div>
    </>
}