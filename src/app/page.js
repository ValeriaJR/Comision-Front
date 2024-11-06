import Login from "./Components/Login";
import Image from 'next/image';

export default function Inicio() {
  return (
   <>
   <div className="">
   <Image className="pl-3 pt-3" 
        src='/images/logo.png' 
        alt="Descripción de la imagen" 
        width={200}
        height={150}
      />
      
   </div>
   <Login/>
   </>
  );
}
