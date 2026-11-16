import { useTranslations } from "next-intl";

const Careers = () => {
  const t = useTranslations("Navigation");

  return <div>
    <h1 className="font-display text-5xl text-mangrove">
      {t("careers")}
    </h1>
  </div>
}

export default Careers;
