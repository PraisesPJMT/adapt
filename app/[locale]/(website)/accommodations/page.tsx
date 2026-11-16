import { useTranslations } from "next-intl";

const Accommodations = () => {
  const t = useTranslations("Navigation");

  return <div>
    <h1 className="font-display text-5xl text-mangrove">
      {t("accommodations")}
    </h1>
  </div>
}

export default Accommodations;
