import Image from "next/image";
import React from "react";

function GetPakWheelsApp() {
  return (
    <section className="flex items-center justify-center py-10">
      <div className="flex items-center gap-10">
        <div className="space-y-3">
          <h1 className="text-[#233D7B] text-2xl font-semibold">
            Get The PakWheels App
          </h1>
          <p>
            Buy & Sell Cars, Bikes and Auto Parts faster and better using our
            App
          </p>
          <Image
            src={"/image/Download Apps.png"}
            alt="Download Apps Image"
            width={150}
            height={150}
          />
        </div>
        <div>
            <Image src={"/image/mobile app scanner.png"} alt="Scanner Image" width={500} height={150}/>
        </div>
      </div>
    </section>
  );
}

export default GetPakWheelsApp;
