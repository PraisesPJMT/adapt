// components/website/Header.tsx

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Navigation");

  return (
    <footer className="sticky top-0 z-50 bg-mangrove">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-3xl text-shell">
          Adapt
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/" className="text-shell">{t("home")}</Link>
          <Link href="/about" className="text-shell">{t("about")}</Link>
          <Link href="/contact" className="text-shell">{t("contact")}</Link>
          <Link href="/faqs" className="text-shell">{t("faqs")}</Link>
        </div>
      </nav>
    </footer>
  );
}