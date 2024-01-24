'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import profilePic from '/public/logo.png'

export default function Home() {

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (

    <>     <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div className="flex justify-center items-center" >
            <Image src={profilePic} alt="Image 1" />
            <Button asChild className="absolute p-5">
              <Link href="/contact">Zadaj pytanie</Link>
            </Button>


          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex justify-center items-center">
          <Image src={profilePic} alt="Image 1" />
            <div className="absolute flex flex-col justify-center items-center h-full w-full text-center">
              <h1>Hello word</h1>
              <h4>This is a content to make our page longer</h4>
              <Button asChild className="mt-5">
                <Link href="/contact">Zadaj pytanie</Link>
              </Button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className=" flex justify-center items-center" >
          <Image src={profilePic} alt="Image 1" />
            <Button asChild className="absolute">
              <Link href="/contact">Zadaj pytanie</Link>
            </Button>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <Image
        src={profilePic}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />


      <div className="container mx-auto px-4">




        <h1>Hello word</h1>
        <p>This is a content to make our page longer</p>
        <div className="w-full h-screen bg-green-300"></div>

        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English.
        </p>
        <div />
        <ScrollToTop smooth style={{ borderRadius: '50%' }} viewBox="0 0 128 256" />
      </div>

    </>
  );
}