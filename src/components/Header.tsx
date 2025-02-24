import Logo from '../assets/Logo.png'; // Substitua pelo caminho correto da sua logo

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full h-16 bg-red-800 border-b border-gray-500 px-4">
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo da empresa" className="h-12" />
      </div>

      {/* Navegação */}
      <nav className="flex-grow flex justify-center h-[50px] self-end">
        <ul className="flex gap-6 text-white border-t-3 border-l-3 border-r-3 border-[#1C1C21] rounded-t-lg b px-8">
          <li className='bg-[#131316] px-4 flex items-center'><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#sobre" className="hover:text-gray-300">Sobre</a></li>
          <li><a href="#portfolio" className="hover:text-gray-300">Portfólio</a></li>
          <li><a href="#servicos" className="hover:text-gray-300">Serviços</a></li>
        </ul>
      </nav>

      {/* Botão de Contato */}
      <div className="bg-[#1C1C21] rounded-md px-4 py-2">
        <a href="#contato" className="text-white hover:text-gray-300">Entre em contato</a>
      </div>
    </header>
  );
};

export default Header;