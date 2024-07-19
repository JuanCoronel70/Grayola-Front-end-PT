"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    // Simula obtener el rol del usuario desde un estado global o contexto
    const role = localStorage.getItem('userRole');
    setUserRole(role);
    
    if (!role) {
      router.push('/');
    }
  }, [router]);

  const handleOrder = () => {
    // Redirige a la página de hacer pedido
    router.push('/pedido');
  };

  return (
    
    <div className="area">
      <div className="x1">
	      <div className="bird"><span className="beak"></span></div>
    </div>
			
    <div className="x2">
        <div className="bird"><span className="beak"></span></div>
    </div>
			
    <div className="x3">
        <div className="bird"><span className="beak"></span></div>
    </div>
			
    <div className="x4">
        <div className="bird"><span className="beak"></span></div>
    </div>
			
    <div className="x5">
        <div className="bird"><span className="beak"></span></div>
    </div>
      <div className="content">
        <div className="w-max">
          <h1 className="fixed-else2 typing-effect">Bienvenido a Grayola &nbsp;</h1>
        </div>
        {userRole === 'authenticated' ? (
          <div>
            <p className="fixed-else mb-4 italic font-bold">Con Grayola puedes hacer tus diseños realidad. ¡Realiza tu primer pedido!</p>
            <button
              onClick={handleOrder}
              className="fixed-button"
            >
              Hacer Pedido
            </button>
          </div>
        ) : (
          <p></p>
        )}
      </div>
      <div className="animate-slidein opacity-0 [--slidein-delay:300ms] ... absolute top-0 w-full flex items-center justify-center pt-10">
        <img src="/images/banner.PNG" alt="Banner" className="max-h-10" />
      </div>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Dashboard;
