"use client";

import Wrapper from "../Wrapper";

import { Icon } from "@iconify/react";
import { Link } from "@/i18n/navigation";
import { rooms } from "../../../lib/data";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

const AccommodationsRooms = () => {
  const home = useTranslations("Home");
  const button = useTranslations("Buttons");
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 50,
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

  return (
    <section className="bg-linen">
      <Wrapper className="my-10 md:my-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:pb-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: shouldReduceMotion ? 0 : (index % 2) * 0.15,
              }}
              className="relative bg-shell shadow md:even:translate-y-16"
            >
              {/* Room Image */}
              <div className="group aspect-square overflow-hidden bg-cover bg-center">
                <motion.div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${room.image}')`,
                  }}
                  initial={false}
                  whileHover={
                    shouldReduceMotion ? {} : { scale: 1.045 }
                  }
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>

              {/* Room Information */}
              <div className="relative flex flex-col bg-shell p-6 shadow-[0_25px_70px_rgba(0,0,0,0.08)] sm:p-9 lg:p-10 xl:p-12">
                {/* Decorative Detail */}
                <motion.span
                  initial={{
                    scaleX: shouldReduceMotion ? 1 : 0,
                  }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: shouldReduceMotion ? 0 : 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mb-5 h-px w-12 origin-left bg-primary/50"
                />

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

                {/* Booking Buttons */}
                <div className="mt-8 flex flex-col gap-2 lg:flex-row">
                  <Link
                    href={`/accommodations/${room.id}`}
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-4 border border-primary bg-transparent px-6 py-4 text-center text-xs uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:bg-primary hover:text-shell sm:w-fit sm:px-8"
                  >
                    <span>{button("see-room")}</span>
                  </Link>

                  <Link
                    href={`/reservations?room=${room.id}`}
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-4 border border-primary bg-primary px-6 py-4 text-center text-xs uppercase tracking-[0.15em] text-shell transition-all duration-500 hover:bg-transparent hover:text-primary sm:w-fit sm:px-8"
                  >
                    <span>{button("book-room")}</span>

                    <motion.span
                      animate={
                        shouldReduceMotion ? {} : undefined
                      }
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </motion.span>
                  </Link>
                </div>

                {/* Corner Decoration */}
                <span className="absolute bottom-4 right-4 h-7 w-7 border-b border-r border-primary/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default AccommodationsRooms;