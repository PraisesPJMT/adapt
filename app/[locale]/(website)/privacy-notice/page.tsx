"use client"

import Highlight from "@/components/website/legals/Highlight";
import Reachout from "@/components/website/legals/Reachout";
import Scroll,{
  type ScrollData,
} from "@/components/website/legals/Scroll";

import { useTranslations } from "next-intl";

const PrivacyNotice = () => {
  const privacy = useTranslations("PrivacyPolicy");
  const footer = useTranslations("Footer");

  const scrollData: ScrollData = {
      lastUpdateLabel: privacy("lastUpdateLabel"),
      lastUpdate: privacy("lastUpdate"),
      sections: privacy.raw("sections") as ScrollData["sections"],
  };

  return <div className="">
    <Highlight title={privacy("title")} position="bottom"/>

    <Scroll
      data={scrollData}
      followLabel={footer("follow")}
    />

    <Reachout title={privacy("contact-title")} text={privacy("contact-text")} />
  </div>
}

export default PrivacyNotice;
