"use client";

import { locations } from "@/constants/locations";
import LocationsMap from "../LocationsMap";
import { MapIcon, MapPinIcon } from "lucide-react";

export function AddressPage() {
  return (
    <div className="flex flex-wrap gap-5 container mx-auto px-4 mt-10 md:px-0">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold inline-flex justify-center items-center gap-2">
          <span className="text-primary">
            <MapIcon />
          </span>
          Хаяг Байршил
        </h1>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-3 gap-2">
          {locations.map((location, index) => (
            <li
              key={index}
              className="inline-flex text-gray-500 items-center text-xs md:text-sm"
            >
              <span className="text-gray-500">
                <MapPinIcon />
              </span>
              <p>{location.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <LocationsMap />
    </div>
  );
}
