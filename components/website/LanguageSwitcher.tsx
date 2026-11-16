// components/website/LanguageSwitcher.tsx

"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <select
      value={locale}
      onChange={(event) => {
        router.replace(pathname, {
          locale: event.target.value,
        });
      }}
      aria-label="Select language"
      className="p-2 bg-transparent text-primary border border-primary/15"
    >
      {routing.locales.map((item) => (
        <option key={item} value={item} className="text-mangrove">
          {item.toUpperCase()}
        </option>
      ))}
    </select>
  );
}