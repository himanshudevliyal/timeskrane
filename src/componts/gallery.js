"use client";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@mui/material/Container";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const images = [
  { id: 53, src: "/img/gallery/53.jpeg", alt: "Image 53" },
  { id: 41, src: "/img/gallery/41.jpeg", alt: "Image 41" },
  { id: 52, src: "/img/gallery/52.jpeg", alt: "Image 52" },
  { id: 29, src: "/img/gallery/29.jpeg", alt: "Image 29" },
  { id: 20, src: "/img/gallery/20.jpeg", alt: "Image17" },
  { id: 55, src: "/img/gallery/55.jpeg", alt: "Image 55" },
  { id: 12, src: "/img/gallery/12.jpeg", alt: "Image 12" },
  { id: 54, src: "/img/gallery/54.jpeg", alt: "Image 54" },
];
export default function GridGallery() {
  const sliderRef = useRef(null);

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: false,
      Toolbar: true,
    });
    return () => {
      Fancybox.unbind("[data-fancybox='gallery']");
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false, // We'll use custom arrows
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <div className="section relative py-12">
        <Container maxWidth="xl" className="relative">
          <h2 className="text-3xl md:text-4xl text-center font-bold text-slate-800 leading-tight mb-10">
            Our Photo Gallery
          </h2>

          {/* Slider with ref */}
          <Slider ref={sliderRef} {...settings}>
            {images.map((image) => (
              <div key={image.id} className="px-2">
                <a
                  data-fancybox="gallery"
                  href={image.src}
                  data-caption={image.alt}
                  className="block"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={700}
                    className="w-full h-[350px] object-cover rounded-lg shadow-md hover:opacity-80 transition-opacity duration-300"
                  />
                </a>
              </div>
            ))}
          </Slider>

          {/* Custom Arrows */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <FiChevronRight size={20} />
          </button>
        </Container>
      </div>
    </>
  );
}
