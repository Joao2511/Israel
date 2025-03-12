import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from '../assets/Logo.png';

export default function Header() {
  const [active, setActive] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para controlar o menu mobile

  const menuItems = ["Home", "Sobre", "Portfólio", "Serviços"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Alterna o estado do menu mobile
  };

  return (
    <header className="relative border-b border-[#1C1C21] text-white flex flex-col md:flex-row justify-between items-center h-auto md:h-[100px] py-4 md:py-0">
      {/* Logo */}
      <div className="flex justify-between items-center w-full md:w-auto px-4 md:px-0">
        <div className="flex flex-col justify-center h-full ml-0 md:ml-12">
          <img src={Logo} className="w-[50px]" alt="Logo" />
        </div>

        {/* Botão do menu hambúrguer (mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Menu de navegação */}
      <nav
        className={`
          ${isMobileMenuOpen ? "block" : "hidden"} 
          md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 
          flex-col md:flex-row border-t border-l border-r border-[#1C1C21] 
          rounded-t-xl self-end h-auto md:h-[65px] overflow-hidden w-full md:w-auto 
          max-w-[500px] bg-[#131316] md:bg-transparent
        `}
      >
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
            onClick={() => {
              setActive(index);
              setIsMobileMenuOpen(false); // Fecha o menu mobile ao clicar em um item
            }}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Botão "Entre em contato" */}
      <div className="hidden md:block mr-6">
        <button className="bg-[#1C1C21] px-4 py-2 rounded-md">Entre em contato</button>
      </div>

      {/* Botão "Entre em contato" (mobile) */}
      {isMobileMenuOpen && (
        <div className="w-full px-4 py-2 md:hidden">
          <button className="w-full bg-[#1C1C21] px-4 py-2 rounded-md">
            Entre em contato
          </button>
        </div>
      )}
    </header>
  );
}