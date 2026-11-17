
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

const inquiryTypes = [
  "general",
  "accommodation",
  "reservations",
  "experiences",
  "partnership",
  "other",
] as const;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  inquiry: "",
  message: "",
};

const ContactForm = () => {
  const t = useTranslations("Contact");
  const formT = useTranslations("Contact.form");
  const shouldReduceMotion = useReducedMotion();

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [form, setForm] = useState(initialForm);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border-b border-primary/25 bg-transparent py-4 text-sm text-primary outline-none transition-colors duration-300 placeholder:text-primary/40 focus:border-primary";

  const labelClass =
    "mb-2 block text-[10px] uppercase tracking-[0.2em] text-primary/65";

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 25 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  return (
    <section className="bg-linen py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* Introduction */}
          <motion.div {...reveal} className="flex flex-col">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-primary/60">
              {formT("eyebrow")}
            </p>

            <h2 className="max-w-md font-display text-4xl leading-tight text-primary sm:text-5xl md:text-6xl">
              {formT("title")}
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-8 text-primary/65 md:text-base">
              {formT("description")}
            </p>

            <div className="mt-12 border-t border-primary/20 pt-7">
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary/50">
                {formT("direct-contact")}
              </p>

              <a
                href={`mailto:${t("mail")}`}
                className="mt-3 inline-block font-display text-xl text-primary transition-opacity hover:opacity-60"
              >
                {t("mail")}
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div {...reveal}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-9"
            >
              {/* Name and email */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    {formT("name")}
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={formT("name-placeholder")}
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    autoComplete="name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    {formT("email")}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={formT("email-placeholder")}
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              {/* Phone and inquiry */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    {formT("phone")}
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={formT("phone-placeholder")}
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    autoComplete="tel"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="inquiry" className={labelClass}>
                    {formT("inquiry")}
                  </label>

                  <select
                    id="inquiry"
                    name="inquiry"
                    value={form.inquiry}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                    required
                  >
                    <option value="" disabled className="bg-linen">
                      {formT("inquiry-placeholder")}
                    </option>

                    {inquiryTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-linen"
                      >
                        {formT(`inquiry-types.${type}`)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  {formT("message")}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={formT("message-placeholder")}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>

              {/* Feedback */}
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className="text-sm text-primary"
                >
                  {formT("success")}
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="text-sm text-red-700"
                >
                  {formT("error")}
                </motion.p>
              )}

              {/* Submit */}
              <div>
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-6 bg-primary px-9 py-4 text-xs uppercase tracking-[0.2em] text-shell transition-colors duration-300 hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading"
                    ? formT("sending")
                    : formT("submit")}

                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
