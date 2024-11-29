import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import ListItem from "@/components/ui/listItem";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function Header() {
  return (
    <header className="px-20 bg-[#00060D]">
      <div className="flex items-center justify-between border-b border-gray-500 py-2 text-white">
        <div className="flex items-center">
          <svg
            className="h-8 w-8 text-[#B73439]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <rect x="7" y="4" width="10" height="16" rx="1" />{" "}
            <line x1="11" y1="5" x2="13" y2="5" />{" "}
            <line x1="12" y1="17" x2="12" y2="17.01" />
          </svg>
          <h1>Download App via SMS</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[#B73439]">اردو</div>
          <div className="border-l-2 px-2">Sign Up</div>
          <div className="border-l-2 px-2">Sign In</div>
        </div>
      </div>
      <nav className="flex items-center justify-between py-3">
        <Image
          src={
            "https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg"
          }
          alt="Logo"
          width={150}
          height={150}
        />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Used Cars</NavigationMenuTrigger>
              <NavigationMenuContent className="border-b-[6px] border-[#B73439]">
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[1000px] lg:grid-cols-4">
                  <li>
                    <ListItem href="" title="Find Used Cars for Sale">
                      Search from over 110k options
                    </ListItem>
                    <ListItem href="" title="Featured Used Cars">
                      View featured cars by PakWheels
                    </ListItem>
                    <ListItem href="/" title="Sell Your Car">
                      Post a free ad and sell your car quickly
                    </ListItem>
                    <ListItem href="/" title="Used Car Dealers">
                      Find used cars dealers near your
                    </ListItem>
                    <ListItem href="/" title="Price Calculator">
                      Calculate the market price of cars
                    </ListItem>
                  </li>
                  <li className="border-l px-3">
                    <ListItem href="" title="PakWheels Certified Cars">
                      Cars with the PakWheels seal of approval
                    </ListItem>
                    <ListItem href="" title="PakWheels Car Inspection">
                      Car with detailed PakWheels Inspection reports
                    </ListItem>
                    <ListItem href="/" title="PakWheels Sell It For Me">
                      Let PakWheels sell your hassle free for you
                    </ListItem>
                    <ListItem href="/" title="Auction Sheet Verification">
                      Authentic Auction Sheets for your peace of mind
                    </ListItem>
                    <ListItem href="/" title="Price Calculator">
                      Calculate the market price of cars
                    </ListItem>
                  </li>
                  <li className=" border-l px-6">
                    <div className="p-3 space-y-4" title="Popular Cities">
                      <h1 className="font-semibold">Popular Cities</h1>
                      <div className="space-y-6">
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Karachi
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Lahore
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Islamabad
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Rawalpindi
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Peshawar
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Faisalabad
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Multan
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Gujranwala
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className=" border-l px-6">
                    <div className="p-3 space-y-4">
                      <h1 className="font-semibold">Popular Models</h1>
                      <div className="space-y-6">
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Toyota Corolla
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Honda Civic
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Honda City
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Suzuki Cultus
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Suzuki Mehran
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Toyota Vitz
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Suzuki Alto
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Toyota Prado
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>New Cars</NavigationMenuTrigger>
              <NavigationMenuContent className="border-b-[6px] border-[#B73439]">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] grid-cols-2 md:grid-cols-3 lg:w-[700px] ">
                  <li>
                    <ListItem href="" title="Find New Cars">
                      See new cars in Pakistan
                    </ListItem>
                    <ListItem href="" title="Car Comparisons">
                      Compare Cards and fins their differences
                    </ListItem>
                    <ListItem href="" title="Reviews">
                      Read Reviews of all cars in Pakistan
                    </ListItem>
                    <ListItem href="" title="Prices">
                      See prices of new cars
                    </ListItem>
                    <ListItem href="" title="On Road Price">
                      Calculate the total cost of new car
                    </ListItem>
                    <ListItem href="" title="New Car Dealers">
                      Find new car dealers
                    </ListItem>
                  </li>
                  <li className=" border-l px-6">
                    <div className="p-3 space-y-4">
                      <h1 className="font-semibold">Popular Brands</h1>
                      <div className="space-y-6">
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Suzuki Cars
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Toyota Cars
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Honda Cars
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          KIA Cars
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Hyundai Cars
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Changan Cars
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          MG Cars
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          BMW Cars
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Audi Cars
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="border-l px-6">
                    <div className="p-3 space-y-4">
                      <h1 className="font-semibold">Popular New Cars</h1>
                      <div className="space-y-6">
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Honda Civic
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Suzuki Alto
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Suzuki Cultus
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Honda City
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Toyota Corolla
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Toyota Yaris
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Changan Alsvin
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Suzuki Wagon R
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          KIA Sportage
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Bikes</NavigationMenuTrigger>
              <NavigationMenuContent className="border-b-[6px] border-[#B73439]">
                <ul className="grid grid-cols-2 w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-4 lg:w-[1000px] ">
                  <li>
                    <ListItem href="" title="Find Used Bikes">
                      Find your dream bike
                    </ListItem>
                    <ListItem href="" title="Used Bikes Listing">
                      Search from over 5000+ options
                    </ListItem>
                    <ListItem href="" title="Featured Used Bikes">
                      Browse over featured bikes
                    </ListItem>
                    <ListItem href="" title="Sell Your Bike">
                      Post a free ad and sell your bike quickly
                    </ListItem>
                  </li>
                  <li className="border-l px-6">
                    <ListItem href="" title="Find New Bikes">
                      See new bikes in Pakistan
                    </ListItem>
                    <ListItem href="" title="Bike Comparisons">
                      Compare bikes and find their differences
                    </ListItem>
                    <ListItem href="" title="Bike Reviews">
                      Read Reviews of all bikes in Pakistan
                    </ListItem>
                    <ListItem href="" title="New Bike Prices">
                      See Prices of new bikes
                    </ListItem>
                  </li>
                  <li className="border-l px-6">
                    <div className="p-3 space-y-4">
                      <h1 className="font-semibold">Popular New Bikes</h1>
                      <div className="space-y-6">
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Honda CG 125
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Yamaha YBR 125
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Honda CD 70
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Suzuki GD 11OS
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Suzuki GS 150
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Honda Pridor
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Yamaha YBR 125G
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Honda CB 150F
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="border-l px-6">
                    <div className="p-3 space-y-4">
                      <h1 className="font-semibold">Popular Used Bikes</h1>
                      <div className="space-y-6">
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Honda CG 125
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Honda CD 70
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Yamaha YBR 125
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Suzuki GS 150
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Honda CB 125F
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Yamaha YBR 125G
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          Honda Pridor
                        </p>
                        <p className="hover:text-[#518ECB] cursor-pointer ">
                          HI Speed Infinity 150
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Auto Store</NavigationMenuTrigger>
              <NavigationMenuContent className="border-b-[6px] border-[#B73439]">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <li>
                    <ListItem href="" title="PakWheels Autostore">
                      Buy Auto Parts & Accessories directly from PakWheels
                    </ListItem>
                    <ListItem href="" title="Find Auto Parts">
                      Find auto parts for your car
                    </ListItem>
                    <ListItem href="" title="Sell Car Parts">
                      Post a free ad and sell your car parts quickly
                    </ListItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Videos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Forums
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>More</NavigationMenuTrigger>
              <NavigationMenuContent className="border-b-[6px] border-[#B73439]">
                <ScrollArea className="h-80 w-[350px] rounded-md border p-4 ">
                  <div className="mt-4 cursor-pointer hover:text-[#518ECB]">
                    <h1 className="font-semibold ">Cool Rides</h1>
                    <p className="text-sm text-gray-500">
                      Member Rides Cars & Bikes
                    </p>
                  </div>
                  <div className="mt-4 cursor-pointer hover:text-[#518ECB]">
                    <h1 className="font-semibold ">Car Import</h1>
                    <p className="text-sm text-gray-500">
                      Import your favourite car
                    </p>
                  </div>
                  <div className="mt-4 cursor-pointer hover:text-[#518ECB]">
                    <h1 className="font-semibold ">Car Insurance</h1>
                    <p className="text-sm text-gray-500">
                      Get car insurance quote
                    </p>
                  </div>
                  <div className="mt-4 cursor-pointer hover:text-[#518ECB]">
                    <h1 className="font-semibold ">Car Finance</h1>
                    <p className="text-sm text-gray-500">
                      Compare plans and apply for car loan
                    </p>
                  </div>
                  <div className="mt-4 cursor-pointer hover:text-[#518ECB]">
                    <h1 className="font-semibold ">MTMIS Pakistan</h1>
                    <p className="text-sm text-gray-500">
                      Online Vechile Verification
                    </p>
                  </div>
                  <div className="mt-4 cursor-pointer hover:text-[#518ECB]">
                    <h1 className="font-semibold ">DLIMS Pakistan</h1>
                    <p className="text-sm text-gray-500">
                      Driving License Verification System
                    </p>
                  </div>
                  <div className="mt-4 cursor-pointer hover:text-[#518ECB]">
                    <h1 className="font-semibold ">Current Petrol Prices</h1>
                    <p className="text-sm text-gray-500">
                      Check latest Petrol, Diesel and CNG Price
                    </p>
                  </div>
                  <div className="mt-4 cursor-pointer hover:text-[#518ECB]">
                    <h1 className="font-semibold ">
                      Pakwheels Partner Workshop
                    </h1>
                    <p className="text-sm text-gray-500">
                      Auto Repair Workshop
                    </p>
                  </div>
                  <div className="mt-4 cursor-pointer hover:text-[#518ECB]">
                    <h1 className="font-semibold ">Car Registration</h1>
                    <p className="text-sm text-gray-500">
                      Hassle-free Car Registration
                    </p>
                  </div>
                  <div className="mt-4 cursor-pointer hover:text-[#518ECB]">
                    <h1 className="font-semibold ">Car OwnerShip Transfer</h1>
                    <p className="text-sm text-gray-500">
                      Hassle-free Car Transfer
                    </p>
                  </div>
                </ScrollArea>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-[#B73439] relative group">
                Post an Ad
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem></NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}

export default Header;
