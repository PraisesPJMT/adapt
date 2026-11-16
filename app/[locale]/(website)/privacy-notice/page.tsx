import { useTranslations } from "next-intl";

const PrivacyNotice = () => {
  const t = useTranslations("Navigation");

  return <div>
    <h1 className="font-display text-5xl text-mangrove">
      {t("privacy-notice")}
    </h1>
  </div>
}

export default PrivacyNotice;
