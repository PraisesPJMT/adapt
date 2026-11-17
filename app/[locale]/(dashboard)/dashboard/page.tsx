
import { getTranslations } from "next-intl/server";

export const instant = false;

const DashboardPage = async () => {
  const t = await getTranslations("Dashboard");

  const stats = [
    {
      label: t("totalBookings"),
      value: "0",
      description: t("allBookings"),
    },
    {
      label: t("upcomingArrivals"),
      value: "0",
      description: t("next30Days"),
    },
    {
      label: t("pendingEnquiries"),
      value: "0",
      description: t("awaitingResponse"),
    },
    {
      label: t("occupancyRate"),
      value: "—",
      description: t("noDataAvailable"),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page heading */}
      <div>
        <p className="text-sm text-tide">
          {t("overview")}
        </p>

        <h1 className="mt-2 font-display text-4xl font-medium text-mangrove">
          {t("welcome")}
        </h1>

        <p className="mt-2 text-sm text-mangrove/70">
          {t("dashboardDescription")}
        </p>
      </div>

      {/* Statistics */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-mangrove">
          {t("bookingOverview")}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-linen bg-white p-5"
            >
              <p className="text-sm text-mangrove/65">
                {stat.label}
              </p>

              <p className="mt-3 font-display text-4xl text-mangrove">
                {stat.value}
              </p>

              <p className="mt-2 text-xs text-mangrove/55">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent bookings */}
      <section className="rounded-lg border border-linen bg-white">
        <div className="flex items-center justify-between border-b border-linen px-6 py-5">
          <div>
            <h2 className="font-display text-2xl text-mangrove">
              {t("recentBookings")}
            </h2>

            <p className="mt-1 text-sm text-mangrove/60">
              {t("recentBookingsDescription")}
            </p>
          </div>
        </div>

        <div className="px-6 py-16 text-center">
          <p className="font-display text-2xl text-mangrove">
            {t("noBookingsYet")}
          </p>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-mangrove/60">
            {t("bookingsWillAppear")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
