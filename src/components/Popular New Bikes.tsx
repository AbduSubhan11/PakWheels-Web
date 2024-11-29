import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
interface Bikedata {
  id: number;
  name: string;
  price: number;
  rating: number;
}
const NewBikeData: Bikedata[] = [
  {
    id: 1,
    name: "Honda CD 70",
    price: 157900,
    rating: 65,
  },
  {
    id: 2,
    name: "Honda CG 125",
    price: 234900,
    rating: 102,
  },
  {
    id: 3,
    name: "Suzuki GS 150",
    price: 389000,
    rating: 96,
  },
  {
    id: 4,
    name: "Yamaha YBR 125",
    price: 466000,
    rating: 46,
  },
];

function PopularNewBikes() {
  return (
    <section className="bg-[#F2F3F3] py-10 flex flex-col items-center justify-center">
      <div className="space-y-10 ">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Popular New Bikes</h1>
          <p className="text-blue-600 cursor-pointer hover:underline">
            View All New Bikes
          </p>
        </div>
        <Carousel className="max-w-5xl">
          <CarouselContent>
            <CarouselItem className="grid grid-cols-4 gap-10">
              {NewBikeData.map((val: Bikedata) => (
                <div
                  key={val.id}
                  className="bg-white w-52 h-[250px] flex flex-col overflow-hidden"
                >
                  <div className="h-[50%] bg-gray-200 flex justify-center items-center">
                    <Image
                      src={"/image/BMW bike.jpg"}
                      alt={val.name}
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 h-[50%] flex flex-col items-center">
                    <h1 className="text-[#012045] font-semibold text-lg truncate">
                      {val.name}
                    </h1>
                    <h1 className="text-[#3EB549] text-md font-bold">
                      PKR {val.price}
                    </h1>
                    <div className="flex items-center gap-3">
                      <Image
                        src={"/image/rating.png"}
                        alt="Rating Image"
                        width={50}
                        height={100}
                      />
                      <h1 className="text-sm text-gray-500">
                        {val.rating} Reviews
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </CarouselItem>
            <CarouselItem className="grid grid-cols-4 gap-10">
              {NewBikeData.map((val: Bikedata) => (
                <div
                  key={val.id}
                  className="bg-white w-52 h-[250px] flex flex-col overflow-hidden"
                >
                  <div className="h-[50%] bg-gray-200 flex justify-center items-center">
                    <Image
                      src={"/image/BMW bike.jpg"}
                      alt={val.name}
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 h-[50%] flex flex-col items-center">
                    <h1 className="text-[#012045] font-semibold text-lg truncate">
                      {val.name}
                    </h1>
                    <h1 className="text-[#3EB549] text-md font-bold">
                      PKR {val.price}
                    </h1>
                    <div className="flex items-center gap-3">
                      <Image
                        src={"/image/rating.png"}
                        alt="Rating Image"
                        width={50}
                        height={100}
                      />
                      <h1 className="text-sm text-gray-500">
                        {val.rating} Reviews
                      </h1>
                    </div>
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

export default PopularNewBikes;
