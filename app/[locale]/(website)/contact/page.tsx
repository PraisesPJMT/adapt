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

  return (
    <div>
      <section className="relative flex min-h-[60svh]">
        {/* Background - Top Half */}
        <div className="absolute inset-x-0 top-0 h-full overflow-hidden bg-primary flex items-end justify-center">

          {/* Background image */}
          <motion.div
            initial={shouldReduceMotion ? false : { scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 2,
              ease: smoothEase,
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/404_bg.png')",
            }}
          />

          {/* Primary color overlay */}
          <div className="absolute inset-0 bg-primary/80" />

          {/* Subtle texture / shading */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/20 to-primary/90" />

          <Wrapper className="z-50 flex flex-col gap-8">
            <div className=" mx-auto text-shell text-center flex flex-col gap-4">
              <h1 className="text-8xl font-black">{contact("title")}</h1>
              <p className="max-w-2xl">{contact("punchline")}</p>
            </div>

            <div className=" w-full py-5 border-t-2 border-t-shell grid grid-cols-2 gap-4 md:flex justify-center items-center md:gap-20 text-shell">
              <div className="max-w-80 grid grid-cols-[40px_1fr] gap-2">
                <Icon
                  icon="entypo:location-pin"
                  width="40"
                  height="40"
                />
                <p>{contact("address")}</p>
              </div>

              <div className="max-w-80 grid grid-cols-[40px_1fr] gap-2">
                <Icon
                  icon="fluent:call-24-filled"
                  width="40"
                  height="40"
                />

                <div className="flex flex-col gap-1">
                  <a href={`tel:${contact("tel")}`}>{contact("tel")}</a>

                  <a href={`tel:${contact("tel2")}`}>{contact("tel2")}</a>
                </div>
              </div>

              <div className="max-w-80 grid grid-cols-[40px_1fr] gap-2">
                  <Icon
                    icon="famicons:mail"
                    width="40"
                    height="40"
                  />

                  <div className="flex flex-col gap-1">
                    <a href={`mailto:${contact("mail")}`}>{contact("mail")}</a>

                    <a href={`mailto:${contact("mail2")}`}>{contact("mail2")}</a>
              </div>

              </div>
            </div>
          </Wrapper>
        </div>
      </section>

      <ContactForm />

     <GoogleMap/>
    </div>
  )
}

export default Contact;
