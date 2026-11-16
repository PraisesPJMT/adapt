import { useTranslations } from "next-intl";

const Gallery = () => {
  const t = useTranslations("Navigation");

  return <div>
    <h1 className="font-display text-5xl text-mangrove">
      {t("gallery")}
    </h1>
  </div>
}

export default Gallery;
