
"use client";

import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

import Wrapper from "@/components/website/Wrapper";
import GoogleMap from "@/components/website/GoogleMap";
import ContactForm from "@/components/website/ContactForm";

const Contact = () => {
  const contact = useTranslations("Contact");
  const shouldReduceMotion = useReducedMotion();

  const smoothEase = [0.22, 1, 0.36, 1] as const;

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 25 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: {
          duration: 0.9,
          ease: smoothEase,
        },
      };

  return (
    <main className="overflow-hidden">

      {/* Contact Hero */}
      <section className="relative isolate flex min-h-[650px] items-end bg-primary sm:min-h-[620px] lg:min-h-[680px]">

        {/* Background image */}
        <motion.div
          initial={shouldReduceMotion ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 2,
            ease: smoothEase,
          }}
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/404_bg.png')",
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 -z-10 bg-primary/75" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 via-primary/45 to-primary/95" />

        <Wrapper className="relative z-10 w-full pb-10 pt-36 sm:pb-14 sm:pt-40 lg:pb-16 lg:pt-44">

          {/* Heading */}
          <motion.div
            {...reveal}
            className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center text-shell"
          >
            <span className="h-px w-12 bg-shell/60" />

            <h1 className="font-display text-5xl leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl">
              {contact("title")}
            </h1>

            <p className="max-w-xl text-sm leading-7 text-shell/75 sm:text-base sm:leading-8">
              {contact("punchline")}
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            {...reveal}
            className="mt-12 border-t border-shell/25 pt-8 sm:mt-16 sm:pt-10"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-shell/30 text-shell">
                  <Icon
                    icon="entypo:location-pin"
                    width="22"
                    height="22"
                  />
                </div>

                <div className="min-w-0">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-shell/50">
                    Location
                  </p>

                  <p className="max-w-xs break-words text-sm leading-7 text-shell/90">
                    {contact("address")}
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-shell/30 text-shell">
                  <Icon
                    icon="fluent:call-24-filled"
                    width="21"
                    height="21"
                  />
                </div>

                <div className="min-w-0">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-shell/50">
                    Telephone
                  </p>

                  <div className="flex flex-col gap-2 text-sm text-shell/90">
                    <a
                      href={`tel:${contact("tel")}`}
                      className="w-fit break-all transition-opacity hover:opacity-60"
                    >
                      {contact("tel")}
                    </a>

                    <a
                      href={`tel:${contact("tel2")}`}
                      className="w-fit break-all transition-opacity hover:opacity-60"
                    >
                      {contact("tel2")}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 sm:col-span-2 lg:col-span-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-shell/30 text-shell">
                  <Icon
                    icon="famicons:mail"
                    width="21"
                    height="21"
                  />
                </div>

                <div className="min-w-0">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-shell/50">
                    Email
                  </p>

                  <div className="flex flex-col gap-2 text-sm text-shell/90">
                    <a
                      href={`mailto:${contact("mail")}`}
                      className="w-fit break-all transition-opacity hover:opacity-60"
                    >
                      {contact("mail")}
                    </a>

                    <a
                      href={`mailto:${contact("mail2")}`}
                      className="w-fit break-all transition-opacity hover:opacity-60"
                    >
                      {contact("mail2")}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </Wrapper>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Google Map */}
      <GoogleMap />

    </main>
  );
};

export default Contact;
