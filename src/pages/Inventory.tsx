
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const cars = [
  {
    id: 1,
    name: "BMW E30 M3",
    year: 1988,
    price: "₽2,500,000",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 2,
    name: "BMW E36 M3",
    year: 1995,
    price: "₽1,800,000",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
  },
  {
    id: 3,
    name: "BMW E39 M5",
    year: 1999,
    price: "₽2,200,000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    id: 4,
    name: "BMW E46 M3",
    year: 2002,
    price: "₽1,950,000",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
  },
  {
    id: 5,
    name: "BMW E38 750iL",
    year: 1997,
    price: "₽2,800,000",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  },
  {
    id: 6,
    name: "BMW E31 850CSi",
    year: 1994,
    price: "₽3,500,000",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
  },
  {
    id: 7,
    name: "BMW E34 M5",
    year: 1991,
    price: "₽2,100,000",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
  },
  {
    id: 8,
    name: "BMW E28 M5",
    year: 1986,
    price: "₽2,900,000",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace"
  }
];

const Inventory = () => {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-secondary">Наличие автомобилей</h1>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                <button className="btn-animate bg-primary text-secondary px-4 py-2 rounded-md">
                  Подробнее
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </main>
  );
};

export default Inventory;
