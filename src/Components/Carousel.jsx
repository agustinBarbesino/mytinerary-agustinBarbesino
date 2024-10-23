import React, { useState, useEffect } from "react";


// Tineraries del carousel:
const CarouselTineraries = () => {
  const tineraries = [
    { id: 1, name: "París", img: "/public/images/Paris.jpg" },
    { id: 2, name: "Nueva York", img: "/public/images/NuevaYork.jpg" },
    { id: 3, name: "Tokio", img: "/public/images/Tokio.jpg" },
    { id: 4, name: "Londres", img: "/public/images/Londres.jpg" },
    { id: 5, name: "Roma", img: "/public/images/Roma.jpg" },
    { id: 6, name: "Sídney", img: "/public/images/Sidney.jpg" },
    { id: 7, name: "Dubai", img: "/public/images/Dubai.jpg" },
    { id: 8, name: "Berlín", img: "/public/images/Berlin.jpg" },
    { id: 9, name: "Buenos Aires", img: "/public/images/BuenosAires.jpg" },
    { id: 10, name: "Rio de Janeiro", img: "/public/images/RioDeJaneiro.jpg" },
    { id: 11, name: "Cancún", img: "/public/images/Cancun.jpg" },
    { id: 12, name: "Pekín", img: "/public/images/Pekin.jpg" },
  ];

  // Esta constante agrupa los tineraries de a 4.
  const groupedTineraries = [];
  for (let i = 0; i < tineraries.length; i += 4) {
    groupedTineraries.push(tineraries.slice(i, i + 4));
  }

  // Acá se maneja el índice del slide actual.
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? groupedTineraries.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === groupedTineraries.length - 1 ? 0 : prev + 1));
  };

 //Temporizador de 5 segundos.
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 
    return () => clearInterval(interval); 
  }, [currentSlide]);

  return (
    <div className="flex-row justify-center mx-auto p-3 overflow-hidden">

      <div className="flex justify-evenly items-center gap-4 overflow-hidden">

        {/*Prev Slide Button*/}  
        <button
          onClick={prevSlide}
          className="w-12 h-12 absolute left-0 z-10 bg-blue-500 transition ease-in-out delay-100 text-white m-3 p-2 rounded-full hover:scale-110 hover:border-2 hover:border-blue-400"
        >
          &#8592;
        </button>

        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)`}}
        >
          {groupedTineraries.map((group, index) => (
            <div key={index} className="flex-wrap flex-shrink-0 w-full flex justify-evenly items-center ">
              {group.map((tinerarie) => (
                <div key={tinerarie.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mx-2 flex flex-col items-center">
                  <img
                    src={tinerarie.img}
                    alt={tinerarie.name}
                    className="w-full h-40 sm:h-48 md:h-60 object-cover rounded-lg shadow-lg"
                  />
                  <h3 className="bg-white p-2 rounded-full shadow-md mt-2 text-center text-lg font-semibold">
                    {tinerarie.name}
                  </h3>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/*Next Slide Button*/} 
        <button
        onClick={nextSlide}
        className="w-12 h-12 absolute right-0 bg-blue-500 transition ease-in-out delay-100 text-white m-2 p-2 rounded-full hover:scale-110 hover:border-2 hover:border-blue-400"
      >
        &#8594;
      </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {groupedTineraries.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-blue-700" : "bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselTineraries;