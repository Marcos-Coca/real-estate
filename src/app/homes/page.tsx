import { Map } from "@ui/components/Map";
// import { fetchHomes } from "./service";
import { HomesList } from "./components/HomesList";

import styles from "./styles.module.css";

export default async function Homes() {
  const homes = [
    {
      lat: 18.4865669,
      lng: -69.9955921,
      price: "$150,000",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      bathrooms: 2,
      bedrooms: 3,
      area: 200,
      address: "Calle 1, Santo Domingo",
    },
  ];

  return (
    <main style={{ display: "flex", gap: "12px", width: "80%", margin: "auto" }}>
      <div className={styles.homesListContainer}>
        <HomesList homes={homes} />
      </div>
      <Map homes={homes} />
    </main>
  );
}
