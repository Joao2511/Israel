import Slider from "react-slick";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

export default function Depoimentos() {
    const sliderRef = useRef<Slider>(null);

    const depoimentos = [
        {
            nome: "Emily Johnson",
            cidade: "USA, California",
            descricao: "Damien's photography doesn't just capture moments; it captures emotions. His work is simply mesmerizing.",
            estrelas: 5,
        },
        {
            nome: "John Doe",
            cidade: "Canada, Toronto",
            descricao: "Absolutely stunning photography! I couldn't have asked for a better experience.",
            estrelas: 4,
        },
        {
            nome: "Maria Garcia",
            cidade: "Spain, Madrid",
            descricao: "The best photographer I've ever worked with. Highly recommended!",
            estrelas: 5,
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Desativa as setas padrão do Slider
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <motion.div
            className="relative mt-20 px-4 md:px-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Slider com ref */}
            <Slider ref={sliderRef} {...settings}>
                {depoimentos.map((depoimento, index) => (
                    <motion.div
                        key={index}
                        className="px-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="border p-6 rounded-lg shadow-md flex flex-col h-[300px]">
                            <div className="flex items-center gap-4 mb-4">
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
                            <p className="text-gray-600 overflow-hidden text-ellipsis">
                                {depoimento.descricao}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </Slider>

            {/* Botões de navegação personalizados */}
            <button
                className="w-10 h-10 bg-[#232326] rounded-full flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 z-10 hover:bg-[#333336] transition-colors"
                onClick={() => sliderRef.current?.slickPrev()}
                aria-label="Previous testimonial"
            >
                <FontAwesomeIcon icon={faChevronLeft} className="text-white text-lg" />
            </button>

            <button
                className="w-10 h-10 bg-[#232326] rounded-full flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 z-10 hover:bg-[#333336] transition-colors"
                onClick={() => sliderRef.current?.slickNext()}
                aria-label="Next testimonial"
            >
                <FontAwesomeIcon icon={faChevronRight} className="text-white text-lg" />
            </button>
        </motion.div>
    );
}