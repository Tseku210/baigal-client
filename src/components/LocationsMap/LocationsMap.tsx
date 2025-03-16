"use client";

import { locations } from "@/constants/locations";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import { useTheme } from "next-themes";
import { useMemo } from "react";

export function LocationsMap() {
  const theme = useTheme();
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string;
  const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID as string;

  const defaultCenter = useMemo(
    () => ({
      lat: 47.918,
      lng: 106.92,
    }),
    [],
  );

  const mapOptions: google.maps.MapOptions = {
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#cfcfcf" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#a0c4ff" }],
      },
    ],
  };

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        defaultCenter={defaultCenter}
        defaultZoom={13}
        mapId={MAP_ID}
        colorScheme={theme.theme === "dark" ? "DARK" : "LIGHT"}
        disableDefaultUI
        zoomControl
        styles={mapOptions.styles}
        className="h-[600px] w-full rounded-xl overflow-hidden"
      >
        {locations.map((loc, index) => (
          <AdvancedMarker key={index} position={{ lat: loc.lat, lng: loc.lng }}>
            <div className="bg-primary text-white text-xs px-2 py-1 rounded">
              {loc.name}
            </div>
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
}
