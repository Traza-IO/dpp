"use client";

import Image from "next/image";
import imgBussiness from "../../assets/logo-mestiza.svg";

const Materials = () => {
  return (
    <div className="flex items-start justify-between max-w-[1024px] mx-auto mt-4 max-md:flex-col px-4">
      <div className="max-md:text-center max-md:mb-4 w-full">
        <h4 className="text-slate-400 font-bold text-[18px]">Materiales</h4>
        <ul>
          <li className="text-[14px]">100% algodón tangüis</li>
          <li className="text-[14px]">100% tintes ecológicos</li>
        </ul>
      </div>
      <div className="max-md:text-center max-md:mb-4 w-full">
        <h4 className="text-slate-400 font-bold text-[18px] uppercase">
          hooded sweatshirt
        </h4>
        <ul>
          <li className="text-[14px]">Trazable</li>
        </ul>
      </div>
      <div className="max-md:text-center max-md:mb-4 w-full">
        <h4 className="text-slate-400 font-bold text-[18px]">Empresa</h4>
        <figure>
          <Image
            src={imgBussiness}
            width={100}
            alt={imgBussiness}
            className="block mx-auto"
          />
        </figure>
      </div>
    </div>
  );
};

export default Materials;
