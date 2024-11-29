import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  rating: number;
}
const carData: cardata[] = [
  {
    id: 1,
    image: "/image/Vezel.webp",
    name: "Honda Vezel 2014",
    price: 4400000,
    rating: 626,
  },
  {
    id: 2,
    image: "/image/civic.jpg",
    name: "Honda Civic 2017",
    price: 3750000,
    rating: 202,
  },
  {
    id: 3,
    image: "/image/prius.webp",
    name: "Toyota Prius 2008",
    price: 2800000,
    rating: 457,
  },
  {
    id: 4,
    image: "/image/Daihatsu.png",
    name: "Daihastu C",
    price: 2800000,
    rating: 363,
  },
];

interface UpcomingTabData {
  id: number;
  image: string;
  name: string;
  price: number;
  city: string;
}

const UpcomingTabData: UpcomingTabData[] = [
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

function FeaturedNewCars() {
  return (
    <section className="bg-[#F2F3F3] py-10 flex flex-col items-center justify-center">
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Featured New Cars</h1>
          <p className="text-blue-600 cursor-pointer">View All New Cars</p>
        </div>
        <Tabs defaultValue="Popular">
          <TabsList>
            <TabsTrigger value="Popular">Popular</TabsTrigger>
            <TabsTrigger value="Upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="Newly Launched">Newly Launched</TabsTrigger>
          </TabsList>
          <TabsContent value="Popular">
            <Carousel className="max-w-5xl">
              <CarouselContent>
                <CarouselItem className="grid grid-cols-4 gap-10">
                  {carData.map((val: cardata) => (
                    <div
                      key={val.id}
                      className="bg-white w-52 h-[250px] flex flex-col overflow-hidden"
                    >
                      <div className="h-[50%] bg-gray-200 flex justify-center items-center">
                        <Image
                          src={val.image}
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
                  {carData.map((val: cardata) => (
                    <div
                      key={val.id}
                      className="bg-white w-52 h-[250px] flex flex-col overflow-hidden"
                    >
                      <div className="h-[50%] bg-gray-200 flex justify-center items-center">
                        <Image
                          src={val.image}
                          alt={val.name}
                          width={1000}
                          height={1000}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-4 h-[50%] flex flex-col items-center">
                        <h1 className="text-[#012045] font-semibold text-lg">
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
          </TabsContent>

          <TabsContent value="Upcoming">
            <Carousel className="max-w-5xl">
              <CarouselContent>
                <CarouselItem className="grid grid-cols-4 gap-10">
                  {" "}
                  {UpcomingTabData.map((val: UpcomingTabData) => (
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
                  {UpcomingTabData.map((val: UpcomingTabData) => (
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
          </TabsContent>

          <TabsContent value="Newly Launched">
            <Carousel className="max-w-5xl">
              <CarouselContent>
                <CarouselItem className="grid grid-cols-4 gap-10">
                  {carData.map((val: cardata) => (
                    <div
                      key={val.id}
                      className="bg-white w-52 h-[250px] flex flex-col overflow-hidden"
                    >
                      <div className="h-[50%] bg-gray-200 flex justify-center items-center">
                        <Image
                          src={val.image}
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
                  {carData.map((val: cardata) => (
                    <div
                      key={val.id}
                      className="bg-white w-52 h-[250px] flex flex-col overflow-hidden"
                    >
                      <div className="h-[50%] bg-gray-200 flex justify-center items-center">
                        <Image
                          src={val.image}
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
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
        <div className="space-y-10">
          <h1 className="text-2xl font-semibold">New Cars by Make</h1>
          <div className="grid grid-cols-6 gap-6">
            {Array.from({ length: 32 }).map((_,index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <Image
                  src={"/image/Changan.jpg"}
                  alt="Logo"
                  width={60}
                  height={150}
                  className="rounded-full"
                />
                <h1 className="text-[#012045] font-semibold text-lg">
                  Changan
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedNewCars;
