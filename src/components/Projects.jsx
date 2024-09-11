import React from "react";
import mipres from "../assets/MiPres.jpg";
import GRC from "../assets/GRC.jpg"
import cita from "../assets/citaExpress.jpg"
import shop from "../assets/marinShop.jpg"


const Projects = () => {
  const projects = [
    {
      description:
        "Tecnología funcional, escalable y segura para la gestión integral del ciclo de la prescripción en salud.",
      imageSrc: mipres,
      name: "mipres.com",
    },
    {
      description:
        "El enfoque de gobernanza, riesgo y cumplimiento (GRC) es una forma estructurada de lograr que las tecnologías de la información se ajusten a los objetivos empresariales, a la vez que se gestionan los riesgos y se cumplen todas las regulaciones sectoriales y gubernamentales.",
      imageSrc: GRC,
      name: "GRC Riesgos Operacionales",
    },
    {
      description:
        "Cita express es una plataforma eficiente y personalizada para conectar a profesionales con clientes que buscan servicios de plomería, electricidad, mantenimiento y más. Con nuestra solución, facilitamos la gestión integral de solicitudes, permitiendo a los profesionales ofrecer sus servicios de manera rápida y a los usuarios encontrar expertos locales de confianza.",
      imageSrc: cita,
      name: "Cita express",
    },
    {
      description:
      "Este es un proyecto personal que he desarrollado como parte de mi aprendizaje y exploración en el mundo del comercio electrónico. Se trata de una tienda en línea que ofrece una amplia variedad de artículos, desde productos de tecnología hasta artículos de hogar y accesorios personales.",
      imageSrc: shop,
      name: "Marin Shop",
    },
  ];

  return (
    <div
      name="Projects"
      className="h-screen w-screen flex items-center flex-col"
    >
      <h2 className="font-semibold text-[40px]"> Projects</h2>
      <div className=" gap-5 mt-10 grid grid-cols-3 md:grid-cols-1">
        {projects.map((p) => (
          <div className=" relative w-[300px] h-[300px] sm:w-[80%] border-red-100 border-spacing-1 border p-2 bg-slate-500">
            <img src={p.imageSrc} alt="" className=" object-contain w-full h-full" />
            <span className=" flex-col p-4 absolute backdrop-blur hover:backdrop-blur-[20px] inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p>{p.description}</p>
              <h4 className=" font-semibold text-black mt-2">{p.name}</h4>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
