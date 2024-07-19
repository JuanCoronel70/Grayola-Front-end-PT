"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: 'Diseño Geométrico Moderno',
    description: 'Un proyecto de diseño web utilizando formas geométricas modernas.',
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/016/404/798/original/geometric-abstract-backgrounds-design-composition-of-simple-bauhaus-geometric-shapes-for-use-in-presentation-flyer-and-leaflet-charter-cards-landing-website-design-illustration-vector.jpg',
  },
  {
    id: 2,
    title: 'Arte Postmoderno',
    description: 'Exploración de estilos postmodernos en diseño gráfico.',
    imageUrl: 'https://www.shutterstock.com/image-vector/artworks-posters-inspired-postmodern-vector-600nw-2441842937.jpg',
  },
  {
    id: 3,
    title: 'Patrones Geométricos',
    description: 'Creación de patrones geométricos para fondos y texturas.',
    imageUrl: 'https://c8.alamy.com/compes/2dd6196/disenos-geometricos-sin-costuras-abstractos-sobre-fondo-de-champan-vela-la-textura-vectorial-sin-fin-se-puede-utilizar-para-envolver-papel-tapiz-fondo-de-azulejos-web-2dd6196.jpg',
  },
  {
    id: 4,
    title: 'Diseño Web Natural',
    description: 'Implementación de tendencias naturales en diseño web.',
    imageUrl: 'https://www.optimbyte.com/wp-content/uploads/2019/10/3-1-tendencia-diseno-web-natural.jpeg',
  },
  {
    id: 5,
    title: 'Tendencias de Diseño Web 2020',
    description: 'Un repaso por las principales tendencias de diseño web del 2020.',
    imageUrl: 'https://png.pngtree.com/thumb_back/fw800/background/20240102/pngtree-geometric-patterns-exquisite-fills-for-web-page-backgrounds-and-textures-image_13881312.png',
  },
];

const ProjectDesign: React.FC = () => {
  const [projects] = useState<Project[]>(initialProjects);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="relative bg-gradient-to-r from-[#00ff00] via-[#76ff00] to-[#b6ff4d] min-h-screen flex flex-col items-center justify-center p-4">
      <button
        onClick={handleBack}
        className="animate-slidein opacity-0 [--slidein-delay:100ms] ... absolute top-4 left-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none"
      >
        <svg
          className="h-8 w-8 text-gray-900"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      
      <div className="animate-slidein opacity-0 [--slidein-delay:300ms] ... top-10 mb-10 flex-shrink-0">
        <img src="/images/banner.PNG" alt="Banner" className="max-h-10" />
      </div>
      <div className="animate-slidein opacity-0 [--slidein-delay:300ms] ... flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">¡Hola designer!</h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Aquí encontrarás todos los proyectos a los que estas asociados
        </p>
        <div className="animate-slidein opacity-0 [--slidein-delay:300ms] ... w-full max-w-4xl overflow-y-auto space-y-6 mx-10 p-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDesign;
