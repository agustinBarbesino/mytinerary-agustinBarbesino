import { useEffect, useState } from "react";
import CarouselTineraries from "./Carousel";
import CallToAction from "./CallToAction";

const Main = () => {
    return(
        <>
            <div className="w-full min-h-full flex flex-col justify-between items-center p-3">
                <div className="w-1/3 bg-white rounded-lg flex flex-col justify-between items-center m-3 p-4 shadow-md">
                    <h1 className="font-bold text-lg sm:text-xl md:text-3xl p-3 text-center">MyTinerary</h1>
                </div>
                <div className="w-full sm:w-3/4 md:w-1/2 bg-white rounded-lg flex flex-col justify-between items-center mx-auto m-4 p-4 shadow-md">
                    <p className="font-medium text-sm sm:text-base md:text-xl m-3 p-3 text-center">
                        Find your perfect trip, designed by insiders who know and love their cities!
                    </p>
                </div>
                <div className="h-52 m-3 p-3 flex justify-center">
                    <CallToAction/>
                </div>
                <div className="m-3 p-3 flex justify-center">
                    <CarouselTineraries />
                </div>
            </div>
        </>
    )
}

export default Main