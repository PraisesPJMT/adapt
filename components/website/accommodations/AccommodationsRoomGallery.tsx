"use client";

import { RoomType } from "@/lib/data";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

import Wrapper from "../Wrapper";

const AccommodationsRoomGallery = ({ room }: { room: RoomType }) => {
  const home = useTranslations("Home");
  const button = useTranslations("Buttons");
  const shouldReduceMotion = useReducedMotion();

  const galleryRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  // Automatic horizontal scrolling
  useEffect(() => {
    const gallery = galleryRef.current;
    const track = trackRef.current;

    if (!gallery || !track || shouldReduceMotion || room.images.length < 2) {
      return;
    }

    let animationFrame: number;
    let previousTime = 0;

    const scrollSpeed = 30; // Pixels per second

    const animate = (time: number) => {
      if (!previousTime) previousTime = time;

      const delta = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;

      if (!isPaused.current) {
        const originalGroup = track.children[0] as HTMLElement;

        if (originalGroup) {
          const groupWidth = originalGroup.offsetWidth;

          gallery.scrollLeft += scrollSpeed * delta;

          // Seamlessly restart when the first set has passed.
          if (groupWidth > 0 && gallery.scrollLeft >= groupWidth) {
            gallery.scrollLeft -= groupWidth;
          }
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [room.images, shouldReduceMotion]);

  const reveal = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const renderImages = (duplicate = false) => (
    <div
      className="flex shrink-0 gap-3 sm:gap-5"
      aria-hidden={duplicate ? true : undefined}
    >
      {room.images.map((image, index) => (
        <motion.div
          key={`${image}-${index}-${duplicate ? "duplicate" : "original"}`}
          whileHover={shouldReduceMotion ? {} : { scale: 1.025 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative aspect-square w-[220px] shrink-0 overflow-hidden bg-primary/5 sm:w-[280px] lg:w-[320px]"
        >
          <img
            src={image}
            alt={
              duplicate
                ? ""
                : `${home(`hero4.rooms.${room.title}`)} gallery image ${index + 1}`
            }
            draggable={false}
            loading="lazy"
            className="h-full w-full select-none object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-700 group-hover:bg-primary/10" />
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="flex min-h-svh flex-col items-center justify-center overflow-hidden bg-shell py-12 sm:py-16 lg:py-20">
      <Wrapper className="flex w-full flex-col">
        {/* Section Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="relative flex flex-col items-center px-5 py-9 text-center sm:px-9 sm:py-12 md:px-12 lg:px-10 lg:py-12 xl:px-12 xl:py-16"
        >
          {/* Decorative Detail */}
          <motion.span
            initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-6 h-px w-12 origin-center bg-primary/50"
          />

          <h2 className="font-display text-center text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
            {home(`hero4.rooms.${room.title}`)}
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-primary/70 sm:text-base sm:leading-8">
            {home(`hero4.rooms.${room.description}`)}
          </p>

          {/* Corner Decoration */}
          <span className="absolute bottom-4 right-4 h-7 w-7 border-b border-r border-primary/20" />
        </motion.div>

        {/* Image Gallery */}
        {room.images.length > 0 && (
          <motion.div
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              y: shouldReduceMotion ? 0 : 30,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            ref={galleryRef}
            onMouseEnter={() => {
              isPaused.current = true;
            }}
            onMouseLeave={() => {
              isPaused.current = false;
            }}
            onPointerDown={() => {
              isPaused.current = true;
            }}
            onPointerUp={() => {
              isPaused.current = false;
            }}
            onPointerCancel={() => {
              isPaused.current = false;
            }}
            onFocus={() => {
              isPaused.current = true;
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                isPaused.current = false;
              }
            }}
            tabIndex={0}
            aria-label="Room image gallery. Scroll horizontally to view images."
            className="w-full overflow-x-auto overflow-y-hidden overscroll-x-contain focus-visible:outline-1 focus-visible:outline-primary"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(0,0,0,0.25) transparent",
              scrollBehavior: "auto",
            }}
          >
            <div
              ref={trackRef}
              className="flex w-max gap-3 pr-3 sm:gap-5 sm:pr-5"
            >
              {renderImages()}

              {/* Duplicate images for seamless automatic scrolling */}
              {!shouldReduceMotion && room.images.length > 1 && (
                renderImages(true)
              )}
            </div>
          </motion.div>
        )}

        {/* Booking Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="flex justify-center px-5 pb-9 pt-10 sm:pb-12"
        >
          <button
            type="button"
            disabled
            title="Coming Soon"
            className="group inline-flex min-h-12 items-center justify-center gap-4 border border-primary bg-primary px-6 py-3 text-center text-[10px] uppercase tracking-[0.15em] text-shell transition-all duration-500 hover:bg-transparent hover:text-primary disabled:cursor-not-allowed disabled:opacity-50 sm:text-xs"
          >
            <span>{button("book-room")}</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default AccommodationsRoomGallery;