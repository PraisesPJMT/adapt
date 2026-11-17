"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import Wrapper from "./Wrapper";

const GoogleMap = () => {
  const t = useTranslations("Contact.map");
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  // Replace this query with your resort's exact street address
  const mapQuery = encodeURIComponent(
    "Akwa Ibom State, Nigeria"
  );

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <section className="bg-shell py-20 md:py-28">
      <Wrapper className="">

        {/* Section Heading */}
        <motion.div
          {...reveal}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-primary/60">
            {t("eyebrow")}
          </p>

          <h2 className="font-display text-4xl leading-tight text-primary sm:text-5xl md:text-6xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-8 text-primary/65 md:text-base">
            {t("description")}
          </p>
        </motion.div>

        {/* Map and Location Details */}
        <motion.div
          {...reveal}
          className="grid overflow-hidden border border-primary/15 lg:grid-cols-[1.5fr_0.7fr]"
        >

          {/* Google Map */}
          <div className="relative h-[350px] sm:h-[450px] lg:h-[550px]">
            <iframe
              title="Adapt Resort Location"
              src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 grayscale-[0.6] contrast-[0.9]"
            />
          </div>

          {/* Location Information */}
          <div className="flex flex-col justify-between bg-primary p-8 text-linen sm:p-10 lg:p-12">

            <div>
              <span className="mb-8 block h-px w-12 bg-linen/50" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-linen/60">
                {t("state")}
              </p>

              <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
                {t("country")}
              </h3>

              <p className="mt-8 text-sm leading-8 text-linen/70">
                {useTranslations("Contact")("address")}
              </p>
            </div>

            <div className="mt-12">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-between border border-linen/30 px-6 py-5 text-xs uppercase tracking-[0.18em] transition-colors duration-500 hover:bg-linen hover:text-primary"
              >
                <span>{t("directions")}</span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                  ↗
                </span>
              </a>
            </div>

          </div>
        </motion.div>

      </Wrapper>
    </section>
  );
}
 export default GoogleMap;
