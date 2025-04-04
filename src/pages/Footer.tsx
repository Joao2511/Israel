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
            {/* Marquee Section */}
            <div className="w-full overflow-hidden bg-[#0E0E10] py-4 mt-12">
                <div className="animate-marquee whitespace-nowrap">
                    {[...itens, ...itens, ...itens, ...itens].map((item, index) => (
                        <span
                            key={index}
                            className="inline-block text-[#D6D0FB] text-xs md:text-base px-4 md:px-6"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer Content */}
            <div className="text-white py-12 px-8 md:px-16 bg-[#0E0E10]">
                <div className="max-w-full mx-auto flex flex-col md:flex-row gap-8">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 mb-12">
                        <p className="text-base text-[#797C86]">UM LAR MAIS SIGNIFICATIVO PARA A FOTOGRAFIA</p>
                        <h1 className="text-4xl md:text-5xl mt-4">VAMOS TRABALHAR JUNTOS</h1>
                    </div>

                    {/* Right Section: Links */}
                    <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

                {/* Bottom Section: Terms, Social Icons, and Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-6">
                    {/* Terms and Privacy */}
                    <div className="text-center md:text-left">
                        <p className="text-[#797C86]">Termos e condições</p>
                        <p className="text-[#797C86]">Política de privacidade</p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <button className="w-12 h-12 bg-[#1C1C21] rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl" />
                            </button>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <button className="w-12 h-12 bg-[#1C1C21] rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                                <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
                            </button>
                        </a>
                        <a href="https://wa.me/55959957277" target="_blank" rel="noopener noreferrer">
                            <button className="w-12 h-12 bg-[#1C1C21] rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                                <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl" />
                            </button>
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-[#797C86] text-center md:text-left">
                        © 2024 Israel Cedraz. <br />Todos os direitos reservados.
                    </p>
                </div>
            </div>

            {/* Marquee Animation Styles */}
            <style>
                {`
                    @keyframes marquee {
                        0% {
                            transform: translateX(0%);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    .animate-marquee {
                        display: inline-block;
                        animation: marquee 60s linear infinite;
                    }
                `}
            </style>
        </>
    );
}