
"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import Wrapper from "../Wrapper";
import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";

const Reachout = ({
  position = "right",
  title = "Contact",
  text = "Please reach out to us to know more about this:"
}: {
    position?: "left" | "right";
    title: string,
    text: string
}) => {
  const button = useTranslations("Buttons");
  const contact = useTranslations("Contact");
  const shouldReduceMotion = useReducedMotion();

  const smoothEase = [0.22, 1, 0.36, 1] as const;

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: smoothEase,
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <section className="relative isolate w-full overflow-hidden bg-shell py-20 sm:py-24 lg:py-28">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-primary" />

        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-b from-primary/10 via-primary/30 to-primary/70" />
      </div>

      {/* Content Wrapper */}
      <Wrapper className="relative z-10">

        <div
          className={`flex w-full ${
            position === "right"
              ? "justify-end"
              : "justify-start"
          }`}
        >

          {/* Content Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              relative w-full
              bg-shell
              px-6 py-9
              shadow-[0_25px_70px_rgba(0,0,0,0.09)]
              sm:w-[90%]
              sm:px-10 sm:py-12
              md:w-[80%]
              md:px-12 md:py-14
              lg:w-[65%]
              xl:w-[55%]
              xl:px-14 xl:py-16
            "
          >

            {/* Decorative Line */}
            <motion.span
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.9,
                delay: shouldReduceMotion ? 0 : 0.2,
                ease: smoothEase,
              }}
              style={{
                transformOrigin:
                  position === "left" ? "left" : "right",
              }}
              className="mb-7 block h-px w-12 bg-primary/50"
            />

            {/* Main Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="flex flex-col items-start"
            >

              <motion.h2
                variants={fadeUp}
                className="
                  font-display
                  text-3xl
                  leading-tight
                  text-primary
                  sm:text-4xl
                  md:text-5xl
                "
              >
                {title}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="
                  mt-4
                  max-w-lg
                  text-sm
                  leading-7
                  text-primary/70
                  sm:text-base
                  sm:leading-8
                "
              >
                {text}
              </motion.p>

              {/* Contact Details */}
              <motion.div
                variants={fadeUp}
                className="
                  my-7
                  grid
                  w-full
                  grid-cols-1
                  gap-6
                  sm:grid-cols-2
                  sm:gap-8
                "
              >

                {/* Telephone */}
                <div className="flex min-w-0 items-start gap-4">

                  <div className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    border border-primary/30
                    text-primary
                  ">
                    <Icon
                      icon="fluent:call-24-filled"
                      width="21"
                      height="21"
                    />
                  </div>

                  <div className="min-w-0">
                    {/*<p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-primary/50">
                      Telephone
                    </p>*/}

                    <div className="flex flex-col gap-2 text-sm text-primary/90">
                      <a
                        href={`tel:${contact("tel")}`}
                        className="w-fit max-w-full break-all transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      >
                        {contact("tel")}
                      </a>

                      <a
                        href={`tel:${contact("tel2")}`}
                        className="w-fit max-w-full break-all transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      >
                        {contact("tel2")}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex min-w-0 items-start gap-4">

                  <div className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    border border-primary/30
                    text-primary
                  ">
                    <Icon
                      icon="famicons:mail"
                      width="21"
                      height="21"
                    />
                  </div>

                  <div className="min-w-0">
                    {/*<p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-primary/50">
                      Email
                    </p>*/}

                    <div className="flex flex-col gap-2 text-sm text-primary/90">
                      <a
                        href={`mailto:${contact("mail")}`}
                        className="w-fit max-w-full break-all transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      >
                        {contact("mail")}
                      </a>

                      <a
                        href={`mailto:${contact("mail2")}`}
                        className="w-fit max-w-full break-all transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      >
                        {contact("mail2")}
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeUp}>
                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    gap-4
                    border border-primary
                    bg-primary
                    px-6 py-3
                    text-center
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-shell
                    transition-all
                    duration-500
                    hover:bg-transparent
                    hover:text-primary
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-primary
                    sm:px-8
                    sm:text-sm
                  "
                >
                  <span>{button("contact")}</span>

                  <motion.span
                    animate={
                      shouldReduceMotion
                        ? {}
                        : undefined
                    }
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Reachout;
