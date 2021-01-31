import { getFilteredRestaurants } from "./dataUtils/BasicFilteringRestaurants";

export function getPopularRestaurants(lat: number, lon: number) {
  const restaurants: any = getFilteredRestaurants(lat, lon);

  // Sorting by descending order of popularity.
  restaurants["online"].sort(function (a, b) {
    return b.popularity - a.popularity;
  });

  restaurants["offline"].sort(function (a, b) {
    return b.popularity - a.popularity;
  });

  // Returning online restaurants first then offline.
  return restaurants["online"].concat(restaurants["offline"]);
}
