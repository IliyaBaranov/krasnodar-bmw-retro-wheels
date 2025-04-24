
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="bg-primary py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
              BMW Краснодар
            </h1>
            <p className="text-xl md:text-2xl text-secondary/80 mb-8">
              Официальный дилер BMW в Краснодаре с 1995 года
            </p>
            <button 
              onClick={() => navigate('/inventory')}
              className="bg-secondary text-white px-8 py-3 rounded btn-animate"
            >
              Смотреть автомобили
            </button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">О компании</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg leading-relaxed">
                  BMW Краснодар - это более 25 лет опыта в продаже и обслуживании автомобилей BMW. 
                  Мы специализируемся на классических моделях 90-х и 2000-х годов, предлагая нашим 
                  клиентам исключительное качество обслуживания и индивидуальный подход.
                </p>
              </div>
              <div className="aspect-video bg-muted rounded-lg"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
