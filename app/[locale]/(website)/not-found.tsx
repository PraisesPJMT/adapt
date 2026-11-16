import Link from "next/link";
import { useTranslations } from "next-intl";

export default function WebsiteNotFound() {
  const t = useTranslations("Not-found");
  
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-shell px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm tracking-widest text-tide">
          404 · {t("headline")}
        </p>

        <h1 className="mt-6 font-display text-6xl text-mangrove">
          {t("title")}
        </h1>

        <p className="mt-5 text-mangrove/70">
          {t("text")}
        </p>

        <Link
          href="/"
          className="mt-8 inline-block bg-mangrove px-6 py-3 text-shell"
        >
          {t("return-link")}
        </Link>
      </div>
    </div>
  );
}
