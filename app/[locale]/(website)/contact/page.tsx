import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Navigation");

  return <div>
    <h1 className="font-display text-5xl text-mangrove">
      {t("contact")}
    </h1>
  </div>
}

export default Contact;
