"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const HacerPedido: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="bg-gradient-to-r from-[#9AFF1A] via-[#76D200] to-[#B6FF4D] min-h-screen flex items-center justify-center relative">
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
      <div className="animate-slidein opacity-0 [--slidein-delay:100ms] ... bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold italic text-gray-800 mb-6 text-center underline">Crear Pedido</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título del Pedido</label>
            <input
              type="text"
              id="title"
              name="title"
              className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Título del Pedido"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción del Pedido</label>
            <textarea
              id="description"
              name="description"
              className="border-2 border-gray-300 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Descripción del Pedido"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="file1" className="block text-sm font-medium text-gray-700">Subir Archivo (Opcional)</label>
            <input
              type="file"
              id="file1"
              name="file1"
              className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="file2" className="block text-sm font-medium text-gray-700">Subir Archivo (Opcional)</label>
            <input
              type="file"
              id="file2"
              name="file2"
              className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-lg font-semibold w-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default HacerPedido;
