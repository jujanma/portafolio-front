import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const whatsappNumber = "573003550436";
  const message = "Hola, estoy interesado en tu perfil";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section name="Contact" className="bg-gray-100 py-12">
      <div className=" h-screen w-screen flex items-center flex-col">
        <h2 className="font-semibold text-[40px]">Contacto</h2>
        <div className=" flex items-center flex-col w-screen mt-[5%] pt-[10%] pb-[10%] bg-[#2B2B29] p-10">
        <p className="text-lg text-white mb-6">
          ¿Tienes un proyecto emocionante en mente o una oportunidad
          de colaboración? Con dos años de experiencia en desarrollo frontend y
          un sólido manejo de tecnologías como React, Node, MongoDB, y más,
          estoy listo para ayudarte a llevar tu idea al siguiente nivel.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
        >
          <FaWhatsapp className="mr-2" /> Vamos a colaborar
        </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
