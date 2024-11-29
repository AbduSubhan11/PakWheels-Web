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
    image: "/image/honda city.webp",
    name: "Honda City 2018",
    price: 3600000,
    city: "Sialkot",
  },
  {
    id: 2,
    image: "/image/land cruiser.webp",
    name: "Land Cruiser 2011",
    price: 27500000,
    city: "Faisalabad",
  },
  {
    id: 3,
    image: "/image/land cruiser 2022.webp",
    name: "Toyota Land Cruiser 2022",
    price: 88000000,
    city: "Islamabad",
  },
  {
    id: 4,
    image: "/image/KIA sportage 2021.webp",
    name: "KIA Sportage 2021",
    price: 6350000,
    city: "Lahore",
  },
];

function FeaturedUsedCardSale() {
  return (
    <section className="py-10 flex flex-col items-center justify-center">
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            Featured Used Cars for Sale
          </h1>
          <p className="text-blue-600 cursor-pointer">
            View All Featured Used Cars
          </p>
        </div>
        <Carousel className="max-w-5xl">
          <CarouselContent>
            <CarouselItem className="grid grid-cols-4 gap-10">
              {" "}
              {carData.map((val: cardata) => (
                <div
                  key={val.id}
                  className="bg-white w-52 h-[250px] border flex flex-col overflow-hidden"
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
                  className="bg-white w-52 h-[250px] border flex flex-col overflow-hidden"
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

export default FeaturedUsedCardSale;
