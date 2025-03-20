import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Importe o Framer Motion e AnimatePresence
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Faq() {
  const faqs = [
    {
      pergunta: "What type of photography do you specialize in?",
      resposta: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      pergunta: "What is your pricing structure?",
      resposta: "My pricing varies based on the type of shoot and duration. Please contact me for details.",
    },
    {
      pergunta: "How do you handle client consultations?",
      resposta: "I offer consultations via phone or in-person to discuss ideas and expectations.",
    },
    {
      pergunta: "What should I wear for a photo shoot?",
      resposta: "Choose outfits that reflect your personality and make you feel comfortable. Avoid busy patterns.",
    },
    {
      pergunta: "Do you provide editing services?",
      resposta: "Yes, all photos are professionally edited as part of the package.",
    },
    {
      pergunta: "How long does it take to receive the photos?",
      resposta: "Typically, you can expect the final images within 2-4 weeks after the shoot.",
    },
    {
      pergunta: "Can I request specific shots?",
      resposta: "Absolutely! I encourage clients to share their vision and any specific shots they have in mind.",
    },
    {
      pergunta: "What if the weather is bad on the shoot day?",
      resposta: "I always have a backup plan for adverse weather conditions and will discuss options with you.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  const faqsPart1 = faqs.slice(0, 4);
  const faqsPart2 = faqs.slice(4);

  return (
    <motion.div
      className="mt-30 px-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-6">
        <p className="text-gray-500">FAQ'S</p>
        <h1 className="text-4xl md:text-5xl">PERGUNTAS FREQUENTES</h1>
      </div>
      <div className="flex flex-col md:flex-row">

        <motion.div
          className="flex-1 border-r border-[#1C1C21]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqsPart1.map((faq, index) => (
            <motion.div
              key={index}
              className={`border-t border-[#1C1C21] p-10 ${index === faqsPart1.length - 1 ? "border-t-0" : ""
                } ${faq.pergunta === "How do you handle client consultations?" ? "border-b border-[#1C1C21]" : ""
                }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h2 className="font-semibold text-lg">{faq.pergunta}</h2>
                <FontAwesomeIcon
                  icon={openFaq === index ? faChevronUp : faChevronDown}
                  className="text-gray-500"
                  size="lg"
                />
              </div>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 mt-2">{faq.resposta}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>


        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {faqsPart2.map((faq, index) => (
            <motion.div
              key={index + 4}
              className={`border-t border-[#1C1C21] p-10 ${index === faqsPart2.length - 1 ? "border-t-0" : ""
                } ${faq.pergunta === "Can I request specific shots?" ? "border-b border-[#1C1C21]" : ""
                }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index + 4)}
              >
                <h2 className="font-semibold text-lg">{faq.pergunta}</h2>
                <FontAwesomeIcon
                  icon={openFaq === index + 4 ? faChevronUp : faChevronDown}
                  className="text-gray-500"
                  size="lg"
                />
              </div>
              <AnimatePresence>
                {openFaq === index + 4 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 mt-2">{faq.resposta}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}