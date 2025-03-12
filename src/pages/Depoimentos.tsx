import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";

export default function Depoimentos() {
    const depoimentos = [
        {
            nome: "Emily Johnson",
            cidade: "USA, California",
            descricao: "Damien’s photography doesn’t just capture moments; it captures emotions. His work is simply mesmerizing.",
            estrelas: 5,
        },
        {
            nome: "John Smith",
            cidade: "USA, California",
            descricao: "Damien has an incredible talent for making every event feel effortless, and the results speak for themselves.",
            estrelas: 5,
        },
        {
            nome: "Samantha Davis",
            cidade: "USA, California",
            descricao: "I was blown away by Damien’s ability to capture the essence of our wedding day. His photographs are our cherished memories.",
            estrelas: 5,
        },
        {
            nome: "Carlos Silva",
            cidade: "Brazil, São Paulo",
            descricao: "Incrível trabalho! As fotos ficaram perfeitas e capturaram todos os detalhes do nosso evento.",
            estrelas: 5,
        },
        {
            nome: "Maria Gonzalez",
            cidade: "Spain, Madrid",
            descricao: "Damien is a true professional. His photos are stunning and full of life.",
            estrelas: 5,
        },
        {
            nome: "Laura Mendes",
            cidade: "Portugal, Lisbon",
            descricao: "As fotos ficaram incríveis! Damien capturou todos os momentos especiais do nosso casamento.",
            estrelas: 5,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % depoimentos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + depoimentos.length) % depoimentos.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000); // Troca a cada 10 segundos

        return () => clearInterval(interval);
    }, [currentIndex]);

    const visibleDepoimentos = [
        depoimentos[currentIndex],
        depoimentos[(currentIndex + 1) % depoimentos.length],
        depoimentos[(currentIndex + 2) % depoimentos.length],
    ];

    return (
        <div className="mt-50 px-16 ">
            <div className="border-b flex w-full mb-10 items-center">
                <div className="w-1/2 mb-12">
                    <p className="text-[#797C86] mb-2">DEPOIMENTOS</p>
                    <h1 className="text-4xl md:text-5xl mb-4">O QUE OS MEUS CLIENTES FALAM</h1>
                    <p className="text-[#62646C]">NÚMERO TOTAL DE AVALIAÇÕES</p>
                    <p>323</p>
                </div>
                <div className="w-1/2">
                    <div className="flex gap-4 justify-end">
                        <div className="flex justify-end items-center gap-4">
                            <div className="flex items-center p-2 rounded-full border border-[#1C1C21] gap-2">
                                <button
                                    className="w-14 h-14 bg-[#232326] rounded-full flex items-center justify-center"
                                    onClick={prevSlide}
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} className="text-white text-2xl" />
                                </button>
                                <button
                                    className="w-14 h-14 bg-[#232326] rounded-full flex items-center justify-center"
                                    onClick={nextSlide}
                                >
                                    <FontAwesomeIcon icon={faChevronRight} className="text-white text-2xl" />
                                </button>
                            </div>
                            <div>
                                <button>Ver todos os depoimentos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="flex gap-6 relative overflow-hidden">
                <AnimatePresence mode="wait">
                    {visibleDepoimentos.map((depoimento, index) => (
                        <motion.div
                            key={depoimento.nome}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                            className="border p-6 rounded-lg shadow-sm flex-1"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                <div>
                                    <h3 className="font-semibold">{depoimento.nome}</h3>
                                    <p className="text-gray-500">{depoimento.cidade}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                {[...Array(depoimento.estrelas)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">{depoimento.descricao}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <div className="flex justify-end mt-10">
                <h1 className="text-[250px] text-[#232329]">ISRAEL</h1>
            </div>
        </div>
    );
}