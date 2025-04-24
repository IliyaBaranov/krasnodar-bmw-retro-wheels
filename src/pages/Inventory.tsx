import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Car, Wrench, CalendarCheck, ShieldCheck, Truck, Gauge, Weight, Power } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const cars = [
  {
    id: 1,
    name: "BMW E30 M3",
    year: 1988,
    price: "₽2,500,000",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    specs: {
      engine: "2.3L I4 S14",
      power: "195 л.с.",
      torque: "230 Нм",
      acceleration: "6.9 сек до 100 км/ч",
      topSpeed: "235 км/ч",
      weight: "1200 кг",
      transmission: "5-ступенчатая механическая",
      drivetrain: "Задний привод"
    }
  },
  {
    id: 2,
    name: "BMW E36 M3",
    year: 1995,
    price: "₽1,800,000",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    specs: {
      engine: "3.0L I6 S50",
      power: "286 л.с.",
      torque: "320 Нм",
      acceleration: "5.5 сек до 100 км/ч",
      topSpeed: "250 км/ч",
      weight: "1460 кг",
      transmission: "6-ступенчатая механическая",
      drivetrain: "Задний привод"
    }
  },
  {
    id: 3,
    name: "BMW E39 M5",
    year: 1999,
    price: "₽2,200,000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    specs: {
      engine: "4.9L V8 S62",
      power: "400 л.с.",
      torque: "500 Нм",
      acceleration: "4.8 сек до 100 км/ч",
      topSpeed: "250 км/ч",
      weight: "1795 кг",
      transmission: "6-ступенчатая механическая",
      drivetrain: "Задний привод"
    }
  },
  {
    id: 4,
    name: "BMW E46 M3",
    year: 2002,
    price: "₽1,950,000",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    specs: {
      engine: "3.2L I6 S54",
      power: "343 л.с.",
      torque: "365 Нм",
      acceleration: "5.1 сек до 100 км/ч",
      topSpeed: "250 км/ч",
      weight: "1570 кг",
      transmission: "6-ступенчатая механическая",
      drivetrain: "Задний привод"
    }
  },
  {
    id: 5,
    name: "BMW E38 750iL",
    year: 1997,
    price: "₽2,800,000",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    specs: {
      engine: "5.4L V12 M73",
      power: "326 л.с.",
      torque: "490 Нм",
      acceleration: "6.4 сек до 100 км/ч",
      topSpeed: "250 км/ч",
      weight: "2050 кг",
      transmission: "5-ступенчатая автоматическая",
      drivetrain: "Задний привод"
    }
  },
  {
    id: 6,
    name: "BMW E31 850CSi",
    year: 1994,
    price: "₽3,500,000",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    specs: {
      engine: "5.6L V12 S70",
      power: "380 л.с.",
      torque: "550 Нм",
      acceleration: "6.0 сек до 100 км/ч",
      topSpeed: "250 км/ч",
      weight: "1865 кг",
      transmission: "6-ступенчатая механическая",
      drivetrain: "Задний привод"
    }
  },
  {
    id: 7,
    name: "BMW E34 M5",
    year: 1991,
    price: "₽2,100,000",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    specs: {
      engine: "3.6L I6 S38",
      power: "315 л.с.",
      torque: "360 Нм",
      acceleration: "5.9 сек до 100 км/ч",
      topSpeed: "250 км/ч",
      weight: "1670 кг",
      transmission: "5-ступенчатая механическая",
      drivetrain: "Задний привод"
    }
  },
  {
    id: 8,
    name: "BMW E28 M5",
    year: 1986,
    price: "₽2,900,000",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    specs: {
      engine: "3.5L I6 M88/3",
      power: "286 л.с.",
      torque: "340 Нм",
      acceleration: "6.2 сек до 100 км/ч",
      topSpeed: "245 км/ч",
      weight: "1430 кг",
      transmission: "5-ступенчатая механическая",
      drivetrain: "Задний привод"
    }
  }
];

const services = [
  {
    title: "Продажа автомобилей с пробегом",
    icon: <Car className="w-6 h-6" />,
    items: [
      "Сертифицированные автомобили с пройденной многоступенчатой проверкой",
      "Гарантия на подержанные автомобили",
      "Возможность срочного выкупа вашего автомобиля"
    ]
  },
  {
    title: "Сервисное обслуживание и ремонт",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      "Плановое ТО по регламенту производителя",
      "Диагностика (электронная, компьютерная, механическая)",
      "Кузовной ремонт и покраска с применением оригинальных красок BMW",
      "Ремонт ходовой части, тормозной системы, коробки передач, двигателя",
      "Шиномонтаж, балансировка и хранение летних/зимних шин"
    ]
  },
  {
    title: "Дополнительное оборудование",
    icon: <ShieldCheck className="w-6 h-6" />,
    items: [
      "Установка дополнительного оборудования и аксессуаров",
      "Оригинальные аксессуары BMW",
      "Специальные опции",
      "Установка охранных систем и спутниковых трекеров"
    ]
  },
  {
    title: "Постпродажное обслуживание",
    icon: <CalendarCheck className="w-6 h-6" />,
    items: [
      "Расширенные программы гарантии",
      "Сервис BMW Service Inclusive",
      "Сервис лояльности и персонального менеджера",
      "Программа помощи на дороге BMW Roadside Assistance"
    ]
  },
  {
    title: "Дополнительные услуги",
    icon: <Truck className="w-6 h-6" />,
    items: [
      "Страхование (КАСКО, ОСАГО) через партнеров дилера",
      "Оформление регистрационных документов и номеров",
      "Утилизация старого автомобиля",
      "Трансфер и доставка автомобиля к клиенту"
    ]
  }
];

const Inventory = () => {
  const [selectedCar, setSelectedCar] = useState<typeof cars[0] | null>(null);

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-secondary">Наличие автомобилей</h1>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {cars.map((car) => (
            <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <CardTitle className="text-xl mb-2">{car.name}</CardTitle>
                <p className="text-gray-600">Год: {car.year}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <p className="text-lg font-semibold text-secondary">{car.price}</p>
                <button 
                  onClick={() => setSelectedCar(car)}
                  className="btn-animate bg-primary text-secondary px-4 py-2 rounded-md"
                >
                  Подробнее
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <section className="mt-16 mb-8">
          <h2 className="text-3xl font-bold mb-12 text-secondary text-center">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary rounded-full">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </ScrollArea>

      <Dialog open={!!selectedCar} onOpenChange={() => setSelectedCar(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Car className="w-6 h-6" />
              {selectedCar?.name} ({selectedCar?.year})
            </DialogTitle>
          </DialogHeader>
          {selectedCar && (
            <div className="mt-4">
              <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
                <img 
                  src={selectedCar.image} 
                  alt={selectedCar.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-secondary" />
                  <span>Двигатель: {selectedCar.specs.engine}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Power className="w-5 h-5 text-secondary" />
                  <span>Мощность: {selectedCar.specs.power}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-secondary" />
                  <span>Крутящий момент: {selectedCar.specs.torque}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-secondary" />
                  <span>Разгон: {selectedCar.specs.acceleration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-secondary" />
                  <span>Макс. скорость: {selectedCar.specs.topSpeed}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Weight className="w-5 h-5 text-secondary" />
                  <span>Масса: {selectedCar.specs.weight}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-secondary" />
                  <span>КПП: {selectedCar.specs.transmission}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-secondary" />
                  <span>Привод: {selectedCar.specs.drivetrain}</span>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <p className="text-2xl font-bold text-secondary">{selectedCar.price}</p>
                <button className="btn-animate bg-primary text-secondary px-6 py-3 rounded-md font-semibold">
                  Связаться с менеджером
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Inventory;
