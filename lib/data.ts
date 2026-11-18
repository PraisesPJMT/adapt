export const rooms = [
  {
    id: "premium-deluxe",
    image: "/room_1.png",
    title: "premium-deluxe",
    description: "premium-deluxe-description",
    price: "premium-deluxe-price",
    guests: 4,
    beds: 3,
    bathrooms: 2,
    breakfast: "not-included",
    services: ["wifi", "heathen", "coffee", "tv", "laundry-service", "mini-bar", "spa", "business-center", "gym"],
    images: ["/room_1.png", "/room_image_1.png", "/room_image_2.png"]
  },
  {
    id: "executive-suite",
    image: "/room_2.png",
    title: "executive-suite",
    description: "executive-suite-description",
    price: "executive-suite-price",
    guests: 2,
    beds: 1,
    bathrooms: 2,
    breakfast: "included",
    services: ["wifi", "heathen", "coffee", "tv", "laundry-service", "mini-bar", "spa", "business-center", "gym"],
    images: ["/room_2.png", "/room_image_1.png", "/room_image_2.png"]
  },
  {
    id: "presidential-villa",
    image: "/room_3.png",
    title: "presidential-villa",
    description: "presidential-villa-description",
    price: "presidential-villa-price",
    guests: 6,
    beds: 4,
    bathrooms: 2,
    breakfast: "included",
    services: ["wifi", "heathen", "coffee", "tv", "laundry-service", "mini-bar", "spa", "business-center", "gym"],
    images: ["/room_3.png", "/room_image_1.png", "/room_image_2.png"]
  },
  {
    id: "celebrity-suit",
    image: "/room_4.png",
    title: "celebrity-suit",
    description: "celebrity-suit-description",
    price: "celebrity-suit-price",
    guests: 6,
    beds: 4,
    bathrooms: 2,
    breakfast: "included",
    services: ["wifi", "heathen", "coffee", "tv", "laundry-service", "mini-bar", "spa", "business-center", "gym"],
    images: ["/room_4.png", "/room_image_1.png", "/room_image_2.png"]
  },
] as const;

export type RoomType = (typeof rooms)[number];
