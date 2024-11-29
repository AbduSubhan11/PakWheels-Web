import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#00070F] to-[#01336F] h-96 gap-8 flex flex-col items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold">Find Used Cars in Pakistan</h1>
        <p className="text-lg mt-2">
          With thousands of cars, we have just the right one for you
        </p>
      </div>
      <div className="flex items-center text-[#464E60]">
        <input
          type="text"
          placeholder="Car Make Or Model"
          className="h-12 w-72 pl-2 rounded-l-md outline-none placeholder-[#464E60]"
        />
        <Select>
          <SelectTrigger className="w-[180px] h-12 rounded-none bg-white ">
            <SelectValue placeholder="All Cities" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Karachi">Karachi</SelectItem>
            <SelectItem value="Lahore">Lahore</SelectItem>
            <SelectItem value="Islamabad">Islamabad</SelectItem>
            <SelectItem value="Rawalpindi">Rawalpindi</SelectItem>
            <SelectItem value="Peshawar">Peshawar</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px] h-12 rounded-none bg-white ">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5 Lacs">5 Lacs</SelectItem>
            <SelectItem value="10 Lacs">10 Lacs</SelectItem>
            <SelectItem value="15 Lacs">15 Lacs</SelectItem>
            <SelectItem value="20 Lacs">20 Lacs</SelectItem>
            <SelectItem value="25 Lacs">25 Lacs</SelectItem>
            <SelectItem value="30 Lacs">30 Lacs</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          className="bg-[#318F3A] h-12 w-16 outline-none"
        >
          <svg
            className="h-20 w-12 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="4"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="10" cy="10" r="7" />{" "}
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </Button>
      </div>
      <div>
        <Button
          variant={"default"}
          className="bg-transparent border rounded-none"
        >
          Advanced Filter{" "}
          <svg
            className="h-8 w-8 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
