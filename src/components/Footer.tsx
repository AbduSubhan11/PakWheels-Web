import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-[#23292F] py-10 gap-5 flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <div className="space-y-2">
            <h1 className="text-white text">Cars By Make</h1>
            <div className="text-sm text-[#6E7173]">
              <p>Toyota Cars for Sale</p>
              <p>Suzuki Cars for Sale</p>
              <p>Honda Cars for Sale</p>
              <p>Daihatsu Cars for Sale</p>
              <p>Mitsubishi Cars for Sale</p>
              <p>Nissan Cars for Sale</p>
              <p>Mercedes Cars for Sale</p>
              <p>Hyundai Cars for Sale</p>
              <p>BMW Cars for Sale</p>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-white text">Cars By City</h1>
            <div className="text-sm text-[#6E7173]">
              <p>Cars in Karachi</p>
              <p>Cars in Lahore</p>
              <p>Cars in Islamabad</p>
              <p>Cars in Rawalpindi</p>
              <p>Cars in Peshawar</p>
              <p>Cars in Faisalabad</p>
              <p>Cars in Multan</p>
              <p>Cars in Gujranwala</p>
              <p>Cars in Sialkot</p>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-white text">Explore PakWheels</h1>
            <div className="text-sm text-[#6E7173]">
              <p>Used Cars</p>
              <p>Used Bikes</p>
              <p>New Cars</p>
              <p>Auto Parts & Accessories</p>
              <p>Cool Rides</p>
              <p>Forums</p>
              <p>Autoshow</p>
              <p>Sitemap</p>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-white text">PakWheels.com</h1>
            <div className="text-sm text-[#6E7173]">
              <p>About PakWheels.com</p>
              <p>Our Products</p>
              <p>Advertise With Us</p>
              <p>How To Pay</p>
              <p>FAQs</p>
              <p>Refunds & Returns</p>
              <p>Careers</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-white text">Cars by Category</h1>
            <div className="text-sm text-[#6E7173]">
              <p>Jeep</p>
              <p>Japanese Cars</p>
              <p>Imported Cars</p>
              <p>Automatic Cars</p>
              <p>Low Priced Cars</p>
              <p>4x4 Cars</p>
              <p>660cc Cars</p>
              <p>1000cc Cars</p>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-white text">Cars by Body Type</h1>
            <div className="text-sm text-[#6E7173]">
              <p>Sedan</p>
              <p>Hatchback</p>
              <p>SUV</p>
              <p>Crossover</p>
              <p>Mini Van</p>
              <p>Compact SUV</p>
              <p>MPV</p>
              <p>Van</p>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-white text">Cars by Color</h1>
            <div className="text-sm text-[#6E7173]">
              <p>White Cars</p>
              <p>SIlver Cars</p>
              <p>Black Cars</p>
              <p>Grey Cars</p>
              <p>Blue Cars</p>
              <p>Red Cars</p>
              <p>Green Cars</p>
              <p>Gold Cars</p>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-white text">Cars by Province</h1>
            <div className="text-sm text-[#6E7173]">
              <p>Cars in Punjab</p>
              <p>Cars in Sindh</p>
              <p>Cars in KPK</p>
              <p>Cars in Balochistan</p>
              <p>Cars in Azad Kashmir</p>
              <p>Cars in Federally Administered</p>
              <p>Tribal Areas</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-white text-xl">Sell On PakWheels</h1>
          <div className="text-sm text-[#6E7173] ">
            <p>Sell Your Car</p>
            <p>Sell Your Bike</p>
            <p>Sell Accessory</p>
          </div>
          <div className="space-y-2">
            <h1 className="text-white text-xl">Subscribe to our Newsletter</h1>
            <div className="flex items-center">
              <input
                type="text"
                className="h-10 text-black outline-none pl-2 rounded-l-md"
                placeholder="name@gmail.com"
              />

              <Button
                variant={"outline"}
                className="bg-[#318F3A] h-10 text-white px-10 w-16 outline-none"
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div className="space-y-2 pt-5">
            <h1 className="text-white text-xl">Follow Us</h1>
            <Image
              src={"/image/social icons.jpg"}
              alt="Social Icons"
              width={170}
              height={150}
            />
          </div>
          <div>
            <h1 className="text-white text-xl">Download Mobile Apps</h1>
            <Image
              src={"/image/Download Apps.png"}
              alt="Download Image"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-10">Developed By Abdu Subhan | All Rights Reserved</div>
    </footer>
  );
}

export default Footer;
