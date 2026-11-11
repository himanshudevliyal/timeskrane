"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight } from "lucide-react";
import { FiChevronRight } from "react-icons/fi";

export default function SlickSlider() {
  const [mainSlider, setMainSlider] = useState(null);
  const [thumbnailSlider, setThumbnailSlider] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/img/slider2.jpg",
      title: "Your Lifting Partner",
      subtitle: "SAFETY FIRST,INNOVATION,RELIABILTY & DEDICATION",
      buttonText: "DISCOVER",
      label: "Demag DMR hoist unit",
    },
    {
      id: 2,
      image: "/img/banner.jpg",
      title: "Your Lifting Partner",
      subtitle: "SAFETY FIRST,INNOVATION,RELIABILTY & DEDICATION",
      buttonText: "view all products",
      label: "Lifting the future",
    },

    {
      id: 3,
      image: "/img/single.jpg",
      title: "Your Lifting Partner",
      subtitle: "SAFETY FIRST,INNOVATION,RELIABILTY & DEDICATION",
      buttonText: "view all products",
      label: "Lifting the future",
    },

    {
      id: 4,
      image: "/img/double-ginder.jpg",
      title: "Your Lifting Partner",
      subtitle: "SAFETY FIRST,INNOVATION,RELIABILTY & DEDICATION",
      buttonText: "view all products",
      label: "Lifting the future",
    },

    {
      id: 5,
      image: "/img/underslung.jpg",
      title: "Your Lifting Partner",
      subtitle: "SAFETY FIRST,INNOVATION,RELIABILTY & DEDICATION",
      buttonText: "view all products",
      label: "Lifting the future",
    },

    {
      id: 6,
      image: "/img/jib.jpg",
      title: "Your Lifting Partner",
      subtitle: "SAFETY FIRST,INNOVATION,RELIABILTY & DEDICATION",
      buttonText: "view all products",
      label: "Lifting the future",
    },
  ];

  // Render a static first slide on the server / first paint; switch to the
  // carousel after hydration. This lets the LCP image load immediately with
  // high priority and avoids the layout shift slick causes while initialising.
  // Show the static first slide until its image has loaded and been on screen
  // for one autoplay interval, then hand over to the carousel. The static
  // image is what gets painted first (and measured as LCP); visually nothing
  // changes because slide 1 would be showing for those 3s anyway.
  const [sliderReady, setSliderReady] = useState(false);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  useEffect(() => {
    // safety net in case onLoad never fires
    const fallback = setTimeout(() => setSliderReady(true), 8000);
    return () => clearTimeout(fallback);
  }, []);
  useEffect(() => {
    if (!firstImageLoaded) return;
    const timer = setTimeout(() => setSliderReady(true), 3000);
    return () => clearTimeout(timer);
  }, [firstImageLoaded]);

  const mainSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // only load a slide's image when it is about to be shown
    lazyLoad: "ondemand",
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  const renderSlide = (slide, isFirst, onLoad) => (
    <div key={slide.id} className="relative h-[80vh] ">
      <Image
        src={slide.image || "/placeholder.svg"}
        alt={slide.title}
        fill
        sizes="100vw"
        className="object-cover h-100"
        priority={isFirst}
        fetchPriority={isFirst ? "high" : "auto"}
        loading={isFirst ? "eager" : "lazy"}
        onLoad={onLoad}
      />
      <div className="contaneir">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-30 left-0 p-8 text-white z-10 max-w-md">
          <h2 className="text-2xl lg:text-6xl font-bold"> {slide.title}</h2>
          <p className="text-2xl mt-2">{slide.subtitle}</p>
          <a href="#products" className="flex rounded-sm mt-4 items-center  btn">
            <span className="shadow-lg items-center  bg-blue-700 hover:bg-blue-800 text-white font-bold  px-4 py-2 ">
              <span className="flex-1 text-center mr-2">View All Products</span>
            </span>
            <span className="bg-blue-500  shadow-lg py-2 px-2  ">
              <FiChevronRight className=" text-white  text-2xl  font-bold" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );

  const thumbnailSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    focusOnSelect: true,
    arrows: false,
    swipeToSlide: false,
  };

  return (
    <>
      <div className="relative w-full h-[80vh] overflow-hidden">
        {/* Main Slider */}
        <div className="h-full">
          {sliderReady ? (
            <Slider
              {...mainSettings}
              ref={(slider) => setMainSlider(slider)}
              asNavFor={thumbnailSlider || undefined}
              className="h-[80vh]"
            >
              {slides.map((slide, idx) => renderSlide(slide, idx === 0))}
            </Slider>
          ) : (
            renderSlide(slides[0], true, () => setFirstImageLoaded(true))
          )}
        </div>

        {/* Progress Bar */}

        {/* Thumbnail Slider */}
        {/* <div className=" hidden absolute bottom-10 w-[500px]  md:flex justify-center items-center  left-10 z-20  ">
          <div className="">
            <div className="flex justify-center items-center">
              <Slider
                {...thumbnailSettings}
                ref={(slider) => setThumbnailSlider(slider)}
                asNavFor={mainSlider || undefined}
              >
                {slides.map((slide, idx) => (
                  <div key={slide.id} className="cursor-pointer px-2    ">
                    <div className="relative ">
                      <div
                        className={`relative  overflow-hidden transition-all duration-300 transform  ${
                          currentSlide === idx
                            ? " border-t-2 border-blue-500"
                            : ""
                        }`}
                      >
                        <div className="transform h-full   w-full">
                          <Image
                            src={slide.image || "/placeholder.svg"}
                            alt={`Thumbnail ${slide.title}`}
                            width={150}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>

                      <div className="text-white text-xs font-bold mt-4  text-center">
                        {slide.label}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
