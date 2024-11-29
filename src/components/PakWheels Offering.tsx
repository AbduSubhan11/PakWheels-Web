import Image from "next/image";
import React from "react";

interface data {
  id: number;
  Image: string;
  Description: string;
}
const Data: data[] = [
  {
    id: 1,
    Image: "/image/1.png",
    Description: "SELL IT FOR ME",
  },
  {
    id: 2,
    Image: "/image/2.png",
    Description: "AUCTION SHEET VERIFICATION",
  },
  {
    id: 3,
    Image: "/image/3.png",
    Description: "CAR INSPECTION",
  },
  {
    id: 4,
    Image: "/image/4.png",
    Description: "PARTNER WORKSHOP",
  },
  {
    id: 5,
    Image: "/image/5.png",
    Description: "CAR INSURANCE",
  },
  {
    id: 6,
    Image: "/image/6.png",
    Description: "CAR FINANCE",
  },
  {
    id: 7,
    Image: "/image/7.png",
    Description: "CAR REGISTRATION",
  },
  {
    id: 8,
    Image: "/image/8.png",
    Description: "OWNERSHIP TRANSFER",
  },
];

function PakWheelsOffering() {
  return (
    <section className="flex flex-col gap-10 items-center justify-center py-10">
      <h1 className="text-2xl text-gray-700 font-semibold">PakWheels Offerings</h1>
      <div className="grid grid-cols-2 gap-10">
        {/* CARD */}
        {Data.map((val: data) => (
          <div key={val.id} className="flex border w-96 gap-5 p-5 cursor-pointer hover:shadow-md">
            <Image src={val.Image} alt="Image" width={100} height={100} />
            <div>
              <h1 className="text-[#518ECB] font-semibold text-xl">
                PakWheels
              </h1>
              <p>{val.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PakWheelsOffering;
