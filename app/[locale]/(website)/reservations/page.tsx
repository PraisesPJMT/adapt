import { useTranslations } from "next-intl";

const Reservations = () => {
  const t = useTranslations("Navigation");

  return <div>
    <h1 className="font-display text-5xl text-mangrove">
      {t("reservations")}
    </h1>
  </div>
}

export default Reservations;
