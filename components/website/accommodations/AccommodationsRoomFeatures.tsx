"use client";

import { Icon } from "@iconify/react";
import { RoomType } from "@/lib/data";
import { useTranslations } from "next-intl";

import Wrapper from "../Wrapper";

const AccommodationsRoomFeatures = ({ room }: { room: RoomType }) => {
  const home = useTranslations("Home");
  const button = useTranslations("Buttons");

  return (
    <section className="flex min-h-[50svh] flex-col items-center justify-center bg-linen">
      <Wrapper className="grid grid-cols-1 py-10 md:grid-cols-2">
        {/* Room Description */}
        <div className="relative flex flex-col items-start px-5 py-9 sm:px-9 sm:py-12 md:border-r md:px-12 lg:px-10 lg:py-12 xl:px-12 xl:py-16">
          {/* Decorative detail */}
          <span className="mb-6 h-px w-12 bg-primary/50" />

          <h2 className="font-display text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
            {home(`hero4.rooms.${room.title}`)}
          </h2>

          <p className="mt-5 text-sm leading-7 text-primary/70 sm:text-base sm:leading-8">
            {home(`hero4.rooms.${room.description}`)}
          </p>

          <button
            type="button"
            disabled={true}
            title="Coming Soon"
            className="group mt-8 inline-flex min-h-12 items-center justify-center gap-4 border border-primary bg-primary px-6 py-3 text-center text-[10px] uppercase tracking-[0.15em] text-shell transition-all duration-500 hover:bg-transparent hover:text-primary disabled:cursor-not-allowed disabled:opacity-50 sm:text-xs"
          >
            <span>{button("book-room")}</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          {/* Corner decoration */}
          <span className="absolute bottom-4 right-4 h-7 w-7 border-b border-r border-primary/20" />
        </div>

        {/* Room Features */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-7 px-5 py-10 text-primary/80 sm:grid-cols-3 sm:gap-8 sm:px-9 md:ml-20 md:m-auto md:grid-cols-3 md:px-0 md:py-0">
          {room?.services?.map((service) => (
            <div
              key={service}
              className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:gap-4 sm:text-left"
            >
              <Icon
                icon={home(`hero4.${service}-icon`)}
                width="40"
                height="40"
                className="shrink-0 sm:h-[45px] sm:w-[45px] md:h-[50px] md:w-[50px]"
              />

              <span className="text-[10px] uppercase tracking-wider sm:text-xs">
                {home(`hero4.${service}`)}
              </span>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default AccommodationsRoomFeatures;