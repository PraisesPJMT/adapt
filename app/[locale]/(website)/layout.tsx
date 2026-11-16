
import { Suspense } from "react";
import Header from "@/components/website/Header";
import Footer from "@/components/website/Footer";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={<div className="h-20" />}>
        <Header />
      </Suspense>

      <main className="flex-1">
        {children}
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
