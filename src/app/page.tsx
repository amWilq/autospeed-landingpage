'use client';
import ScrollToTop from "react-scroll-to-top";
import Image from 'next/image';
import { useEffect, useState } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-stars'

import { FaEnvelope, FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';


export default function Home() {
  // Stan
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Komponenty strzałek
  function SampleNextArrow({ className, style, onClick }: { className: any; style: any; onClick: any; }) {
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow({ className, style, onClick }: { className: any; style: any; onClick: any; }) {
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  // Ustawienia
  const settings = {
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
  };
  // Ustawienia opinii
  const settingsReviews = {
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
    dots: true,
    infinite: true,
    slidesToShow: isMobile ? 1 : 3, // Ustaw 1 slajd na urządzeniach mobilnych, w przeciwnym razie 3 slajdy
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
  };

  // Efekty uboczne
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Ustaw wartość true dla szerokości ekranu mniejszej niż 768px
    };

    handleResize(); // Wywołaj na początku, aby ustawić początkową wartość
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          setCurrentSectionIndex(index);
        } else {
          entry.target.classList.remove('animate-fadeIn');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.animate-hidden');
    hiddenElements.forEach(element => observer.observe(element));

    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 2);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      hiddenElements.forEach(element => observer.unobserve(element));
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Funkcje pomocnicze
  const scrolltoHash = (index: number) => {
    const contactSection = document.querySelectorAll('section')[index];
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
  //Opinie Google
  const Review = ({ author, comment, rating, when, avatarSrc }: { author: string, comment: string, rating: number, when: string, avatarSrc: string }) => {
    const [showFullComment, setShowFullComment] = useState(false);

    const toggleShowFullComment = () => {
      setShowFullComment(!showFullComment);
    };

    const commentToShow = showFullComment ? comment : comment.slice(0, 100);

    return (
      <div className="p-4 rounded-lg shadow-md min-h-[200px]">
        <div className="flex items-left mb-4 ">
          <img className="w-16 h-16 rounded-full mr-4" src={avatarSrc} alt="avatar" />
          <div className="flex flex-col text-left">
            <h3 className="text-lg font-semibold">{author}</h3>
            <h3 className="text-lg text-gray-600">{when}</h3>
            <ReactStars
              count={5}
              size={24}
              value={rating}
              color2={'#ffd700'}
              edit={false}
            />
          </div>

        </div>


        <div className="comment-container mt-2 text-gray-600" style={{ maxHeight: '100px', overflowY: 'auto' }}>
          {commentToShow}
          {comment.length > 75 && (
            <button className="text-blue-500 hover:underline" onClick={toggleShowFullComment}>
              {showFullComment ? 'Pokaż mniej' : 'Pokaż więcej'}
            </button>
          )}
        </div>
      </div>
    );
  };


  return (

    <>
      {/* Slider */}
      <section className="place-items-center content-center min-h-[100vh]">
        <Slider {...settings}>
          <div className="relative">
            <Image src={"/mechanik2.jpg"} alt={""} className="object-cover h-[50vh] w-full" width={1000} height={1000}></Image>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 bg-black bg-opacity-50 rounded flex flex-col items-center">
                <p className="text-white text-2xl p-5 text-center">Masz pytania dotyczące naszych usług serwisowych?</p>
                <button className="mt-4 px-4 py-2 text-white rounded" style={{ backgroundColor: '#841404' }}>ZADAJ PYTANIE</button>

              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={"/mechanik1.jpg"} alt={""} className="object-cover h-[50vh] w-full" width={1000} height={1000}></Image>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 bg-black bg-opacity-50 rounded flex flex-col items-center">
                <p className="text-white text-2xl p-5 text-center">Potrzebujesz porady dotyczącej Twojego samochodu? Jesteśmy tu, aby pomóc!</p>
                <button className="mt-4 px-4 py-2 text-white rounded" style={{ backgroundColor: '#841404' }}>ZADAJ PYTANIE</button>

              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={"/mechanik2.jpg"} alt={""} className="object-cover h-[50vh] w-full" width={1000} height={1000}></Image>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 bg-black bg-opacity-50 rounded flex flex-col items-center">
                <p className="text-white text-2xl p-5 text-center">Nie wiesz, co jest nie tak z Twoim samochodem?</p>
                <button className="mt-4 px-4 py-2 text-white rounded" style={{ backgroundColor: '#841404' }}>ZADAJ PYTANIE</button>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={"/mechanik1.jpg"} alt={""} className="object-cover h-[50vh] w-full" width={1000} height={1000}></Image>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 bg-black bg-opacity-50 rounded flex flex-col items-center">
                <p className="text-white text-2xl p-5 text-center">Chcesz wiedzieć więcej o naszych usługach?</p>
                <button className="mt-4 px-4 py-2 text-white rounded" style={{ backgroundColor: '#841404' }}>ZADAJ PYTANIE</button>

              </div>
            </div>
          </div>

        </Slider>
        {!showScrollToTop && <div onClick={() => scrolltoHash(2)} className="down-arrow z-10"></div>}
      </section>


      {/* Opinie */}
      <section className="grid place-items-center content-center min-h-[100vh] m-5 md:m-20 animate-hidden" >
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-0">
          <div className="col-start-1 col-end-2 md:col-end-4 row-start-1 row-end-2 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold">Co mówią o nas inni?</h1>
          </div>
          <div className="col-start-1 col-end-2 md:col-end-2 row-start-2 row-end-3 m-5 flex items-center ">
            <img className="w-16 h-16 rounded-full mr-4" src="https://lh3.googleusercontent.com/p/AF1QipMyXT8eWYPOF4XFy5S3Myb4JCTOvJzB2bfi--CD=w768-h768-n-o-v1" alt="avatar" />
            <div >
              <h1 className="mb-4 text-xl md:text-2xl font-bold">Auto Speed Marcin Pośpiech, Sebastian Błaziński</h1>
              <div className="flex items-center">
                <h1 className="text-xl pr-4" style={{ color: 'rgb(255, 215, 0)' }}>5.0</h1>
                <ReactStars
                  count={5}
                  size={24}
                  value={5}
                  color2={'#ffd700'}
                  edit={false} />
              </div>
              <img src="/powered_by_google_on_non_white.png" alt="Google" className="h-6 mr-2" />
            </div>
          </div>

          <div className="col-start-1 col-end-2 md:col-start-2 md:col-end-4 row-start-3 md:row-start-2 row-end-4">
            <Slider {...settingsReviews}>


              <Review
                avatarSrc="https://lh3.googleusercontent.com/a-/ALV-UjVwi5ly8CAeszN2nxNCFrHfUXP-URmx8kih-hORpAQOZlE=w60-h60-p-rp-mo-br100"
                rating={5}
                when="2 miesiące temu"
                author="Jessi M."
                comment="Super fachowcy, przystępne ceny."
              />
              <Review
                avatarSrc="https://lh3.googleusercontent.com/a-/ALV-UjXgnLP_RmbdgxK--UGhS7Hbl0oKLD-1Y6AGjB2T59hNIA=w60-h60-p-rp-mo-br100"
                rating={5}
                when="6 miesięcy temu"
                author="Łukasz"
                comment="Bardzo fachowy i tani warsztat samochodowy.
                Przyjechałem z moja laweta na usterkę w układzie klimatyzacji i na poczekaniu Pan wymienił mi chłodnice klimatyzacji. Pare dni poniżej przyjechałem na wymianę łożysko w kole i tez na poczekaniu przebiegła naprawa. Polecam ! Uczciwe ceny"
              />
              <Review
                avatarSrc="https://lh3.googleusercontent.com/a/ACg8ocIIVmluGP7ycaMshy0qox-Ej7hw34to6cMdLMpgtlgq=w60-h60-p-rp-mo-br100"
                rating={5}
                when="10 miesięcy temu"
                author="Piotr Wicik"
                comment="Za każdym razem sprawnie i uczciwie. POLECAM."
              />
              <Review
                avatarSrc="https://lh3.googleusercontent.com/a-/ALV-UjXHk1xlJi5SagbdnXC5iQ6nf-hv3_kDhTR1tWzLgcGtzG8=w60-h60-p-rp-mo-br100"
                rating={5}
                when="rok temu"
                author="Dominika Stařičná"
                comment="Sympatyczni, pomocni, szybcy i tani. Super serwis"
              />
              <Review
                avatarSrc="https://lh3.googleusercontent.com/a-/ALV-UjXXrlBwyrLz8ERboQlp0K9ZtZbjuB-tXwmg-o3GZaeLi_E=w60-h60-p-rp-mo-ba6-br100"
                rating={5}
                when="6 miesięcy temu"
                author="Tadeusz Woroniak"
                comment="Polecam"
              />



            </Slider>
          </div>
          <div className="col-start-1 col-end-2 md:col-end-4 row-start-4 md:row-start-3 row-end-5 flex items-center justify-center m-20">
            <div className="flex space-x-4">
              <a href="https://www.google.com/maps/dir//Auto+Speed+Marcin+Po%C5%9Bpiech,+Sebastian+B%C5%82azi%C5%84ski+Wiejska+2+42-674+Kamieniec/@50.404075,18.713794,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47112f44367b2e17:0xde433b7ff1779c0c" target="_blank" rel="noopener noreferrer">
                <button className="bg-transparent border border-white text-white px-4 py-2 rounded">WYZNACZ TRASĘ DOJAZDU</button>
              </a>

              <button style={{ backgroundColor: '#841404' }} className="text-white px-4 py-2 rounded" onClick={() => scrolltoHash(3)}>
                LOKALIZACJA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa i kontakt */}
      <section className="animate-hidden">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805.2607381556804!2d18.713106616396228!3d50.40407591071893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47112f44367b2e17%3A0xde433b7ff1779c0c!2sAuto%20Speed%20Marcin%20Po%C5%9Bpiech%2C%20Sebastian%20B%C5%82azi%C5%84ski!5e1!3m2!1spl!2spl!4v1708539026522!5m2!1spl!2spl" width="100%" style={{ border: '0', height: '50vh' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


        <svg id="wave" style={{ transform: 'rotate(180deg)', transition: '0.3s' }} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(132, 20, 4, 1)" offset="0%">
            </stop><stop stop-color="rgba(19, 19, 22, 1)" offset="100%"></stop>
          </linearGradient>
          </defs>
          <path style={{ transform: 'translate(0, 0px)', opacity: '1' }} fill="url(#sw-gradient-0)" d="M0,20L80,21.7C160,23,320,27,480,23.3C640,20,800,10,960,8.3C1120,7,1280,13,1440,25C1600,37,1760,53,1920,58.3C2080,63,2240,57,2400,60C2560,63,2720,77,2880,68.3C3040,60,3200,30,3360,16.7C3520,3,3680,7,3840,10C4000,13,4160,17,4320,25C4480,33,4640,47,4800,58.3C4960,70,5120,80,5280,78.3C5440,77,5600,63,5760,58.3C5920,53,6080,57,6240,63.3C6400,70,6560,80,6720,83.3C6880,87,7040,83,7200,81.7C7360,80,7520,80,7680,68.3C7840,57,8000,33,8160,30C8320,27,8480,43,8640,43.3C8800,43,8960,27,9120,21.7C9280,17,9440,23,9600,31.7C9760,40,9920,50,10080,55C10240,60,10400,60,10560,56.7C10720,53,10880,47,11040,41.7C11200,37,11360,33,11440,31.7L11520,30L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
          <defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(132, 20, 4, 1)" offset="0%"></stop>
            <stop stop-color="rgba(19, 19, 22, 1)" offset="100%"></stop>
          </linearGradient>
          </defs>
          <path style={{ transform: 'translate(0, 50px)', opacity: '0.9' }} fill="url(#sw-gradient-1)" d="M0,40L80,40C160,40,320,40,480,33.3C640,27,800,13,960,6.7C1120,0,1280,0,1440,6.7C1600,13,1760,27,1920,35C2080,43,2240,47,2400,50C2560,53,2720,57,2880,61.7C3040,67,3200,73,3360,63.3C3520,53,3680,27,3840,25C4000,23,4160,47,4320,61.7C4480,77,4640,83,4800,78.3C4960,73,5120,57,5280,56.7C5440,57,5600,73,5760,73.3C5920,73,6080,57,6240,51.7C6400,47,6560,53,6720,50C6880,47,7040,33,7200,26.7C7360,20,7520,20,7680,26.7C7840,33,8000,47,8160,51.7C8320,57,8480,53,8640,56.7C8800,60,8960,70,9120,65C9280,60,9440,40,9600,36.7C9760,33,9920,47,10080,51.7C10240,57,10400,53,10560,51.7C10720,50,10880,50,11040,48.3C11200,47,11360,43,11440,41.7L11520,40L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>

        <div className="grid md:grid-cols-2 md:grid-rows-1 gap-0 p-5 grid-cols-1 grid-rows-2">
          <div className="md:col-start-1 md:col-end-2 md:row-start-1  items-center justify-center flex row-start-2 row-end-3 md:row-start-1 ">
            <Image
              src="/logo.png"
              alt="Logo"
              width={500}
              height={500}
            />
          </div>
          <div className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 flex justify-center row-start-1 row-end-2 md:row-start-2 md:row-end-3">
            <div className="items-end text-center">
              <h2 className="text-2xl font-bold mb-2 ">Kontakt</h2>
              <div className="flex items-center mb-5 justify-start"><FaUser className="mr-5" size={24} color="#841404" /> Jan Kowalski</div>
              <div className="flex items-center mb-5 justify-start"><FaEnvelope className="mr-5" size={24} color="#841404" /> jan.kowalski@example.com</div>
              <div className="flex items-center mb-5 justify-start"><FaEnvelope className="mr-5" size={24} color="#841404" /> ul. Wiejska 2, 42-674 Kamieniec</div>

              <div className="mb-5">
                <div className="flex items-center mb-5 justify-start"><FaPhone className="mr-5" size={24} color="#841404" /> +48 123 456 789</div>
                <div className="flex items-center justify-start"><FaPhone className="mr-5" size={24} color="#841404" /> +48 123 456 789</div>
              </div>

            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#841404' }} className="grid place-items-center content-center text-center">
          Copyright © 2024-2024 Auto Speed Marcin Pośpiech, Sebastian Błaziński Wszystkie prawa zastrzeżone | Projekt i wykonanie Łukasz Pośpiech
        </div>
      </section>

      <ScrollToTop smooth style={{ borderRadius: '50%' }} viewBox="0 0 128 256" />

    </>
  );
}
