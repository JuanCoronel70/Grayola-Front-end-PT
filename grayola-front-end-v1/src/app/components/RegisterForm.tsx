"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  name: string;
  email: string;
  role: string;
  password: string;
}

const initialUsers: User[] = [
  { name: 'User1', email: 'user1@example.com', role: 'authenticated', password: 'password1' },
  { name: 'User2', email: 'user2@example.com', role: 'authenticated', password: 'password2' },
  { name: 'User3', email: 'user3@example.com', role: 'authenticated', password: 'password3' },
  { name: 'User4', email: 'user4@example.com', role: 'project_manager', password: 'password4' },
  { name: 'User5', email: 'user5@example.com', role: 'admin', password: 'password5' },
  { name: 'User6', email: 'user6@example.com', role: 'designer', password: 'password6' },
  { name: 'User7', email: 'user7@example.com', role: 'designer', password: 'password7' },
];

const RegisterForm: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'authenticated', // Default role
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isLogin, setIsLogin] = useState(false); // State to toggle between register and login
  const router = useRouter(); // Use Next.js router for navigation

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

    let isValid = true;

    if (isLogin) {
      // Login validation
      const user = users.find(
        (user) => user.email === formData.email && user.password === formData.password
      );
      if (!user) {
        setErrors((prev) => ({
          ...prev,
          email: 'Credenciales inválidas.',
        }));
        isValid = false;
      } else {
        localStorage.setItem('userRole', user.role); // Store user role
        if (user.role === 'designer') {
          router.push('/project_design'); // Redirect to project_design if role is designer
        } else if (user.role === 'project_manager') {
          router.push('/project_all'); // Redirect to project_all if role is project_manager
        } else {
          router.push('/dashboard'); // Redirect to dashboard for other roles
        }
      }
    } else {
      // Registration validation
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
      } else if (users.some((user) => user.email === formData.email)) {
        setErrors((prev) => ({
          ...prev,
          email: 'Este correo electrónico ya está registrado.',
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
    }

    if (isValid) {
      if (!isLogin) {
        setUsers((prev) => [...prev, formData]);
        console.log('Form submitted:', formData);
        localStorage.setItem('userRole', formData.role); // Store user role
        router.push('/dashboard'); // Redirect to dashboard
      }
      console.log('Updated users list:', users);
      setFormData({
        name: '',
        email: '',
        password: '',
        role: 'authenticated', // Reset to default role
      });
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full transform transition-transform hover:scale-105 hover:duration-300 hover:ease-out hover:delay-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {isLogin ? 'Iniciar sesión - ' : 'Regístrate ahora - '}
        <span className="italic underline">
          {isLogin ? '¡Has tu pedido ahora!' : '¡Es gratis!'}
        </span>
      </h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
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
        )}
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
            {isLogin ? 'Iniciar sesión' : 'Registrarse'}
          </button>
        </div>
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:text-blue-700"
          >
            {isLogin ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia sesión'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
