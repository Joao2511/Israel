import { useState } from "react";
import { motion } from "framer-motion"; // Importe o Framer Motion
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Importe os ícones de menu e fechar
import Logo from '../assets/Logo.png';

export default function Header() {
  const [active, setActive] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para controlar o menu mobile

  const menuItems = ["Home", "Sobre", "Portfólio", "Serviços"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Alterna o estado do menu mobile
  };

  return (
    <motion.header
      className="relative border-b border-[#1C1C21] text-white flex flex-col md:flex-row justify-between items-center h-auto md:h-[100px] py-4 md:py-0"
      initial={{ opacity: 0, y: -20 }} // Animação sutil de fade-in e deslocamento vertical
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.div
        className="flex justify-between items-center w-full md:w-auto px-4 md:px-0"
        initial={{ opacity: 0, x: -20 }} // Animação para o logo
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
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
      </motion.div>

      {/* Menu de navegação */}
      <motion.nav
        className={`
    ${isMobileMenuOpen ? "block" : "hidden"} 
    md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 
    flex-col md:flex-row border-t border-l border-r border-[#1C1C21] 
    rounded-t-xl self-end h-auto md:h-[65px] overflow-hidden w-full md:w-auto 
    max-w-[500px] bg-transparent
  `}
        initial={{ opacity: 0, y: -20 }} // Animação para o menu de navegação
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`
        w-full text-left px-6 py-3 text-white hover:text-[#4A2CED] transition-colors duration-200
        md:text-center md:px-4 md:py-2 md:hover:bg-[#131316]
        ${active === index ? "text-[#4A2CED]" : ""}
        ${index !== 0 && "border-l border-[#1C1C21]"} 
        ${index === 0 ? "rounded-tl-xl" : "rounded-none"} // Apenas o primeiro item tem border-radius esquerdo
        ${index === menuItems.length - 1 ? "rounded-tr-xl" : "rounded-none"} // Apenas o último item tem border-radius direito
      `}
            onClick={() => {
              setActive(index);
              setIsMobileMenuOpen(false); // Fecha o menu mobile ao clicar em um item
            }}
          >
            {item}
          </button>
        ))}
      </motion.nav>

      {/* Botão "Entre em contato" */}
      <motion.div
        className="hidden md:block mr-6"
        initial={{ opacity: 0, x: 20 }} // Animação para o botão "Entre em contato"
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <button className="bg-[#1C1C21] px-4 py-2 rounded-md">Entre em contato</button>
      </motion.div>

      {/* Botão "Entre em contato" (mobile) */}
      {isMobileMenuOpen && (
        <motion.div
          className="w-full px-4 py-2 md:hidden"
          initial={{ opacity: 0, y: 20 }} // Animação para o botão "Entre em contato" no mobile
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button className="w-full bg-[#1C1C21] px-4 py-2 rounded-md">
            Entre em contato
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}




