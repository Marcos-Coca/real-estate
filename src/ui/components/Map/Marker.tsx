"use client";

import { useEffect } from "react";
import { AdvancedMarker, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";

import styles from "./Map.module.css";
import { Home } from "app/types";
import { Icon } from "../Icon";

export function Marker({ lat, lng, price, area, bathrooms, image, bedrooms }: MarkerProps) {
  const [markerRef, marker] = useAdvancedMarkerRef();

  useEffect(() => {
    if (marker) {
      marker.addListener("click", () => {});
      marker.addListener("mouseover", () => {
        // console.log("mouseover");
      });
    }
  }, [marker]);

  return (
    <AdvancedMarker position={{ lat, lng }} ref={markerRef}>
      <button className={price ? styles.markerWithPrice : styles.marker}>
        <span>{price}</span>
      </button>
      <figure className={styles.home}>
        <img loading="lazy" src={image} alt="home" />
        <figcaption>
          <h2>{price}</h2>
          <span>
            {bathrooms}
            <Icon name="bath" />
          </span>
          <span>
            {bedrooms} <Icon name="bed" />
          </span>
          <span>{area}m²</span>
        </figcaption>
      </figure>
    </AdvancedMarker>
  );
}

export interface MarkerProps extends Home {}
