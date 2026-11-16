import { useTranslations } from "next-intl";

const LegalNotice = () => {
  const t = useTranslations("Navigation");

  return <div>
    <h1 className="font-display text-5xl text-mangrove">
      {t("legal-notice")}
    </h1>
  </div>
}

export default LegalNotice;
