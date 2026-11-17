import Link from "next/link";

export default function DashboardNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium text-tide">
          ERROR 404
        </p>

        <h1 className="mt-4 font-display text-5xl text-mangrove">
          Page not found
        </h1>

        <p className="mt-4 text-sm leading-6 text-mangrove/70">
          This dashboard page doesn&apos;t exist or may have been moved.
        </p>

        <Link
          href="/dashboard"
          className="mt-6 inline-block rounded-md bg-mangrove px-5 py-3 text-sm text-shell hover:bg-canopy"
        >
          Back to dashboard
        </Link>
      </div>
    </div>
  );
}