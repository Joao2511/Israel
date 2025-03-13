import React from "react";
import Slider from "react-slick";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/fotos/1.png";
import img5 from "../assets/fotos/10.jpg";
import img6 from "../assets/fotos/13.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Portfolio() {
    const servicos = [
        { titulo: "Faces of Resilience", descricao: "March 2022", imagem: img1 },
        { titulo: "Nature's Beauty", descricao: "April 2022", imagem: img2 },
        { titulo: "Urban Life", descricao: "May 2022", imagem: img3 },
        { titulo: "Nature's Beauty", descricao: "April 2022", imagem: img4 },
        { titulo: "Nature's Beauty", descricao: "April 2022", imagem: img5 },
        { titulo: "Nature's Beauty", descricao: "April 2022", imagem: img6 },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Desktop padrão
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // Para telas médias (tablets)
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // Para telas pequenas (celulares grandes)
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <button
                className="w-10 h-10 md:w-14 md:h-14 bg-[#232326] rounded-full flex items-center justify-center absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hover:cursor-pointer" // Adicionado hover:cursor-pointer
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronRight} className="text-white text-xl md:text-2xl" />
            </button>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <button
                className="w-10 h-10 md:w-14 md:h-14 bg-[#232326] rounded-full flex items-center justify-center absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hover:cursor-pointer" // Adicionado hover:cursor-pointer
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronLeft} className="text-white text-xl md:text-2xl" />
            </button>
        );
    }

    return (
        <div className="px-4 md:px-16 my-10 md:my-20">
            <div>
                <div className="w-full flex flex-col md:flex-row border-b border-[#1C1C21] pb-8 md:pb-10 mb-8 md:mb-10">
                    <div className="w-full md:w-2/3">
                        <p className="text-[#797C86]">PORTFÓLIO</p>
                        <h1 className="text-3xl md:text-5xl">
                            DESCUBRA MAIS SOBRE MINHAS <br /> FOTOGRAFIAS
                        </h1>
                    </div>
                    <div className="flex justify-center md:justify-end items-center gap-4 w-full md:w-1/3 mt-4 md:mt-0">
                        <button className="bg-[#232326] text-white px-6 py-2 rounded-md">
                            Ver todos os serviços
                        </button>
                    </div>
                </div>

                <div className="slider-container relative">
                    <Slider {...settings}>
                        {servicos.map((servico, index) => (
                            <div key={index} className="px-2">
                                <div className="m-4 flex flex-col">
                                    <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded">
                                        <img
                                            src={servico.imagem}
                                            alt={servico.titulo}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <div className="flex flex-col">
                                            <h2 className="text-lg md:text-xl font-semibold">{servico.titulo}</h2>
                                            <p className="text-gray-600">{servico.descricao}</p>
                                        </div>
                                        <button className="ml-4 text-white bg-[#232326] px-4 py-2 rounded-md">
                                            Ver Projeto
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}