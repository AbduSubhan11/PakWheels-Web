import Image from "next/image";
import React from "react";

function NewBikesbyMake() {
  return (
    <section className="flex flex-col items-center py-10 space-y-10">
      <div className="space-y-10">
        <h1 className="text-2xl font-semibold">New Bikes by Make</h1>
        <div className="grid grid-cols-6 gap-x-28 gap-y-5">
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={"/image/Yamaha Bike Logo.png"}
                alt="Logo"
                width={60}
                height={150}
                className="rounded-full"
              />
              <h1 className="text-[#012045] font-semibold text-lg">Yamaha</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewBikesbyMake;
