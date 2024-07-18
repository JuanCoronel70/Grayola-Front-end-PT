"use client";
import React, { useState } from 'react';


const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Reset errors
    setErrors({
      name: '',
      email: '',
      password: '',
    });

    // Validation checks
    let isValid = true;

    if (formData.name.length < 5) {
      setErrors((prev) => ({
        ...prev,
        name: 'El nombre debe tener al menos 5 caracteres.',
      }));
      isValid = false;
    }

    if (!formData.email.includes('@')) {
      setErrors((prev) => ({
        ...prev,
        email: 'Debe ingresar un correo electrónico válido.',
      }));
      isValid = false;
    }

    if (formData.password.length < 7) {
      setErrors((prev) => ({
        ...prev,
        password: 'La contraseña debe tener al menos 7 caracteres.',
      }));
      isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        password: '',
      });
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full transform transition-transform hover:scale-105 hover:duration-300 hover:ease-out hover:delay-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Regístrate ahora - <span className="italic underline">¡Es gratis!</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name && 'border-red-500'
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email && 'border-red-500'
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Tu contraseña"
            value={formData.password}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password && 'border-red-500'
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic mt-1">{errors.password}</p>
          )}
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
