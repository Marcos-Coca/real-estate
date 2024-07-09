// "use client";
import { Home } from "app/types";

import styles from "./styles.module.css";
import { Icon } from "@ui/components/Icon";

export function HomesList({ homes }: Props) {
  // Get a new icon library
  return (
    <ul className={styles.list}>
      {homes.map((home, index) => (
        <li className={styles.home} key={index}>
          <img src={home.image} alt="home" />
          <div>
            <header>3 rooms moder apartment</header>
            <p>{home.address}</p>
            <ul className={styles.amenitiesContainer}>
              <li>
                {home.bathrooms}
                <Icon color="primary" name="bath" />
              </li>
              <li>
                {home.bedrooms} <Icon color="primary" name="bed" />
              </li>
              <li>
                {home.area}m²
                <Icon color="primary" name="ruler" />
              </li>
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}

interface Props {
  homes: Home[];
}
