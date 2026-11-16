
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="min-h-200">
      <h1 className="font-display text-5xl text-mangrove">
        {t("hero.headline")}
      </h1>

      <p className="font-sans text-mangrove">
        {t("hero.description")}
      </p>

      <section className="bg-mangrove text-shell">
        <h2 className="font-display text-4xl text-champagne">
          Discover Adapt
        </h2>
      </section>

      <button className="bg-mangrove text-shell px-6 py-3">
        {t("hero.action")}
      </button>
    </main>
  );
}
