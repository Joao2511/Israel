import { useState } from "react";
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

  return (
    <div className="mt-12 px-16">
      <div className="text-center mb-6">
        <p className="text-gray-500">FAQ'S</p>
        <h1 className="text-2xl font-bold">PERGUNTAS FREQUENTES</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm">
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
            {openFaq === index && (
              <p className="text-gray-600 mt-2">{faq.resposta}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
