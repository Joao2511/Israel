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
        infinite: true, // Loop infinito
        speed: 500, // Velocidade da transição (0,5 segundo)
        slidesToShow: 3, // Exibe 3 slides por vez
        slidesToScroll: 1, // Avança 1 slide por vez
        autoplay: true, // Ativa o autoplay
        autoplaySpeed: 2000, // Intervalo de 2 segundos entre cada slide
        cssEase: "linear",
        centerMode: true, // Ativa o modo centralizado
        centerPadding: "60px", // Espaçamento entre os slides e "peek" do próximo slide
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // Telas médias (tablets)
                settings: {
                    slidesToShow: 2,
                    centerPadding: "40px", // Ajuste do espaçamento para tablets
                },
            },
            {
                breakpoint: 768, // Telas pequenas (celulares)
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px", // Ajuste do espaçamento para celulares
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
        <div className="mt-50 px-16">
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
                            <div>
                                <button>Ver todos os depoimentos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slider-container">
                <Slider {...settings}>
                    {depoimentos.map((depoimento, index) => (
                        <div key={index} className="px-2">
                            <div className="border p-6 rounded-lg shadow-sm ">
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
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="flex justify-end mt-10">
                <h1 className="text-[250px] text-[#232329] select-none">ISRAEL</h1>
            </div>
        </div>
    );
}