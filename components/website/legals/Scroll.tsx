
"use client";

import { Icon } from "@iconify/react";
import { motion, useReducedMotion } from "motion/react";

import Wrapper from "../Wrapper";

export type ScrollBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "details";
      items: {
        label: string;
        value: string;
      }[];
    };

export type ScrollSection = {
  title: string;
  content: ScrollBlock[];
};

export type ScrollData = {
  lastUpdateLabel: string;
  lastUpdate: string;
  sections: ScrollSection[];
};

type ScrollProps = {
  data: ScrollData;
  followLabel: string;
};

const socialLinks = [
  {
    name: "Facebook",
    icon: "basil:facebook-solid",
    href: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: "basil:instagram-solid",
    href: "https://www.instagram.com",
  },
  {
    name: "X",
    icon: "basil:twitter-solid",
    href: "https://www.x.com",
  },
];

const Scroll = ({ data, followLabel }: ScrollProps) => {
  const shouldReduceMotion = useReducedMotion();

  const smoothEase = [0.22, 1, 0.36, 1] as const;

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
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

  return (
    <section className="relative min-h-svh bg-shell">
      <Wrapper
        className="
          grid grid-cols-1 gap-10
          py-10 sm:py-14
          lg:grid-cols-[9rem_minmax(0,48rem)]
          lg:justify-center
          lg:gap-16
          lg:py-20
        "
      >
        {/* Sticky Social Sidebar */}
        <motion.aside
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: smoothEase,
          }}
          className="
            relative
            lg:sticky lg:top-32
            lg:h-fit
            lg:self-start
          "
        >
          <h4 className="mb-5 text-lg font-bold text-primary">
            {followLabel}
          </h4>

          <div className="flex gap-3 lg:flex-col">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 12 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  ease: smoothEase,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 1.08, y: -3 }
                }
                whileTap={{ scale: 0.95 }}
                className="
                  flex h-11 w-11
                  items-center justify-center
                  bg-primary text-linen
                  transition-colors duration-300
                  hover:bg-primary/80
                "
              >
                <Icon
                  icon={social.icon}
                  width="22"
                  height="22"
                />
              </motion.a>
            ))}
          </div>
        </motion.aside>

        {/* Legal Notice Content */}
        <div className="min-w-0">
          {/* Last Updated */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="
              mb-8 flex flex-wrap
              items-center gap-3
              text-xs uppercase
              tracking-wide text-primary
              sm:text-sm
            "
          >
            <p>{data.lastUpdateLabel}</p>

            <span className="block h-1.25 w-12 bg-primary sm:w-20" />

            <p>{data.lastUpdate}</p>
          </motion.div>

          {/* Sections */}
          <div className="flex flex-col gap-10 sm:gap-14">
            {data.sections.map((section, index) => (
              <motion.section
                key={`${section.title}-${index}`}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
              >
                <h2 className="
                  my-3 font-display
                  text-3xl leading-tight
                  text-primary
                  sm:text-4xl
                  lg:text-5xl
                ">
                  {section.title}
                </h2>

                <div className="mt-4 flex flex-col gap-3">
                  {section.content.map((block, blockIndex) => {
                    if (block.type === "paragraph") {
                      return (
                        <p
                          key={blockIndex}
                          className="
                            text-sm leading-7
                            text-primary
                            sm:text-base sm:leading-8
                          "
                        >
                          {block.text}
                        </p>
                      );
                    }

                    return (
                      <div
                        key={blockIndex}
                        className="flex flex-col gap-2"
                      >
                        {block.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="
                              grid grid-cols-[minmax(0,1fr)_minmax(0,3fr)]
                              gap-3
                              text-sm leading-7
                              text-primary
                              sm:text-base sm:leading-8
                            "
                          >
                            <p className="font-bold">
                              {item.label}
                            </p>

                            <p className="min-w-0 break-words">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Scroll;
