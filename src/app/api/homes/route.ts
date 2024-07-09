import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  const homes = [
    {
      lat: 18.4865669,
      lng: -69.9955921,
      price: 100,
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      bathrooms: 2,
      bedrooms: 3,
      area: 200,
    },
  ];
  return NextResponse.json(
    {
      homes,
    },
    { status: 200 }
  );
}
