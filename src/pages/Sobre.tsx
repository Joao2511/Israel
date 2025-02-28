import Isra from '../assets/Isra.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Sobre = () => {
    return (
        <div className='px-6 md:px-16'>
            <div className="w-full border-b border-[#1C1C21] pb-12 mt-12 md:mt-42">
                <div className="flex flex-col md:flex-row items-start">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl md:text-5xl">
                            <span className="text-base">SOBRE</span>
                        </h1>
                        <h1 className="text-4xl md:text-6xl">EU SOU ISRAEL CEDRAZ</h1>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                            Saiba mais
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row items-start mt-24'>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img src={Isra} className='w-[95%] object-cover' alt="Israel Cedraz" />
                </div>
                <div className='w-full md:w-1/2 mt-8 md:mt-0 flex self-center'>
                    <div className='border rounded-2xl border-[#1C1C21] h-full w-full'>
                        <div className='border-b border-[#1C1C21] pb-4 mb-4 p-8 h-1/2'>
                            <h1 className='text-[#CACACE] text-3xl mb-4'>✴ Introdução</h1>
                            <p className='text-[#AFB0B6] font-normal'>
                                My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.
                            </p>
                        </div>
                        <div className='p-8 flex-1 flex flex-col h-1/2'>
                            <h1 className='text-[#CACACE] text-3xl mb-8'>✴ Contato</h1>
                            <div className='flex flex-col md:flex-row gap-4 w-full mb-12'>
                                <div className='w-full md:w-1/2'>
                                    <h2 className='text-lg text-[#E4E4E6] mb-4'>Email</h2>
                                    <p className='text-xl text-[#AFB0B6]'>israelcedraz@gmail.com</p>
                                </div>
                                <div className='w-full md:w-1/2'>
                                    <h2 className='text-lg text-[#E4E4E6] mb-4'>Número de telefone</h2>
                                    <p className='text-xl text-[#AFB0B6]'>+55 (61)99599-7277</p>
                                </div>
                            </div>
                            <div className='mt-4 flex flex-col md:flex-row items-center'>
                                <div className='flex flex-wrap gap-4 justify-center items-center border border-[#1C1C21] rounded-4xl p-4 w-full md:w-1/3'>
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
                                <div className='flex flex-col md:flex-row gap-4 mt-4 w-full md:w-2/3 justify-center'>
                                    <button className='bg-[#1C1C21] text-white px-10 py-4 rounded hover:bg-gray-900 transition w-full md:w-auto text-lg rounded-2xl'>
                                        Vamos trabalhar
                                    </button>
                                    <button className='bg-[#1C1C21] text-white px-10 py-4 rounded hover:bg-green-600 transition w-full md:w-auto text-lg rounded-2xl'>
                                        Baixar currículo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sobre;
