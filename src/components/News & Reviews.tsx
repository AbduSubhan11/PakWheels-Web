import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

function NewsandReviews() {
  return (
    <section className="bg-[#F2F3F3] py-10 flex flex-col items-center justify-center">
      <div className="space-y-10 w-[1000px]">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            News, Reviews and Discussions
          </h1>
          <p className="text-blue-600 cursor-pointer">Read All Recent News</p>
        </div>
        <Tabs defaultValue="Automotive News" className="w-[800px]">
          <TabsList>
            <TabsTrigger value="Automotive News">Automotive News</TabsTrigger>
            <TabsTrigger value="Car Reviews">Car Reviews</TabsTrigger>
            <TabsTrigger value="Discussions">Discussions</TabsTrigger>
          </TabsList>
          <TabsContent value="Automotive News">
            <div className="space-y-10">
              {/* UPPER */}
              <div className="flex items-center gap-5">
                <Image
                  src={"/image/Nisan.png"}
                  alt="Nissan Image"
                  width={150}
                  height={150}
                />
                <div className="space-y-1">
                  <h1 className="text-[#233D7B] font-semibold text-xl">
                    Honda Reportedly Buying Nissan – Is This The End?
                  </h1>
                  <p className="text-sm text-gray-500">November 28, 2024</p>
                  <p>
                    So, is this the end? Things are not looking good for Nissan,
                    as the company laid off approximately 9,000 employees,
                    representing 6.7% of its global workforce. The carmaker also
                    announced cutting production capacity by 20% due to a
                    decline in
                  </p>
                </div>
              </div>

              {/* LOWER */}
              <div className="flex gap-5">
                <Image
                  src={"/image/BMW bike.jpg"}
                  alt="Nissan Image"
                  width={125}
                  height={150}
                />
                <div className="space-y-1">
                  <h1 className="text-[#233D7B] font-semibold text-xl">
                    Honda Reportedly Buying Nissan – Is This The End?
                  </h1>
                  <p className="text-sm text-gray-500">November 28, 2024</p>
                  <p>
                    So, is this the end? Things are not looking good for Nissan,
                    as the company laid off approximately 9,000 employees,
                    representing 6.7% of its global workforce. The carmaker also
                    announced cutting production capacity by 20% due to a
                    decline in
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Car Reviews" className="space-y-5">
            <div className="flex items-center gap-5">
              <Image
                src={"/image/corolla.jpg"}
                alt="Nissan Image"
                width={150}
                height={150}
              />
              <div className="space-y-1">
                <h1 className="text-[#233D7B] font-semibold text-xl">
                  Great Decision
                </h1>
                <p className="text-sm text-gray-500">Toyota Yaris Hatchback</p>
                <div>
                  <Image
                    src={"/image/rating.png"}
                    alt="Rating Image"
                    width={80}
                    height={150}
                  />
                  <p>Nov 26,2024</p>
                </div>
              </div>
            </div>
            <p>
              So, is this the end? Things are not looking good for Nissan, as
              the company laid off approximately 9,000 employees, representing
              6.7% of its global workforce. The carmaker also announced cutting
              production capacity by 20% due to a decline in
            </p>
            <div className="flex items-center gap-5">
              <Image
                src={"/image/KIA sportage 2021.webp"}
                alt="KIA Sportage"
                width={150}
                height={150}
              />
              <div className="space-y-1">
                <h1 className="text-[#233D7B] font-semibold text-xl">
                  Bracking is not good
                </h1>
                <p className="text-sm text-gray-500">KIA Sportage AWD</p>
                <div>
                  <Image
                    src={"/image/rating.png"}
                    alt="Rating Image"
                    width={80}
                    height={150}
                  />
                  <p>Nov 25,2024</p>
                </div>
              </div>
            </div>
            <p>
              I am facing bracking is not too good as it&apos;s not responsive on
              light foot it doesn&apos;t respond properly, while disk pads are new
              and disk rotators are polished no line in it once u judge a pot
              hole and try to brake moderately it
            </p>
          </TabsContent>
          <TabsContent value="Discussions" className="space-y-5">
            <div>
              <h1 className="text-[#233D7B] text-xl font-semibold">Ask Xulfiqar - An Automotive Encyclopedia</h1>
              <p>
                In my opinion &apos;Xulfiqar&apos; is the most knowledgeable person on
                automotive, on PW (whom I have come across in my life). He has
                qualification , knowledge and on-hands experience, a recipe
                seldom found in real world. Above
              </p>
            </div>
            <div>
              <h1 className="text-[#233D7B] text-xl font-semibold">Used car in Toronto</h1>
              <p>
                Salam All, Need to know about topic from fellow Canadians or
                technically sound people. Budget max 7k CAD. Which of the
                following cars should be considered\bought. I have listed these
                based on my research of high mi…
              </p>
            </div>
            <div>
              <h1 className="text-[#233D7B] text-xl font-semibold">Un-comfertable fortuner sigma 4</h1>
              <p>
                I have Sigma 4 2023 , the ride is too much bumpy and
                uncomfortable, :cry: any suggestions, to improve the comfert
                level ?
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default NewsandReviews;
