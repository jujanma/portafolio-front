import React from "react";
import mipres from "../assets/MiPres.jpg";

const Projects = () => {
  const projects = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptate nostrum molestias quis sequi at culpa nisi exped ullam. Dolorum deleniti harum consequatur tenetur eos placeat quas rerum! Eligendi, perspiciatis.",
      imageSrc: mipres,
      link: "www.mipres.com",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptate nostrum molestias quis sequi at culpa nisi exped ullam. Dolorum deleniti harum consequatur tenetur eos placeat quas rerum! Eligendi, perspiciatis.",
      imageSrc: mipres,
      link: "www.mipres.com",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptate nostrum molestias quis sequi at culpa nisi exped ullam. Dolorum deleniti harum consequatur tenetur eos placeat quas rerum! Eligendi, perspiciatis.",
      imageSrc: mipres,
      link: "www.mipres.com",
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
            <img src={p.imageSrc} alt="" className=" object-cover" />
            <span className=" flex-col p-4 absolute backdrop-blur hover:backdrop-blur-[20px] inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p>{p.description}</p>
              <a href={p.link} className="text-blue-700">Deploy Link</a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
