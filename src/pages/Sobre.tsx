import Isra from '../assets/Isra.png'

const Sobre = () => {
    return (
        <>
            <div className="w-full px-6 md:px-16 border-b border-[#1C1C21] pb-12 mt-12 md:mt-42">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl md:text-6xl flex flex-col">
                            <span className="text-base md:text-base">
                                SOBRE
                            </span>
                            EU SOU ISRAEL CEDRAZ
                        </h1>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                            Saiba mais
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-full flex'>
                <div className='mt-24 pl-16 w-1/2'>
                    <img src={Isra} className='w-[600px]' />
                </div>

                <div className='w-1/2 border'>
                    <div className='border-b'>
                        <h1>Introdução</h1>
                        <p>My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.</p>
                    </div>
                    <div>
                        <h1>Contato</h1>
                        <div>
                            <h1>Email</h1>
                            <p>israelcedraz@gmail.com</p>
                        </div>
                        <div>
                            <h1>Número de telefone</h1>
                            <p>+55 (61)99599-7277</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Sobre;