
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import { useRouter } from "@/i18n/navigation";

import Wrapper from "../Wrapper";
import { RoomType } from "@/lib/data";

type AccommodationsRoomHeroProps = {
  room: RoomType;
};

const getLocalDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getNextDate = (date: string) => {
  if (!date) return "";

  const nextDate = new Date(`${date}T12:00:00`);
  nextDate.setDate(nextDate.getDate() + 1);

  const year = nextDate.getFullYear();
  const month = String(nextDate.getMonth() + 1).padStart(2, "0");
  const day = String(nextDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const AccommodationsRoomHero = ({
  room,
}: AccommodationsRoomHeroProps) => {
  const home = useTranslations("Home");
  const button = useTranslations("Buttons");
  const reservation = useTranslations("Reservations.roomForm");

  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const [count, setCount] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const today = getLocalDate();
  const maxGuests = Math.max(1, Number(room.guests) || 1);

  const imagePath = room.image.startsWith("/")
    ? room.image
    : `/${room.image}`;

  const handleCheckInChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const date = event.target.value;

    setStartDate(date);

    if (endDate && endDate <= date) {
      setEndDate("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!startDate || !endDate || endDate <= startDate) return;

    const params = new URLSearchParams({
      room: room.id,
      checkIn: startDate,
      checkOut: endDate,
      guests: String(count),
    });

    router.push(`/reservations?${params.toString()}`);
  };

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

  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-primary py-16 sm:py-20 lg:py-24">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1/2 overflow-hidden">
        <motion.div
          initial={{
            scale: shouldReduceMotion ? 1 : 1.08,
            opacity: shouldReduceMotion ? 1 : 0,
          }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${imagePath}")`,
          }}
        />

        <div className="absolute inset-0 bg-primary/5" />

        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-primary" />
      </div>

      {/* Main Content */}
      <Wrapper className="relative z-10 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.15,
              },
            },
          }}
          className="grid w-full grid-cols-1 bg-shell shadow-[0_25px_70px_rgba(0,0,0,0.12)] lg:grid-cols-[1.15fr_0.85fr]"
        >
          {/* Room Information */}
          <motion.div
            variants={reveal}
            className="flex flex-col p-6 sm:p-9 lg:p-10 xl:p-14"
          >
            <motion.span
              initial={{
                scaleX: shouldReduceMotion ? 1 : 0,
              }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.9,
                delay: shouldReduceMotion ? 0 : 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 h-px w-12 origin-left bg-primary/50"
            />

            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-primary/55">
              {home("hero4.room-label")}
            </p>

            <h1 className="font-display text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
              {home(`hero4.rooms.${room.title}`)}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-primary/70 sm:text-base sm:leading-8">
              {home(`hero4.rooms.${room.description}`)}
            </p>

            <div className="my-7 border-t border-primary/20" />

            {/* Room Features */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4">
              <div className="flex flex-col items-center gap-1 text-center text-primary">
                <Icon icon="eva:people-outline" width="25" height="25" />
                <span className="text-sm font-medium">{room.guests}</span>
                <span className="text-[10px] uppercase tracking-wider text-primary/55">
                  {home("hero4.guests")}
                </span>
              </div>

              <div className="flex flex-col items-center gap-1 text-center text-primary">
                <Icon icon="emojione-monotone:bed" width="25" height="25" />
                <span className="text-sm font-medium">{room.beds}</span>
                <span className="text-[10px] uppercase tracking-wider text-primary/55">
                  {home("hero4.beds")}
                </span>
              </div>

              <div className="flex flex-col items-center gap-1 text-center text-primary">
                <Icon icon="cil:bathroom" width="25" height="25" />
                <span className="text-sm font-medium">{room.bathrooms}</span>
                <span className="text-[10px] uppercase tracking-wider text-primary/55">
                  {home("hero4.bathrooms")}
                </span>
              </div>

              <div className="flex flex-col items-center gap-1 text-center text-primary">
                <Icon icon="griddy-icons:dinner" width="25" height="25" />
                <span className="text-sm font-medium">
                  {home(`hero4.${room.breakfast}`)}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-primary/55">
                  {home("hero4.breakfast")}
                </span>
              </div>
            </div>

            <div className="mt-7 border-t border-primary/20" />
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            variants={reveal}
            className="flex items-center justify-center bg-linen p-6 sm:p-9 lg:p-6 xl:p-8"
          >
            <form
              onSubmit={handleSubmit}
              className="my-auto w-full max-w-md border border-primary/10"
            >
              {/* Form Title */}
              <h2 className="px-6 py-5 font-display text-3xl leading-tight text-primary sm:px-8 sm:text-4xl">
                {reservation("title")}
              </h2>

              <div className="bg-linen px-6 pb-7 sm:px-8">
                {/* Price */}
                <div className="border-y border-primary/15 py-5">
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

                {/* Date Pickers */}
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="check-in"
                      className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-primary/60"
                    >
                      {reservation("checkIn")}
                    </label>

                    <input
                      id="check-in"
                      type="date"
                      name="checkIn"
                      value={startDate}
                      min={today}
                      onChange={handleCheckInChange}
                      required
                      className="min-h-12 w-full border border-primary/25 bg-shell px-3 py-3 text-sm text-primary outline-none transition-colors focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="check-out"
                      className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-primary/60"
                    >
                      {reservation("checkOut")}
                    </label>

                    <input
                      id="check-out"
                      type="date"
                      name="checkOut"
                      value={endDate}
                      min={
                        startDate
                          ? getNextDate(startDate)
                          : getNextDate(today)
                      }
                      onChange={(event) => setEndDate(event.target.value)}
                      required
                      disabled={!startDate}
                      className="min-h-12 w-full border border-primary/25 bg-shell px-3 py-3 text-sm text-primary outline-none transition-colors focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Guest Selector */}
                <div className="mt-5">
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-primary/60">
                    {reservation("guestsLabel")}
                  </label>

                  <div className="flex min-h-12 items-center justify-between border border-primary/25 bg-shell px-3">
                    <div className="flex items-center gap-3 text-primary">
                      <Icon icon="eva:people-outline" width="22" height="22" />

                      <span className="text-sm">
                        {reservation("guestCount", { count })}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setCount((current) => Math.max(1, current - 1))
                        }
                        disabled={count <= 1}
                        aria-label={reservation("removeGuest")}
                        className="flex h-8 w-8 items-center justify-center border border-primary/30 text-lg text-primary transition-colors hover:bg-primary hover:text-shell disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        −
                      </button>

                      <span className="min-w-4 text-center text-sm text-primary">
                        {count}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          setCount((current) =>
                            Math.min(maxGuests, current + 1),
                          )
                        }
                        disabled={count >= maxGuests}
                        aria-label={reservation("addGuest")}
                        className="flex h-8 w-8 items-center justify-center border border-primary/30 text-lg text-primary transition-colors hover:bg-primary hover:text-shell disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Booking Button */}
                <motion.button
                  type="submit"
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-4 border border-primary bg-primary px-6 py-4 text-center text-xs uppercase tracking-[0.15em] text-shell transition-colors duration-500 hover:bg-transparent hover:text-primary"
                >
                  <span>{button("book-room")}</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default AccommodationsRoomHero;
