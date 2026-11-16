import { useTranslations } from "next-intl";

const Experience = () => {
  const t = useTranslations("Navigation");

  return <div>
    <h1 className="font-display text-5xl text-mangrove">
      {t("experience")}
    </h1>
  </div>
}

export default Experience;
