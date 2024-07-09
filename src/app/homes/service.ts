import { Home } from "app/types";

export function fetchHomes(): Promise<Home[]> {
  return fetch("/api/homes")
    .then((response) => response.json())
    .then((data) => {
      // console.log(">>>", data.homes);
      return data.homes;
    })
    .catch((error) => error);
}
