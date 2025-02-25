import { useState } from "react";
import Logo from '../assets/Logo.png';

export default function Header() {
  const [active, setActive] = useState(null);

  const menuItems = ["Home", "Sobre", "Portfólio", "Serviços"];

  return (
    <header className="relative border-b border-[#1C1C21] text-white flex justify-between items-center h-[100px]">
      <div className="flex flex-col justify-center h-full ml-12">
        <img src={Logo} className="w-[50px]" alt="Logo" />
      </div>

      <nav className="absolute left-1/2 transform -translate-x-1/2 flex border-t border-l border-r border-[#1C1C21] rounded-t-xl self-end h-[65px] overflow-hidden w-full max-w-[500px]">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`
              flex-1 text-center px-6 py-2 transition-colors duration-200 
              ${active === index ? "bg-[#131316]" : "hover:bg-[#131316]"} 
              ${index !== 0 && "border-l border-[#1C1C21]"} 
              ${index === 0 && active === index ? "rounded-tl-xl" : ""} 
              ${index === menuItems.length - 1 && active === index ? "rounded-tr-xl" : ""}
            `}
            onClick={() => setActive(index)}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="mr-6">
        <button className="bg-[#1C1C21] px-4 py-2 rounded-md">Entre em contato</button>
      </div>
    </header>
  );
}
