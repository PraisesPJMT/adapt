"use client"

import Highlight from "@/components/website/legals/Highlight";
import Reachout from "@/components/website/legals/Reachout";
import Scroll,{
  type ScrollData,
} from "@/components/website/legals/Scroll";

import { useTranslations } from "next-intl";

const SiteUsage = () => {
  const site = useTranslations("SiteUsage");
  const footer = useTranslations("Footer");

  const scrollData: ScrollData = {
      lastUpdateLabel: site("lastUpdateLabel"),
      lastUpdate: site("lastUpdate"),
      sections: site.raw("sections") as ScrollData["sections"],
  };

  return <div className="">
    <Highlight title={site("title")} position="left"/>

    <Scroll
      data={scrollData}
      followLabel={footer("follow")}
    />

    <Reachout title={site("contact-title")} text={site("contact-text")} />
  </div>
}

export default SiteUsage;
