
"use client";

import { useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import Wrapper from "../Wrapper";

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQCategory = {
  title: string;
  questions: FAQItem[];
};

export type FAQData = {
  title: string;
  description: string;
  searchPlaceholder: string;
  allLabel: string;
  emptyTitle: string;
  emptyDescription: string;
  categories: FAQCategory[];
  questionCountLabel: string;
  resultsLabel: string;
  clearSearchLabel: string;
  viewAllLabel: string;
};

type FAQProps = {
  data: FAQData;
};

const FAQScroll = ({ data }: FAQProps) => {
  const shouldReduceMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] = useState("all");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const smoothEase = [0.22, 1, 0.36, 1] as const;

  const filteredCategories = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return data.categories
      .map((category, categoryIndex) => ({
        ...category,
        originalIndex: categoryIndex,
        questions: category.questions
          .map((question, questionIndex) => ({
            ...question,
            originalIndex: questionIndex,
          }))
          .filter((question) => {
            const matchesSearch =
              !normalizedSearch ||
              question.question.toLowerCase().includes(normalizedSearch) ||
              question.answer.toLowerCase().includes(normalizedSearch);

            return matchesSearch;
          }),
      }))
      .filter((category) => {
        const matchesCategory =
          activeCategory === "all" ||
          category.title === activeCategory;

        return matchesCategory && category.questions.length > 0;
      });
  }, [data.categories, activeCategory, search]);

  const totalQuestions = data.categories.reduce(
    (total, category) => total + category.questions.length,
    0
  );

  const toggleQuestion = (id: string) => {
    setOpenQuestion((current) => (current === id ? null : id));
  };

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
    <section className="relative min-h-svh overflow-hidden bg-shell">
      <Wrapper
        className="
          mx-auto max-w-6xl
          py-16 sm:py-20
          lg:py-28
        "
      >
        {/* Introduction */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <motion.span
            initial={{
              opacity: 0,
              scaleX: shouldReduceMotion ? 1 : 0,
            }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              ease: smoothEase,
            }}
            className="
              mx-auto mb-6 block
              h-px w-16 origin-center
              bg-primary
            "
          />

          <h1 className="
            font-display
            text-4xl leading-[1.1]
            tracking-tight text-primary
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          ">
            {data.title}
          </h1>

          <p className="
            mx-auto mt-5 max-w-2xl
            text-sm leading-7 text-primary/75
            sm:text-base sm:leading-8
          ">
            {data.description}
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-10 max-w-2xl"
        >
          <div className="
            group relative flex items-center
            border-b border-primary/30
            transition-colors duration-500
            focus-within:border-primary
          ">
            <Icon
              icon="lucide:search"
              width="20"
              height="20"
              className="shrink-0 text-primary/60 transition-colors group-focus-within:text-primary"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setOpenQuestion(null);
              }}
              placeholder={data.searchPlaceholder}
              aria-label={data.searchPlaceholder}
              className="
                h-14 w-full
                bg-transparent px-4
                text-sm text-primary
                outline-none
                placeholder:text-primary/45
                sm:text-base
              "
            />

            <AnimatePresence>
              {search && (
                <motion.button
                  type="button"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="flex h-9 w-9 shrink-0 items-center justify-center text-primary/60 transition-colors hover:text-primary"
                >
                  <Icon icon="lucide:x" width="18" height="18" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="
            mb-12 flex flex-wrap
            justify-center gap-2
            sm:gap-3
          "
        >
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setOpenQuestion(null);
            }}
            className={`
              relative overflow-hidden
              px-4 py-2.5
              text-xs uppercase tracking-wider
              transition-colors duration-300
              sm:px-5 sm:text-sm
              ${
                activeCategory === "all"
                  ? "bg-primary text-shell"
                  : "border border-primary/20 text-primary hover:border-primary"
              }
            `}
          >
            {data.allLabel}
            {activeCategory === "all" && (
              <motion.span
                layoutId="faq-active-category"
                className="absolute inset-0 -z-0 bg-primary"
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.4,
                  ease: smoothEase,
                }}
              />
            )}
          </button>

          {data.categories.map((category) => {
            const isActive = activeCategory === category.title;

            return (
              <button
                key={category.title}
                type="button"
                onClick={() => {
                  setActiveCategory(category.title);
                  setOpenQuestion(null);
                }}
                className={`
                  relative px-4 py-2.5
                  text-xs uppercase tracking-wider
                  transition-colors duration-300
                  sm:px-5 sm:text-sm
                  ${
                    isActive
                      ? "bg-primary text-shell"
                      : "border border-primary/20 text-primary hover:border-primary"
                  }
                `}
              >
                {category.title}
              </button>
            );
          })}
        </motion.div>

        {/* Question Count */}
        <div className="
          mb-5 flex items-center
          justify-between border-b
          border-primary/20 pb-4
        ">
          <p className="
            text-xs uppercase
            tracking-[0.15em] text-primary/65
          ">
            {search
              ? `${filteredCategories.reduce(
                  (total, category) => total + category.questions.length,
                  0
                )} results found`
              : `${totalQuestions} questions`}
          </p>

          <span className="h-px w-10 bg-primary/40" />
        </div>

        {/* FAQ Categories and Questions */}
        <div className="mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            {filteredCategories.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${search}`}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 12,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : -8,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  ease: smoothEase,
                }}
                className="flex flex-col gap-12"
              >
                {filteredCategories.map((category) => (
                  <div key={category.title}>
                    {/* Category Heading */}
                    <div className="mb-4 flex items-center gap-4">
                      <h2 className="
                        font-display text-2xl
                        text-primary sm:text-3xl
                      ">
                        {category.title}
                      </h2>

                      <span className="h-px flex-1 bg-primary/20" />

                      <span className="
                        text-xs tabular-nums
                        text-primary/50
                      ">
                        {String(category.questions.length).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Accordion */}
                    <div className="border-t border-primary/20">
                      {category.questions.map((item) => {
                        const id = `${category.originalIndex}-${item.originalIndex}`;
                        const isOpen = openQuestion === id;
                        const panelId = `faq-panel-${id}`;

                        return (
                          <motion.div
                            key={id}
                            layout={!shouldReduceMotion}
                            className="
                              border-b border-primary/20
                            "
                          >
                            <button
                              type="button"
                              aria-expanded={isOpen}
                              aria-controls={panelId}
                              onClick={() => toggleQuestion(id)}
                              className="
                                group flex w-full
                                items-center gap-5
                                py-6 text-left
                                sm:py-7
                              "
                            >
                              <span className="
                                flex-1 font-display
                                text-lg leading-snug
                                text-primary
                                transition-colors duration-300
                                group-hover:text-primary/65
                                sm:text-xl
                              ">
                                {item.question}
                              </span>

                              {/* Animated Icon */}
                              <motion.span
                                animate={{
                                  rotate: isOpen ? 45 : 0,
                                }}
                                transition={{
                                  duration: shouldReduceMotion ? 0 : 0.45,
                                  ease: smoothEase,
                                }}
                                className="
                                  flex h-9 w-9 shrink-0
                                  items-center justify-center
                                  border border-primary/30
                                  text-primary
                                  transition-colors duration-300
                                  group-hover:bg-primary
                                  group-hover:text-shell
                                "
                              >
                                <Icon
                                  icon="lucide:plus"
                                  width="18"
                                  height="18"
                                />
                              </motion.span>
                            </button>

                            {/* Animated Answer */}
                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  id={panelId}
                                  key="answer"
                                  initial={{
                                    height: 0,
                                    opacity: 0,
                                  }}
                                  animate={{
                                    height: "auto",
                                    opacity: 1,
                                  }}
                                  exit={{
                                    height: 0,
                                    opacity: 0,
                                  }}
                                  transition={{
                                    height: {
                                      duration: shouldReduceMotion ? 0 : 0.55,
                                      ease: smoothEase,
                                    },
                                    opacity: {
                                      duration: shouldReduceMotion ? 0 : 0.3,
                                    },
                                  }}
                                  className="overflow-hidden"
                                >
                                  <motion.div
                                    initial={{
                                      y: shouldReduceMotion ? 0 : 12,
                                    }}
                                    animate={{ y: 0 }}
                                    exit={{
                                      y: shouldReduceMotion ? 0 : 8,
                                    }}
                                    transition={{
                                      duration: shouldReduceMotion ? 0 : 0.4,
                                      ease: smoothEase,
                                    }}
                                    className="
                                      max-w-3xl
                                      pb-7 pr-12
                                      text-sm leading-7
                                      text-primary/75
                                      sm:text-base sm:leading-8
                                    "
                                  >
                                    {item.answer}
                                  </motion.div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="
                  flex flex-col items-center
                  py-20 text-center
                "
              >
                <Icon
                  icon="lucide:search-x"
                  width="32"
                  height="32"
                  className="mb-5 text-primary/50"
                />

                <h2 className="
                  font-display text-2xl
                  text-primary sm:text-3xl
                ">
                  {data.emptyTitle}
                </h2>

                <p className="
                  mt-3 max-w-sm
                  text-sm leading-7
                  text-primary/65
                ">
                  {data.emptyDescription}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("all");
                  }}
                  className="
                    mt-6 border-b
                    border-primary pb-1
                    text-xs uppercase
                    tracking-widest text-primary
                  "
                >
                  View all questions
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Wrapper>
    </section>
  );
};

export default FAQScroll;
