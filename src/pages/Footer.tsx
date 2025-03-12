import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const itens = [
        "✴ VÍDEOS DE EVENTOS",
        "✴ VÍDEOS COMERCIAL",
        "✴ VÍDEOS DE CASAMENTOS",
        "✴ VÍDEOS DE PAISAGEM",
        "✴ VÍDEOS DE MARCA",
        "✴ ENSAIOS DE CASAIS",
    ];

    const links = [
        { title: "HOME", subLinks: ["ABOUT ME", "MY WORKS", "TESTIMONIALS", "MENVOL"] },
        { title: "CLIENTS", subLinks: ["KLOVESTO", "NUKEWAY", "CLOVEN'S"] },
        { title: "PORTFOLIO", subLinks: ["EVENTS", "PORTRAIT", "BRANDING", "COMMERCIALE"] },
        { title: "SERVICES", subLinks: ["PORTRAITS", "EVENTS", "COMMERCIAL"] },
    ];

    return (
        <>
            <div className="flex w-full justify-center bg-[#0E0E10] gap-2 md:gap-6 h-[50px] items-center text-center text-xs md:text-base px-2">
                {itens.map((item, index) => (
                    <div key={index} className="flex">
                        {item}
                    </div>
                ))}
            </div>
            <div className="text-white py-12 px-8 md:px-16">
                <div className="max-full mx-auto flex">
                    <div className="w-1/2 mb-12">
                        <p className="text-base md: text-[#797C86]">UM LAR MAIS SIGNIFICATIVO PARA A FOTOGRAFIA</p>
                        <h1 className="text-4xl md:text-5xl mt-4">VAMOS TRABALHAR JUNTOS</h1>
                    </div>
                    <div className="w-1/2 grid grid-cols-1 md:grid-cols-4 gap-8">
                        {links.map((link, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-lg mb-4">{link.title}</h3>
                                <ul>
                                    {link.subLinks.map((subLink, subIndex) => (
                                        <li key={subIndex} className="text-[#797C86] mb-2">
                                            {subLink}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div>
                        <p>Termos e condições</p>
                        <p>Polítca de privacidade</p>
                    </div>

                    <div className='flex flex-wrap gap-4 justify-center items-center border border-[#1C1C21] rounded-4xl p-4'>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <button className='w-12 h-12 bg-[#1C1C21] rounded-full flex items-center justify-center'>
                                <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl hover:text-blue-800 transition-colors" />
                            </button>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <button className='w-12 h-12 bg-[#1C1C21] rounded-full flex items-center justify-center'>
                                <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-pink-800 transition-colors" />
                            </button>
                        </a>
                        <a href="https://wa.me/55959957277" target="_blank" rel="noopener noreferrer">
                            <button className='w-12 h-12 bg-[#1C1C21] rounded-full flex items-center justify-center'>
                                <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl hover:text-green-800 transition-colors" />
                            </button>
                        </a>
                    </div>
                    <p>© 2024 Israel Cedraz. Todos os direitos reservados.</p>
                </div>
            </div>
        </>
    );
}