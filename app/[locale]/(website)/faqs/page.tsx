"use client"

import FAQScroll, { FAQData } from "@/components/website/legals/FAQScroll";
import Highlight from "@/components/website/legals/Highlight";
import Reachout from "@/components/website/legals/Reachout";


import { useTranslations } from "next-intl";

const FAQs = () => {
  const faq = useTranslations("FAQs");

  const data: FAQData = {
      title: faq("title"),
      description: faq("description"),
      searchPlaceholder: faq("searchPlaceholder"),
      allLabel: faq("allLabel"),
      questionCountLabel: faq("questionCountLabel"),
      resultsLabel: faq("resultsLabel"),
      clearSearchLabel: faq("clearSearchLabel"),
      viewAllLabel: faq("viewAllLabel"),
      emptyTitle: faq("emptyTitle"),
      emptyDescription: faq("emptyDescription"),
      categories: faq.raw("categories") as FAQData["categories"],
    };

  return <div className="">
    <Highlight title={faq("page-title")} image={"url('/wide_image_3.png')"} position="right"/>

    <FAQScroll data={data} />

    <Reachout title={faq("contact-title")} text={faq("contact-text")} position="left" />
  </div>
}

export default FAQs;
