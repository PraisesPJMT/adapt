
"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

import Wrapper from "../Wrapper";
import { Link } from "@/i18n/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

const images = [
  "/about_amenities_1.png",
  "/about_amenities_2.png",
  "/about_amenities_3.png",
  "/about_amenities_4.png",
];

const AboutAmenities = () => {
  const amenities = useTranslations("About.amenities");
  const button = useTranslations("Buttons");
  const shouldReduceMotion = useReducedMotion();

  const smoothEase = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative isolate overflow-hidden bg-shell py-16 sm:py-24 lg:py-32">
      <Wrapper className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-6 lg:gap-12">

          {/* Left - Image Grid */}
          <div className="mx-auto grid w-full max-w-[560px] grid-cols-2 gap-3 p-2 sm:gap-5 sm:p-5 lg:gap-6 lg:p-8">
            {images.map((image, index) => (
              <motion.div
                key={image}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 35,
                        scale: 0.96,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.85,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                  ease,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 1.025 }
                }
                className="group relative aspect-square overflow-hidden bg-primary/5"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${image}')`,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Right - Text Content */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 30,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              ease,
            }}
            className="flex flex-col items-center justify-center px-5 py-12 text-center sm:px-9 sm:py-14 lg:p-10 xl:p-14"
          >
            <motion.span
              initial={
                shouldReduceMotion
                  ? false
                  : { scaleX: 0 }
              }
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                ease,
              }}
              className="mb-5 h-px w-12 origin-center bg-primary/50"
            />

            <h1 className="font-display text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
              {amenities("title")}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-primary/70 sm:text-base sm:leading-8">
              {amenities("description")}
            </p>

            {/* CTA */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : 0.65,
                ease: smoothEase,
              }}
              className="mt-8"
            >
              <Link
                href="/experience"
                className="group inline-flex min-h-12 items-center justify-center gap-4 border border-primary bg-transparent px-6 py-3 text-center text-xs uppercase tracking-[0.15em] text-primary transition-all duration-500 hover:bg-primary hover:text-shell sm:px-8 sm:text-sm"
              >
                <span>{button("explore-experience")}</span>
  
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </Wrapper>
    </section>
  );
};

export default AboutAmenities;
