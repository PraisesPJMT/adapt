import { useTranslations } from "next-intl";

import Wrapper from "@/components/website/Wrapper";
import UnderConstruction from "@/components/website/UnderConstruction";

const Careers = () => {
  const t = useTranslations("Navigation");

  return <div className="">
    <section className="min-h-[20svh] flex items-end">
      <Wrapper>
        <h1 className="font-display text-5xl text-mangrove">
          {t("careers")}
        </h1>
      </Wrapper>
    </section>

    <UnderConstruction />
  </div>
}

export default Careers;
