
"use client";

import { Icon } from "@iconify/react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import Wrapper from "./Wrapper";
import FullLogo from "./FullLogo";

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

const primaryLinks = [
  { href: "/about", key: "about" },
  { href: "/accommodations", key: "accommodations" },
  { href: "/experience", key: "experience" },
  { href: "/gallery", key: "gallery" },
  { href: "/contact", key: "contact" },
] as const;

const secondaryLinks = [
  { href: "/legal-notice", key: "legal-notice" },
  { href: "/privacy-notice", key: "privacy-notice" },
  { href: "/site-usage", key: "site-usage" },
  { href: "/faqs", key: "faqs" },
  { href: "/careers", key: "careers" },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function FooterColumn({
  title,
  links,
  translate,
}: {
  title: string;
  links: readonly { href: string; key: string }[];
  translate: (key: string) => string;
}) {
  return (
    <motion.div variants={itemVariants}>
      <h4 className="mb-5 text-xl md:text-2xl">
        {title}
      </h4>

      <hr className="w-20 md:w-40 bg-transparent border-none"/>

      <nav className="flex flex-col items-start gap-3">
        {links.map((link, index) => (
          <motion.div
            key={link.href}
            initial="rest"
            whileHover="hover"
          >
            <Link
              href={link.href}
              className="group relative inline-flex items-center gap-2 text-sm md:text-base"
            >
              <span>{translate(link.key)}</span>

              <motion.span
                variants={{
                  rest: { width: 0, opacity: 0 },
                  hover: { width: 18, opacity: 1 },
                }}
                transition={{ duration: 0.25 }}
                className="h-px bg-current"
              />
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
}

const Footer =()=> {
  const nav = useTranslations("Navigation");
  const con = useTranslations("Contact");
  const fot = useTranslations("Footer");

  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.15 },
        variants: containerVariants,
      };

  const item = shouldReduceMotion
    ? {}
    : {
        variants: itemVariants,
      };

  return (
    <footer className="w-full overflow-hidden bg-linen text-primary">

      {/* Top section */}
      <section>
        <Wrapper className="flex flex-col justify-between gap-14 py-14 md:flex-row md:gap-20 md:py-20">

          {/* Brand */}
          <motion.div
            {...item}
            className="flex max-w-72 flex-col"
          >
            <Link
              href="/"
              aria-label="Home"
              className="mb-6 inline-block w-fit"
            >
              <FullLogo className="h-14 w-auto" />
            </Link>

            <p className="text-sm leading-relaxed md:text-base">
              {fot("punchline")}
            </p>
          </motion.div>

          {/* Socials */}
          <motion.div {...item}>
            <h4 className="mb-5 text-lg font-bold">
              {fot("follow")}
            </h4>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -5, rotate: -5, scale: 1.08 }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : { scale: 0.92 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 15,
                  }}
                  className="flex h-11 w-11 items-center justify-center bg-primary text-linen transition-colors duration-300 hover:bg-primary/80"
                >
                  <Icon
                    icon={social.icon}
                    width="22"
                    height="22"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </Wrapper>
      </section>

      {/* Divider */}
      <Wrapper>
        <motion.div
          initial={shouldReduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-px origin-left bg-primary/20"
        />
      </Wrapper>

      {/* Navigation section */}
      <motion.section
        {...reveal}
        className="py-14 md:py-20"
      >
        <Wrapper className="flex flex-col justify-between gap-14 md:flex-row md:gap-16">

          {/* Navigation links */}
          <div className="grid grid-cols-2 gap-10 md:gap-40">
            <FooterColumn
              title={fot("links1")}
              links={primaryLinks}
              translate={nav}
            />

            <FooterColumn
              title={fot("links2")}
              links={secondaryLinks}
              translate={nav}
            />
          </div>

          {/* Contact */}
          <motion.div
            {...item}
            className="max-w-64"
          >
            <h4 className="mb-5 text-xl md:text-2xl">
              {fot("contact-title")}
            </h4>

            <div className="flex flex-col gap-4 text-sm leading-relaxed md:text-base">
              <p>{con("address")}</p>

              <a
                href="tel:+2348012345678"
                className="w-fit transition-opacity hover:opacity-60"
              >
                {con("tel")}
              </a>

              <a
                href="mailto:contact@adapt.com"
                className="w-fit transition-opacity hover:opacity-60"
              >
                {con("mail")}
              </a>
            </div>
          </motion.div>

        </Wrapper>
      </motion.section>

      {/* Copyright */}
      <section className="bg-primary text-linen">
        <Wrapper className="flex items-center justify-center py-5 md:py-6">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center font-sans text-xs md:text-sm"
          >
            {fot("copyright")}
          </motion.p>
        </Wrapper>
      </section>

    </footer>
  );
}

export default Footer;
