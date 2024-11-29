import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface cardata {
  id: number;
  image: string;
  name: string;
  price: number;
  city: string;
}
const carData: cardata[] = [
  {
    id: 1,
    image: "/image/Vezel.webp",
    name: "Honda Vezel 2014",
    price: 4400000,
    city: "Lahore",
  },
  {
    id: 2,
    image: "/image/civic.jpg",
    name: "Honda Civic 2017",
    price: 3750000,
    city: "Islamabad",
  },
  {
    id: 3,
    image: "/image/prius.webp",
    name: "Toyota Prius 2008",
    price: 2800000,
    city: "Rawalpindi",
  },
  {
    id: 4,
    image: "/image/Daihatsu.png",
    name: "Daihastu C",
    price: 2800000,
    city: "Karachi",
  },
];
function ManagedbyPakWheel() {
  return (
    <section className="bg-[#F2F3F3] py-10 flex flex-col items-center justify-center">
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Managed by PakWheels</h1>
          <p className="text-blue-600 cursor-pointer">
            View All Managed By PakWheels Cars
          </p>
        </div>
        <Carousel className="max-w-5xl">
          <CarouselContent>
            <CarouselItem className="grid grid-cols-4 gap-10">
              {carData.map((val: cardata) => (
                <div
                  key={val.id}
                  className="bg-white w-52 h-[250px] flex flex-col overflow-hidden"
                >
                  <div className="h-[60%] bg-gray-200 flex justify-center items-center">
                    <Image
                      src={val.image}
                      alt={val.name}
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 h-[40%]">
                    <h1 className="text-[#012045] font-semibold text-lg truncate">
                      {val.name}
                    </h1>
                    <h1 className="text-[#3EB549] text-md font-bold">
                      PKR {val.price}
                    </h1>
                    <p className="text-sm text-gray-500">{val.city}</p>
                  </div>
                </div>
              ))}
            </CarouselItem>
            <CarouselItem className="grid grid-cols-4 gap-10">
              {carData.map((val: cardata) => (
                <div
                  key={val.id}
                  className="bg-white w-52 h-[250px] flex flex-col overflow-hidden"
                >
                  <div className="h-[60%] bg-gray-200 flex justify-center items-center">
                    <Image
                      src={val.image}
                      alt={val.name}
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 h-[40%]">
                    <h1 className="text-[#012045] font-semibold text-lg truncate">
                      {val.name}
                    </h1>
                    <h1 className="text-[#3EB549] text-md font-bold">
                      PKR {val.price}
                    </h1>
                    <p className="text-sm text-gray-500">{val.city}</p>
                  </div>
                </div>
              ))}
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default ManagedbyPakWheel;
