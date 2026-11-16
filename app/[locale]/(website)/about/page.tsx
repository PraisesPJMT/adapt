import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("Navigation");

  return <div>
    <h1 className="font-display text-5xl text-mangrove">
      {t("about")}
    </h1>
  </div>
}

export default About;
