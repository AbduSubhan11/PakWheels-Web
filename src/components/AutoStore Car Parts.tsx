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

const CategoryTabData: { name: string }[] = [
  {
    name: "Automatic cars",
  },
  {
    name: "Family Cars",
  },
  {
    name: "5 Seater",
  },
  {
    name: "Small Cars",
  },
  {
    name: "Big Cars",
  },
  {
    name: "Imported Cars",
  },
  {
    name: "Old Cars",
  },
  {
    name: "5 Door",
  },
  {
    name: "4 Door",
  },
  {
    name: "1000cc cars",
  },
  {
    name: "Japanese Cars",
  },
];
const BrandTabData: { name: string }[] = [
  {
    name: "Sedan",
  },
  {
    name: "Hatchback",
  },
  {
    name: "SUV",
  },
  {
    name: "Crossover",
  },
  {
    name: "Mini Van",
  },
  {
    name: "Compact SUV",
  },
  {
    name: "Mpv",
  },
  {
    name: "Van",
  },
  {
    name: "Compact Sedan",
  },
  {
    name: "Double Cabin",
  },
  {
    name: "Micro Van",
  },
];
function AutoStoreuCarParts() {
  return (
    <section className="bg-[#F2F3F3] flex flex-col items-center py-10 h-[500px] space-y-10">
      <h1 className="text-2xl text-gray-700 font-semibold">
        Auto Store Car Parts & Accessories
      </h1>
      <Tabs defaultValue="SubCategory" className="w-[1000px]">
        <TabsList>
          <TabsTrigger value="SubCategory">SubCategory</TabsTrigger>
          <TabsTrigger value="Make">Make</TabsTrigger>
          <TabsTrigger value="Model">Model</TabsTrigger>
          <TabsTrigger value="Brand">Brand</TabsTrigger>
        </TabsList>
        <TabsContent value="SubCategory">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-6 gap-5">
                  {CategoryTabData.map((val: {name:string},index) => (
                    <div key={index} className="group hover:shadow-md flex flex-col items-center justify-center rounded-md space-y-2 py-2 bg-white w-32 cursor-pointer">
                      <Image
                        src={"/image/Air Fresher.png"}
                        alt="AIr Freshener Image"
                        width={100}
                        height={100}
                      />
                      <p className="text-center text-gray-400 group-hover:font-semibold">
                        {val.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-6 gap-2">
                  {CategoryTabData.map((val: {name:string},index) => (
                    <div key={index} className="group hover:shadow-md flex flex-col items-center justify-center rounded-md space-y-4 py-2 bg-white w-32 cursor-pointer">
                      <Image
                        src={"/image/Toyota.png"}
                        alt="AIr Freshener Image"
                        width={100}
                        height={100}
                      />
                      <p className="text-center text-gray-400 group-hover:font-semibold">
                        {val.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
        <TabsContent value="City">
          <div className="grid grid-cols-6 gap-10">
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Karachi
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Lahore
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Islamabad
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Rawalpindi
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Peshawar
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Faisalabad
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Multan
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Gujranwala
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Sialkot
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Sargodha
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Make">
          <div className="grid grid-cols-6 gap-10">
            <div className="group hover:shadow-md flex flex-col items-center justify-center rounded-md bg-white w-32 cursor-pointer">
              <Image
                src={"/image/Toyota.png"}
                alt="Toyota Image"
                width={100}
                height={100}
              />
              <p className="text-center text-gray-400 group-hover:font-semibold">
                Toyota
              </p>
            </div>
            <div className="group hover:shadow-md flex flex-col items-center justify-center rounded-md bg-white w-32 cursor-pointer">
              <Image
                src={"/image/suzuki.png"}
                alt="Suzuki Image"
                width={100}
                height={100}
              />
              <p className="text-center text-gray-400 group-hover:font-semibold">
                Suzuki
              </p>
            </div>
            <div className="group hover:shadow-md flex flex-col items-center justify-center rounded-md bg-white w-32 cursor-pointer">
              <Image
                src={"/image/Honda.png"}
                alt="Honda Image"
                width={100}
                height={100}
              />
              <p className="text-center text-gray-400 group-hover:font-semibold">
                Honda
              </p>
            </div>
            <div className="group hover:shadow-md flex flex-col items-center justify-center rounded-md bg-white w-32 cursor-pointer">
              <Image
                src={"/image/Daihatsu.png"}
                alt="Daihatsu Image"
                width={100}
                height={100}
              />
              <p className="text-center text-gray-400 group-hover:font-semibold">
                Daihatsu
              </p>
            </div>
            <div className="group hover:shadow-md flex flex-col items-center justify-center rounded-md bg-white w-32 cursor-pointer">
              <Image
                src={"/image/Nisan.png"}
                alt="Nisan Image"
                width={100}
                height={100}
              />
              <p className="text-center text-gray-400 group-hover:font-semibold">
                Nissan
              </p>
            </div>
            <div className="group hover:shadow-md flex flex-col items-center justify-center rounded-md bg-white w-32 cursor-pointer">
              <Image
                src={"/image/KIA.png"}
                alt="KIA Image"
                width={100}
                height={100}
              />
              <p className="text-center text-gray-400 group-hover:font-semibold">
                KIA
              </p>
            </div>
            <div className="group hover:shadow-md flex flex-col items-center justify-center rounded-md bg-white w-32 cursor-pointer">
              <Image
                src={"/image/Hyundai.png"}
                alt="Hyundai Image"
                width={100}
                height={100}
              />
              <p className="text-center text-gray-400 group-hover:font-semibold">
                Hyundai
              </p>
            </div>
            <div className="group hover:shadow-md flex flex-col items-center justify-center rounded-md bg-white w-32 cursor-pointer">
              <Image
                src={"/image/Changan.jpg"}
                alt="Changan Image"
                width={100}
                height={100}
              />
              <p className="text-center text-gray-400 group-hover:font-semibold">
                Changan
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Model">
          <div className="grid grid-cols-6 gap-10">
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Corolla
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Civic
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Mehran
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              City
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Cultus
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Alto
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Wagon R
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Vitz
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Mira
            </div>
            <div className="text-gray-500 hover:text-gray-800 cursor-pointer">
              Swift
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Brand">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-6 gap-10">
                  {BrandTabData.map((val: {name:string},index) => (
                    <div key={index} className="group hover:shadow-md flex flex-col items-center justify-center rounded-md space-y-4 py-2 bg-white w-32 cursor-pointer">
                      <svg
                        width="60"
                        height="41"
                        viewBox="0 0 60 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M47.3543 35.851C45.2058 35.7349 43.5606 33.9416 43.6796 31.8456C43.7986 29.7495 45.6367 28.1444 47.7852 28.2605C49.9336 28.3766 51.5788 30.1699 51.4598 32.2659C51.3409 34.362 49.5027 35.9671 47.3543 35.851Z"
                          stroke="#878787"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M14.0806 28.2551C16.2159 28.2551 17.9766 29.9729 17.9766 32.0561C17.9766 34.1393 16.2159 35.857 14.0806 35.857C11.9453 35.857 10.1847 34.1393 10.1847 32.0561C10.1847 29.9729 11.9453 28.2551 14.0806 28.2551Z"
                          stroke="#878787"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M4.00401 30.1555C4.00401 29.9362 4.52846 29.9362 4.52846 29.7534C4.60338 28.4743 4.6783 27.0489 4.82815 25.7332C5.01545 24.1617 8.31204 24.0886 10.3349 23.4673C11.7959 23.0287 12.9572 22.0785 14.8303 21.2744C16.8532 20.3973 18.6513 19.5932 20.7866 19.5932C24.2705 19.5932 29.4401 19.1912 32.6992 20.178C35.8085 21.1282 38.6555 22.8825 41.5775 24.2348C45.1363 24.6002 49.1072 25.2946 52.7409 26.1718C53.9022 26.4642 54.4267 26.9758 54.7638 27.6702C55.1384 28.4012 55.3257 29.0956 55.5131 29.5342C55.8127 29.5707 55.8127 29.4976 55.8877 29.6438C56 29.8265 55.9251 30.0458 55.9626 30.3382C56 30.9595 56.0001 31.8001 55.8502 32.3849C55.7004 32.9331 55.5505 33.1889 55.2883 33.4082C55.0635 33.5544 54.8388 33.664 54.5391 33.7006L53.2279 33.7371C52.4412 33.5909 52.5911 33.4813 52.6285 32.531C52.6285 32.3849 52.6285 32.2387 52.6285 32.0925C52.6285 29.3514 50.3809 27.1586 47.5713 27.1586C44.7617 27.1586 42.514 29.3514 42.514 32.0925C42.514 32.3849 42.514 32.6407 42.5515 32.8965C42.6639 34.5412 42.8137 34.2488 41.2778 34.3219L20.0374 34.2853C18.9135 34.1391 18.9885 34.2853 19.1008 32.8965C19.1383 32.6407 19.1383 32.3483 19.1383 32.0559C19.1383 29.3149 16.8906 27.122 14.0811 27.122C11.2715 27.122 9.0238 29.3149 9.0238 32.0559C9.0238 32.2752 9.0238 32.531 9.06126 32.7503C9.13618 33.8833 8.83649 33.7737 8.0498 33.7371C7.26312 33.664 6.36406 33.5909 5.6523 33.4813C5.09038 33.3716 4.6783 33.262 4.491 33.1158C3.92908 32.6041 4.00401 30.9961 4.00401 30.1555ZM26.4807 20.909C26.7804 21.6765 26.8928 23.3942 27.0801 24.5272C27.155 25.0754 27.3048 25.2216 27.8667 25.2216C30.1144 25.2581 36.1831 25.6601 36.1831 25.5505C36.4079 25.4408 37.2695 24.4906 37.9438 24.0155C36.4453 22.9556 34.2726 21.7861 32.2872 21.1282C31.5754 20.909 29.7023 20.6166 28.3912 20.58L26.7055 20.5435C26.4058 20.5435 26.3683 20.6897 26.4807 20.909ZM14.8303 23.5404C14.9052 23.7962 15.1674 24.2713 15.3173 24.4906C15.4296 24.6368 15.542 24.7464 15.8043 24.7464C16.4786 24.783 17.7897 24.8195 18.5764 24.8561C20.7491 24.9657 23.0717 25.1119 24.9822 25.1485C25.7689 25.1485 25.8064 25.3312 25.7315 24.6733C25.4318 22.1881 25.3569 21.3475 25.1321 20.7628C25.0946 20.6531 24.8699 20.58 24.72 20.58L21.7606 20.6166C20.8615 20.6166 19.9624 20.7993 19.0634 21.0551C18.9135 21.0917 18.6513 21.2013 18.3142 21.3475L17.7897 21.5668C16.6659 22.0785 15.2423 22.8094 15.0176 23.1018C14.7554 23.2845 14.7554 23.3576 14.8303 23.5404Z"
                          fill="#F6F6F6"
                        />
                        <path
                          d="M41.2778 33.3219L20.0374 33.2854"
                          stroke="#878787"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M53.2279 33.7371L54.5391 33.7006C54.8388 33.664 55.0635 33.5544 55.2883 33.4082C55.5505 33.1889 55.7004 32.9331 55.8502 32.3849C56.0001 31.8001 56 30.9595 55.9626 30.3382C55.9251 30.0458 56 29.8265 55.8877 29.6438C55.8127 29.4976 55.8127 29.5707 55.5131 29.5342C55.3257 29.0956 55.1384 28.4012 54.7638 27.6702C54.4267 26.9758 53.9022 26.4642 52.7409 26.1718C49.1072 25.2946 45.1363 24.6002 41.5775 24.2348C38.6555 22.8825 35.8085 21.1282 32.6992 20.178C29.4401 19.1912 24.2705 19.5932 20.7866 19.5932C18.6513 19.5932 16.8532 20.3973 14.8303 21.2744C12.9572 22.0785 11.7959 23.0287 10.3349 23.4673C8.31204 24.0886 5.01545 24.1617 4.82815 25.7332C4.6783 27.0489 4.60339 28.4743 4.52847 29.7534C4.52847 29.9362 4.00401 29.9362 4.00401 30.1555C4.00401 30.996 3.92908 32.6041 4.491 33.1158C4.6783 33.262 5.09038 33.3716 5.6523 33.4813C6.36406 33.5909 7.26312 33.664 8.04981 33.7371"
                          stroke="#878787"
                          strokeMiterlimit="10"
                        />
                      </svg>
                      <p className="text-center text-gray-400 group-hover:font-semibold">
                        {val.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-4 gap-10">
                  {BrandTabData.map((val: {name:string},index) => (
                    <div key={index} className="group hover:shadow-md flex flex-col items-center justify-center rounded-md space-y-4 py-2 bg-white w-32 cursor-pointer">
                      <svg
                        width="60"
                        height="41"
                        viewBox="0 0 60 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M47.3543 35.851C45.2058 35.7349 43.5606 33.9416 43.6796 31.8456C43.7986 29.7495 45.6367 28.1444 47.7852 28.2605C49.9336 28.3766 51.5788 30.1699 51.4598 32.2659C51.3409 34.362 49.5027 35.9671 47.3543 35.851Z"
                          stroke="#878787"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M14.0806 28.2551C16.2159 28.2551 17.9766 29.9729 17.9766 32.0561C17.9766 34.1393 16.2159 35.857 14.0806 35.857C11.9453 35.857 10.1847 34.1393 10.1847 32.0561C10.1847 29.9729 11.9453 28.2551 14.0806 28.2551Z"
                          stroke="#878787"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M4.00401 30.1555C4.00401 29.9362 4.52846 29.9362 4.52846 29.7534C4.60338 28.4743 4.6783 27.0489 4.82815 25.7332C5.01545 24.1617 8.31204 24.0886 10.3349 23.4673C11.7959 23.0287 12.9572 22.0785 14.8303 21.2744C16.8532 20.3973 18.6513 19.5932 20.7866 19.5932C24.2705 19.5932 29.4401 19.1912 32.6992 20.178C35.8085 21.1282 38.6555 22.8825 41.5775 24.2348C45.1363 24.6002 49.1072 25.2946 52.7409 26.1718C53.9022 26.4642 54.4267 26.9758 54.7638 27.6702C55.1384 28.4012 55.3257 29.0956 55.5131 29.5342C55.8127 29.5707 55.8127 29.4976 55.8877 29.6438C56 29.8265 55.9251 30.0458 55.9626 30.3382C56 30.9595 56.0001 31.8001 55.8502 32.3849C55.7004 32.9331 55.5505 33.1889 55.2883 33.4082C55.0635 33.5544 54.8388 33.664 54.5391 33.7006L53.2279 33.7371C52.4412 33.5909 52.5911 33.4813 52.6285 32.531C52.6285 32.3849 52.6285 32.2387 52.6285 32.0925C52.6285 29.3514 50.3809 27.1586 47.5713 27.1586C44.7617 27.1586 42.514 29.3514 42.514 32.0925C42.514 32.3849 42.514 32.6407 42.5515 32.8965C42.6639 34.5412 42.8137 34.2488 41.2778 34.3219L20.0374 34.2853C18.9135 34.1391 18.9885 34.2853 19.1008 32.8965C19.1383 32.6407 19.1383 32.3483 19.1383 32.0559C19.1383 29.3149 16.8906 27.122 14.0811 27.122C11.2715 27.122 9.0238 29.3149 9.0238 32.0559C9.0238 32.2752 9.0238 32.531 9.06126 32.7503C9.13618 33.8833 8.83649 33.7737 8.0498 33.7371C7.26312 33.664 6.36406 33.5909 5.6523 33.4813C5.09038 33.3716 4.6783 33.262 4.491 33.1158C3.92908 32.6041 4.00401 30.9961 4.00401 30.1555ZM26.4807 20.909C26.7804 21.6765 26.8928 23.3942 27.0801 24.5272C27.155 25.0754 27.3048 25.2216 27.8667 25.2216C30.1144 25.2581 36.1831 25.6601 36.1831 25.5505C36.4079 25.4408 37.2695 24.4906 37.9438 24.0155C36.4453 22.9556 34.2726 21.7861 32.2872 21.1282C31.5754 20.909 29.7023 20.6166 28.3912 20.58L26.7055 20.5435C26.4058 20.5435 26.3683 20.6897 26.4807 20.909ZM14.8303 23.5404C14.9052 23.7962 15.1674 24.2713 15.3173 24.4906C15.4296 24.6368 15.542 24.7464 15.8043 24.7464C16.4786 24.783 17.7897 24.8195 18.5764 24.8561C20.7491 24.9657 23.0717 25.1119 24.9822 25.1485C25.7689 25.1485 25.8064 25.3312 25.7315 24.6733C25.4318 22.1881 25.3569 21.3475 25.1321 20.7628C25.0946 20.6531 24.8699 20.58 24.72 20.58L21.7606 20.6166C20.8615 20.6166 19.9624 20.7993 19.0634 21.0551C18.9135 21.0917 18.6513 21.2013 18.3142 21.3475L17.7897 21.5668C16.6659 22.0785 15.2423 22.8094 15.0176 23.1018C14.7554 23.2845 14.7554 23.3576 14.8303 23.5404Z"
                          fill="#F6F6F6"
                        />
                        <path
                          d="M41.2778 33.3219L20.0374 33.2854"
                          stroke="#878787"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M53.2279 33.7371L54.5391 33.7006C54.8388 33.664 55.0635 33.5544 55.2883 33.4082C55.5505 33.1889 55.7004 32.9331 55.8502 32.3849C56.0001 31.8001 56 30.9595 55.9626 30.3382C55.9251 30.0458 56 29.8265 55.8877 29.6438C55.8127 29.4976 55.8127 29.5707 55.5131 29.5342C55.3257 29.0956 55.1384 28.4012 54.7638 27.6702C54.4267 26.9758 53.9022 26.4642 52.7409 26.1718C49.1072 25.2946 45.1363 24.6002 41.5775 24.2348C38.6555 22.8825 35.8085 21.1282 32.6992 20.178C29.4401 19.1912 24.2705 19.5932 20.7866 19.5932C18.6513 19.5932 16.8532 20.3973 14.8303 21.2744C12.9572 22.0785 11.7959 23.0287 10.3349 23.4673C8.31204 24.0886 5.01545 24.1617 4.82815 25.7332C4.6783 27.0489 4.60339 28.4743 4.52847 29.7534C4.52847 29.9362 4.00401 29.9362 4.00401 30.1555C4.00401 30.996 3.92908 32.6041 4.491 33.1158C4.6783 33.262 5.09038 33.3716 5.6523 33.4813C6.36406 33.5909 7.26312 33.664 8.04981 33.7371"
                          stroke="#878787"
                          strokeMiterlimit="10"
                        />
                      </svg>
                      <p className="text-center text-gray-400 group-hover:font-semibold">
                        {val.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default AutoStoreuCarParts;
