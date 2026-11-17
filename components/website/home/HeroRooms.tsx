
"use client";

import { Icon } from "@iconify/react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState, useEffect, useCallback } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import Wrapper from "../Wrapper";

const rooms = [
  {
    id: "premium-deluxe",
    image: "/room_1.png",
    title: "premium-deluxe",
    description: "premium-deluxe-description",
    price: "premium-deluxe-price",
    guests: 4,
    beds: 3,
  },
  {
    id: "executive-suite",
    image: "/room_2.png",
    title: "executive-suite",
    description: "executive-suite-description",
    price: "executive-suite-price",
    guests: 2,
    beds: 1,
  },
  {
    id: "presidential-villa",
    image: "/room_3.png",
    title: "presidential-villa",
    description: "presidential-villa-description",
    price: "presidential-villa-price",
    guests: 6,
    beds: 4,
  },
  {
    id: "celebrity-suit",
    image: "/room_4.png",
    title: "celebrity-suit",
    description: "celebrity-suit-description",
    price: "celebrity-suit-price",
    guests: 6,
    beds: 4,
  },
] as const;

const smoothEase = [0.22, 1, 0.36, 1] as const;

const HeroRooms = () => {
  const home = useTranslations("Home");
  const button = useTranslations("Buttons");
  const shouldReduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const room = rooms[activeIndex];

  const next = useCallback(() => {
    setActiveIndex((current) =>
      current === rooms.length - 1 ? 0 : current + 1
    );
  }, []);

  const previous = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? rooms.length - 1 : current - 1
    );
  }, []);

  // Automatic carousel with hover and focus pause
  useEffect(() => {
    if (shouldReduceMotion || isHovered) return;
  
    const interval = setInterval(() => {
      next();
    }, 5000);
  
    return () => clearInterval(interval);
  }, [next, shouldReduceMotion, isHovered]);

  const transition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: smoothEase,
  };

  return (
    <section className="overflow-hidden bg-shell py-20 sm:py-24 lg:py-32">
      <Wrapper>
        <div className="flex flex-col gap-12 sm:gap-16">

          {/* Section Heading */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={transition}
            className="mx-auto flex max-w-2xl flex-col items-center text-center"
          >
            <span className="mb-7 h-px w-12 bg-primary/50" />

            <h2 className="font-display text-3xl leading-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              {home("hero4.title")}
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-primary/70 sm:text-base sm:leading-8">
              {home("hero4.text")}
            </p>
          </motion.div>

          {/* Carousel */}
          <div
            className="mx-auto w-full max-w-6xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsHovered(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setIsHovered(false);
              }
            }}
          >

            <div className="relative">

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={room.id}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, x: 35 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  exit={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 0, x: -35 }
                  }
                  transition={transition}
                  className="grid grid-cols-1 items-center lg:grid-cols-[1.15fr_0.85fr]"
                >

                  {/* Room Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-primary/10 sm:aspect-[16/10] lg:aspect-[5/4]">

                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? false
                          : { scale: 1.08 }
                      }
                      animate={{ scale: 1 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 1.4,
                        ease: smoothEase,
                      }}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${room.image}')`,
                      }}
                    />

                    <div className="absolute inset-0 bg-primary/10" />

                    {/* Image Label */}
                    <div className="absolute bottom-5 left-5 border border-shell/50 bg-primary/30 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-shell backdrop-blur-sm sm:bottom-8 sm:left-8">
                      {home("hero4.collection")}
                    </div>
                  </div>

                  {/* Room Information */}
                  <div className="relative z-10 -mt-6 flex flex-col bg-linen p-6 shadow-[0_25px_70px_rgba(0,0,0,0.08)] sm:-mt-10 sm:p-9 lg:my-10 lg:-ml-16 lg:mt-0 lg:p-10 xl:p-12">

                    {/* Decorative detail */}
                    <span className="mb-5 h-px w-12 bg-primary/50" />

                    <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-primary/55">
                      {home("hero4.room-label")}
                    </p>

                    <h3 className="font-display text-3xl leading-tight text-primary sm:text-4xl">
                      {home(`hero4.rooms.${room.title}`)}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-primary/70 sm:text-base sm:leading-8">
                      {home(`hero4.rooms.${room.description}`)}
                    </p>

                    <div className="my-7 border-t border-primary/20" />

                    {/* Price and Room Details */}
                    <div className="flex flex-wrap items-center justify-between gap-6">

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-primary/55">
                          {home("hero4.from")}
                        </p>

                        <p className="mt-1 font-display text-2xl text-primary sm:text-3xl">
                          {home(`hero4.rooms.${room.price}`)}
                        </p>

                        <p className="mt-1 text-[10px] text-primary/50">
                          {home("hero4.per-night")}
                        </p>
                      </div>

                      <div className="flex gap-6 sm:gap-8">

                        <div className="flex flex-col items-center gap-1 text-primary">
                          <Icon
                            icon="eva:people-outline"
                            width="25"
                            height="25"
                          />
                          <span className="text-sm font-medium">
                            {room.guests}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-primary/55">
                            {home("hero4.guests")}
                          </span>
                        </div>

                        <div className="flex flex-col items-center gap-1 text-primary">
                          <Icon
                            icon="fluent:bed-20-regular"
                            width="25"
                            height="25"
                          />
                          <span className="text-sm font-medium">
                            {room.beds}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-primary/55">
                            {home("hero4.beds")}
                          </span>
                        </div>

                      </div>
                    </div>

                    {/* Booking Button */}
                    <Link
                      href="/contact"
                      className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-4 border border-primary bg-primary px-6 py-4 text-center text-xs uppercase tracking-[0.15em] text-shell transition-all duration-500 hover:bg-transparent hover:text-primary sm:w-fit sm:px-8"
                    >
                      <span>{button("book-room")}</span>

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                    {/* Corner Decoration */}
                    <span className="absolute bottom-4 right-4 h-7 w-7 border-b border-r border-primary/20" />

                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Carousel Navigation */}
            <div className="mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-primary/15 pt-6">

              {/* Previous */}
              <button
                type="button"
                onClick={previous}
                aria-label={button("previous")}
                className="group inline-flex min-h-11 items-center gap-3 text-xs uppercase tracking-[0.15em] text-primary transition-opacity hover:opacity-60"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                <span className="hidden sm:inline">
                  {button("previous")}
                </span>
              </button>

              {/* Pagination */}
              <div className="flex items-center gap-3">
                {rooms.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to room ${index + 1}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className="flex h-8 items-center justify-center"
                  >
                    <motion.span
                      animate={{
                        width: activeIndex === index ? 30 : 7,
                        opacity: activeIndex === index ? 1 : 0.35,
                      }}
                      transition={{ duration: 0.35 }}
                      className="h-[3px] bg-primary"
                    />
                  </button>
                ))}
              </div>

              {/* Browse All */}
              <Link
                href="/accommodations"
                className="hidden border-b border-primary/40 pb-1 text-[10px] uppercase tracking-[0.2em] text-primary transition-opacity hover:opacity-60 sm:inline-block"
              >
                {button("browse-rooms")}
              </Link>

              {/* Next */}
              <button
                type="button"
                onClick={next}
                aria-label={button("next")}
                className="group inline-flex min-h-11 items-center gap-3 text-xs uppercase tracking-[0.15em] text-primary transition-opacity hover:opacity-60"
              >
                <span className="hidden sm:inline">
                  {button("next")}
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </div>

            {/* Mobile Browse All */}
            <div className="mt-7 flex justify-center sm:hidden">
              <Link
                href="/accommodations"
                className="border-b border-primary/40 pb-1 text-[10px] uppercase tracking-[0.2em] text-primary"
              >
                {button("browse-rooms")}
              </Link>
            </div>

          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroRooms;
