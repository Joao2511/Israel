import { motion } from 'framer-motion';
import Isra from '../assets/Isra.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehanceSquare, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Sobre = () => {
    return (
        <div className='px-6 md:px-16 lg:px-24'>
            {/* Seção superior */}
            <motion.div
                className="w-full border-b border-[#1C1C21] pb-12 mt-12 md:mt-24 lg:mt-32"
                initial={{ opacity: 0, y: 50 }} // Animação para a seção superior
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl md:text-5xl">
                            <span className="text-base">SOBRE</span>
                        </h1>
                        <h1 className="text-4xl md:text-5xl mt-2">EU SOU ISRAEL CEDRAZ</h1>
                    </div>
                </div>
            </motion.div>

            {/* Seção de conteúdo */}
            <motion.div
                className='w-full flex flex-col xl:flex-row items-start mt-16 md:mt-24 lg:mt-32 gap-8'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Imagem */}
                <div className='w-full xl:w-1/2 flex justify-center xl:justify-start'>
                    <img src={Isra} className='w-full xl:w-[95%] object-cover rounded-lg' alt="Israel Cedraz" />
                </div>

                {/* Texto e contato */}
                <div className='w-full flex -center xl:w-1/2 mt-8 xl:mt-0'>
                    <div className='border rounded-2xl border-[#1C1C21] p-6 md:p-8'>
                        {/* Introdução */}
                        <div className='border-b border-[#1C1C21] pb-6 mb-6'>
                            <h1 className='text-[#CACACE] text-3xl mb-4'>✴ Introdução</h1>
                            <p className='text-[#AFB0B6] font-normal text-base'>
                                My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.
                            </p>
                        </div>

                        {/* Contato */}
                        <div className='flex flex-col'>
                            <h1 className='text-[#CACACE] text-3xl mb-6'>✴ Contato</h1>

                            {/* Email e telefone */}
                            <div className='flex flex-col md:flex-row gap-6 mb-8 justify-between'>
                                <div className='w-full md:w-1/2'>
                                    <h2 className='text-lg text-[#E4E4E6] mb-2'>Email</h2>
                                    <p className='text-xl text-[#AFB0B6]'>israelcedraz@gmail.com</p>
                                </div>
                                <div className='w-full md:w-1/2 flex flex-col items-start md:items-center'>
                                    <h2 className='text-lg text-[#E4E4E6] mb-2'>Número de telefone</h2>
                                    <p className='text-xl text-[#AFB0B6]'>+55 (61) 99599-7277</p>
                                </div>
                            </div>

                            {/* Redes sociais e botões */}
                            <div className='flex flex-col xl:flex-row items-center justify-between   gap-6'>
                                {/* Ícones das redes sociais */}
                                <div className='flex gap-4 justify-center items-center border border-[#1C1C21] rounded-full p-4 w-full md:w-auto mx-auto xl:mx-0'>
                                    <a href="https://www.behance.net/israelcedraz?fbclid=PAZXh0bgNhZW0CMTEAAabo5-UUSvlawy-aXnfKcG6d2GtHTMxhwF383bDJztjxobySTTLLJFAgjcw_aem_lCIlDyvdZ8gJe_Z4T7jzbA" target="_blank" rel="noopener noreferrer">
                                        <button className='w-10 h-10 md:w-12 md:h-12 bg-[#1C1C21] rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer'>
                                            <FontAwesomeIcon icon={faBehanceSquare} className="text-white text-xl md:text-2xl" />
                                        </button>
                                    </a>
                                    <a href="https://www.instagram.com/israelcedraz/" target="_blank" rel="noopener noreferrer">
                                        <button className='w-10 h-10 md:w-12 md:h-12 bg-[#1C1C21] rounded-full flex items-center justify-center hover:bg-[#db4185] transition-colors cursor-pointer' >
                                            <FontAwesomeIcon icon={faInstagram} className="text-white text-xl md:text-2xl" />
                                        </button>
                                    </a>
                                    <a href="https://wa.me/5561995997277" target="_blank" rel="noopener noreferrer">
                                        <button className='w-10 h-10 md:w-12 md:h-12 bg-[#1C1C21] rounded-full flex items-center justify-center hover:bg-green-800 transition-colors cursor-pointer'>
                                            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-xl md:text-2xl" />
                                        </button>
                                    </a>
                                </div>

                                {/* Botões de ação */}
                                <div className='flex flex-col md:flex-row gap-4 w-full xl:w-auto'>
                                    <button className='bg-[#1C1C21] text-white px-6 py-3 md:px-8 md:py-4 rounded transition w-full xl:w-auto text-base'>
                                        <a href="https://wa.me/5561995997277" target="_blank" rel="noopener noreferrer">Vamos trabalhar</a>
                                        
                                    </button>
                                    <button className='bg-[#1C1C21] text-white px-6 py-3 md:px-8 md:py-4 rounded transition w-full xl:w-auto text-base'>
                                        <a href="https://www.behance.net/israelcedraz?fbclid=PAZXh0bgNhZW0CMTEAAabo5-UUSvlawy-aXnfKcG6d2GtHTMxhwF383bDJztjxobySTTLLJFAgjcw_aem_lCIlDyvdZ8gJe_Z4T7jzbA" target="_blank" rel="noopener noreferrer">Ver projetos</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Sobre;