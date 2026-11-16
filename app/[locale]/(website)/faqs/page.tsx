import { useTranslations } from "next-intl";

const Faqs = () => {
  const t = useTranslations("Navigation");

  return <div>
    <h1 className="font-display text-5xl text-mangrove">
      {t("faqs")}
    </h1>
  </div>
}

export default Faqs;
