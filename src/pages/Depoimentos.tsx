import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "60px",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // Telas médias (tablets)
                settings: {
                    slidesToShow: 2,
                    centerPadding: "40px",
                },
            },
            {
                breakpoint: 768, // Telas pequenas (celulares)
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                },
            },
        ],
    };

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <button
                className="w-14 h-14 bg-[#232326] rounded-full flex items-center justify-center absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hover:cursor-pointer"
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronRight} className="text-white text-2xl" />
            </button>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <button
                className="w-14 h-14 bg-[#232326] rounded-full flex items-center justify-center absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hover:cursor-pointer"
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronLeft} className="text-white text-2xl" />
            </button>
        );
    }

    return (
        <div className="mt-50 px-6 md:px-16">
            {/* Seção superior */}
            <div className="border-b flex flex-col md:flex-row w-full mb-10 items-center">
                <div className="w-full md:w-1/2 mb-6 md:mb-12">
                    <p className="text-[#797C86] mb-2">DEPOIMENTOS</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">O QUE OS MEUS CLIENTES FALAM</h1>
                    <p className="text-[#62646C]">NÚMERO TOTAL DE AVALIAÇÕES</p>
                    <p>323</p>
                </div>
                <div className="w-full md:w-1/2 flex justify-end">
                    <button className="px-6 py-3 bg-[#1C1C21] text-white text-base rounded hover:bg-blue-600 transition">
                        Ver todos os depoimentos
                    </button>
                </div>
            </div>

            {/* Slider de depoimentos */}
            <div className="slider-container relative">
                <Slider {...settings}>
                    {depoimentos.map((depoimento, index) => (
                        <div key={index} className="px-2 relative">

                            {/* Card do depoimento */}
                            <div className="border p-6 rounded-lg shadow-sm h-[300px] flex flex-col">
                                {/* Informações do cliente */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                    <div>
                                        <h3 className="font-semibold">{depoimento.nome}</h3>
                                        <p className="text-gray-500">{depoimento.cidade}</p>
                                    </div>
                                </div>

                                {/* Estrelas */}
                                <div className="flex items-center gap-2 mb-4">
                                    {[...Array(depoimento.estrelas)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
                                    ))}
                                </div>

                                {/* Descrição */}
                                <p className="text-gray-600 overflow-y-auto flex-1">{depoimento.descricao}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Rodapé */}
            <div className="flex justify-end mt-10">
                <h1 className="text-6xl md:text-8xl lg:text-[250px] text-[#232329] select-none">ISRAEL</h1>
            </div>
        </div>
    );
}