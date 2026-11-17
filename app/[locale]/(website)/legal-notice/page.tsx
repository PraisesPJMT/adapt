"use client"

import Highlight from "@/components/website/legals/Highlight";
import Reachout from "@/components/website/legals/Reachout";
import Scroll,{
  type ScrollData,
} from "@/components/website/legals/Scroll";

import { useTranslations } from "next-intl";

const LegalNotice = () => {
  const legal = useTranslations("LegalNotice");
  const footer = useTranslations("Footer");

  const scrollData: ScrollData = {
      lastUpdateLabel: legal("lastUpdateLabel"),
      lastUpdate: legal("lastUpdate"),
      sections: legal.raw("sections") as ScrollData["sections"],
  };

  return <div className="">
    <Highlight title={legal("title")} position="top"/>

    <Scroll
      data={scrollData}
      followLabel={footer("follow")}
    />

    <Reachout title={legal("contact-title")} text={legal("contact-text")} />
  </div>
}

export default LegalNotice;
