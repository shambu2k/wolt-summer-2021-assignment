import { getFilteredRestaurants } from "./dataUtils/BasicFilteringRestaurants";

export function getNearbyRestaurants(lat: number, lon: number) {
  const restaurants: any = getFilteredRestaurants(lat, lon);

  // Sorting by ascending order of distance.
  restaurants["online"].sort(function (a, b) {
    return a.distance - b.distance;
  });

  restaurants["offline"].sort(function (a, b) {
    return a.distance - b.distance;
  });

  // Returning online restaurants first then offline.
  return restaurants["online"].concat(restaurants["offline"]);
}
