import Image from "next/image";
import React from "react";

function CarComparisons() {
  return (
    <section className="py-10 flex flex-col items-center justify-center">
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Car Compariosns</h1>
          <p className="text-blue-600 hover:underline cursor-pointer">
            All Car Comparisons
          </p>
        </div>
        <div className="border-2 px-10 py-5 grid grid-cols-2 gap-10">
          {/* LEFT */}
          <div className="space-y-5">
            <div className="flex gap-10">
              <div>
                <Image
                  src={"/image/daihatsu.jpg"}
                  alt="Daihastu"
                  width={100}
                  height={100}
                />
                <h1>Daihastu</h1>
              </div>
              <div className="space-y-10">
                <Image
                  src={"/image/KIA sportage 2021.webp"}
                  alt="KIA"
                  width={120}
                  height={100}
                />
                <h1 className="text-[#012249] font-semibold">KIA Sportage</h1>
              </div>
            </div>
            <div>
              <button className="border border-[#012249] w-full px-10 hover:text-blue-600 text-[#012249]">
                View Comparisons
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center py-2 border-b w-full">
              <h1>Toyota Corolla</h1>
              <div className="bg-[#B73439] h-10 flex flex-col items-center justify-center text-white rounded-full p-3">
                VS
              </div>
              <h1>Honda Civic</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1>Changan Oshan X7</h1>
              <div className="bg-[#B73439] h-10 flex flex-col items-center justify-center text-white rounded-full p-3">
                VS
              </div>
              <h1>KIA Sportage</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarComparisons;
