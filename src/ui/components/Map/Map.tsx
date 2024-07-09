"use client";
import { APIProvider, Map as GoogleMap } from "@vis.gl/react-google-maps";

import { Marker } from "./Marker";
import { Home } from "app/types";

import styles from "./Map.module.css";
import { Button } from "@ui/forms/Button";

export function Map({ homes = [] }: MapProps) {
  return (
    <APIProvider region="do" language="es" apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div className={styles.mapContainer}>
        <GoogleMap
          mapId="cf56e5eee5864e6d"
          defaultZoom={20}
          defaultCenter={{ lat: 18.4865669, lng: -69.9955921 }}
          disableDefaultUI={true}
        >
          {homes.map((home, index) => (
            <Marker key={index} {...home} />
          ))}
        </GoogleMap>
        <div className={styles.mapButtonContainer}>
          <div className={styles.mapButton}>
            <Button
              onClick={() => {
                alert("message");
              }}
              variant="outline"
            >
              Go to map
            </Button>
          </div>
        </div>
      </div>
    </APIProvider>
  );
}

export interface MapProps {
  homes: Home[];
}
