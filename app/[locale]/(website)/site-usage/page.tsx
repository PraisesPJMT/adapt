import { useTranslations } from "next-intl";

const SiteUsage = () => {
  const t = useTranslations("Navigation");

  return <div>
    <h1 className="font-display text-5xl text-mangrove">
      {t("site-usage")}
    </h1>
  </div>
}

export default SiteUsage;
