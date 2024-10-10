import React from "react";
import Image from "next/image";

const Header = () => {

return (

<div className="relative flex flex-col justify-center items-center w-full h-96 bg-slate-400 overflow-hidden">

<Image
  src="/images/barbershop-4484300_1280.jpg"
  alt="Imagem de fundo"
  layout="fill"
  objectFit="cover"
  quality={100}
  className="z-0"
/>

<div className="z-10 text-center text-white">
  <h1 className="text-9xl font-bold">BARBEARIA</h1>
  <p className="text-1xl">Cuidando do seu Estilo </p>
</div>

</div>

)

}
export default Header;