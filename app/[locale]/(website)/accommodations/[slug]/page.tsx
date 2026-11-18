import { rooms } from "@/lib/data";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import AccommodationsRoomHero from "@/components/website/accommodations/AccommodationRoomHero";
import AccommodationsRoomAbout from "@/components/website/accommodations/AccommodationsRoomAbout";
import AccommodationsRoomGallery from "@/components/website/accommodations/AccommodationsRoomGallery";
import AccommodationsRoomFeatures from "@/components/website/accommodations/AccommodationsRoomFeatures";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

const AccommodationsDetails = async ({ params }: Props) => {
  const { locale, slug: id } = await params;

  // 1. Enable static rendering for next-intl
  setRequestLocale(locale);

  // 3. Find the room and trigger 404 if missing
  const room = rooms.find((room) => room.id === id);

  if (!room) {
    notFound();
  }

  return (
    <div className="">
      <AccommodationsRoomHero room={room} />

      <AccommodationsRoomAbout room={room} />

      <AccommodationsRoomFeatures room={room} />

      <AccommodationsRoomGallery room={room} />
    </div>
  );
};

export default AccommodationsDetails;
