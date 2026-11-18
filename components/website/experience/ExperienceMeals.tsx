"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import Wrapper from "../Wrapper";

type MealItem = {
  name: string;
  description: string;
};

type MealTab = {
  id: string;
  title: string;
  time: string;
  foods: MealItem[];
};

const ease = [0.22, 1, 0.36, 1] as const;

const ExperienceMeals = () => {
  const meals = useTranslations("Experience.meals");
  const shouldReduceMotion = useReducedMotion();

  const tabs = meals.raw("tabs") as MealTab[];

  const [activeTab, setActiveTab] = useState("breakfast");

  const activeMeal = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <section className="relative isolate overflow-hidden bg-linen py-16 sm:py-24 lg:py-32">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Large Rotating Circle */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { rotate: 360 }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-48 -top-48 h-[420px] w-[420px] rounded-full border border-primary/10 sm:-right-64 sm:-top-64 sm:h-[700px] sm:w-[700px]"
        >
          <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-primary/30" />
        </motion.div>

        {/* Second Rotating Circle */}
        <motion.div
          animate={shouldReduceMotion ? undefined : { rotate: -360 }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full border border-primary/10 sm:-bottom-64 sm:-left-64 sm:h-[700px] sm:w-[700px]"
        >
          <div className="absolute right-1/4 top-0 h-2 w-2 rounded-full bg-primary/25" />
        </motion.div>

        {/* Subtle Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #263B30 1px, transparent 1px), linear-gradient(to bottom, #263B30 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />
      </div>

      <Wrapper className="relative z-10">
        {/* Section Introduction */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            ease,
          }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <motion.span
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, scaleX: 0 }
            }
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              ease,
            }}
            className="mx-auto mb-6 block h-px w-16 origin-center bg-primary/50"
          />

          <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            {meals("title")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary/70 sm:text-base sm:leading-8">
            {meals("description")}
          </p>
        </motion.div>

        {/* Meal Tabs */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease,
          }}
          role="tablist"
          aria-label={meals("tabLabel")}
          className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:mb-16"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                id={`meal-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`meal-panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex min-h-[100px] flex-col items-center justify-center overflow-hidden border px-4 py-5 text-center transition-colors duration-500 sm:min-h-[120px] sm:px-5 ${
                  isActive
                    ? "border-primary bg-primary text-shell"
                    : "border-primary/20 bg-transparent text-primary hover:border-primary"
                }`}
              >
                <span className="relative z-10 font-display text-2xl sm:text-3xl">
                  {tab.title}
                </span>

                <span
                  className={`relative z-10 mt-2 text-[10px] uppercase tracking-[0.2em] sm:text-xs ${
                    isActive ? "text-shell/70" : "text-primary/55"
                  }`}
                >
                  {tab.time}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="active-meal-tab"
                    className="absolute inset-0 -z-0 bg-primary"
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.4,
                      ease,
                    }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Active Meal Content */}
        <AnimatePresence mode="wait">
          {activeMeal && (
            <motion.div
              key={activeMeal.id}
              id={`meal-panel-${activeMeal.id}`}
              role="tabpanel"
              aria-labelledby={`meal-tab-${activeMeal.id}`}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 18 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -12 }
              }
              transition={{
                duration: shouldReduceMotion ? 0 : 0.45,
                ease,
              }}
              className="mx-auto max-w-5xl"
            >
              {/* Meal Heading */}
              <div className="mb-7 flex items-center gap-4 sm:mb-9">
                <h3 className="font-display text-2xl text-primary sm:text-3xl">
                  {activeMeal.title}
                </h3>

                <span className="h-px flex-1 bg-primary/20" />

                <span className="text-xs tabular-nums text-primary/50">
                  {String(activeMeal.foods.length).padStart(2, "0")}
                </span>
              </div>

              {/* Food Grid */}
              <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 sm:gap-x-12 lg:gap-x-16">
                {activeMeal.foods.map((food, index) => (
                  <motion.div
                    key={`${activeMeal.id}-${food.name}`}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, y: 18 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.55,
                      delay: shouldReduceMotion ? 0 : index * 0.07,
                      ease,
                    }}
                    className="group flex gap-5 border-b border-primary/15 py-6 sm:py-7"
                  >
                    <span className="pt-1 text-xs tabular-nums text-primary/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1">
                      <h4 className="font-display text-xl leading-snug text-primary transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                        {food.name}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-primary/65">
                        {food.description}
                      </p>
                    </div>

                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/30 transition-colors duration-300 group-hover:bg-primary" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Decorative Label */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0 }
          }
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            delay: shouldReduceMotion ? 0 : 0.3,
          }}
          className="mt-14 flex items-center justify-center gap-3 sm:mt-20"
        >
          <span className="h-px w-8 bg-primary/20" />

          <p className="text-center text-[9px] uppercase tracking-[0.3em] text-primary/40 sm:text-[10px]">
            {meals("footer")}
          </p>

          <span className="h-px w-8 bg-primary/20" />
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default ExperienceMeals;
