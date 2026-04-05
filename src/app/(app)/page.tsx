"use client";

import React from "react";
import messages from "@/messages.json"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Home = () => {
  return (
    <main className="w-full flex flex-grow flex-col items-center justify-center px-4 md:px-24 py-12">
      <section className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold">Dive into the world of anonymouse conversations</h1>
        <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-300">Explore Obscura - Where your identity remains a secret.</p>
      </section>
      <Carousel className="w-full max-w-xs md:max-w-1/2">
        <CarouselContent>
          {messages.map((msg, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="w-full h-[20rem]">
                  <CardHeader className="text-center text-3xl">{msg.title}</CardHeader>
                  <CardContent className="h-1/2 flex items-center justify-center">
                    <span className="text-2xl font-semibold">{msg.content}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
};

export default Home;
