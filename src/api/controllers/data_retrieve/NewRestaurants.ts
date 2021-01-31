import { getFilteredRestaurants } from "./dataUtils/BasicFilteringRestaurants";

export function getNewRestaurants(lat: number, lon: number) {
  const restaurants: any = getFilteredRestaurants(lat, lon);

  // Sorting by date - newest restaurant comes at the top
  restaurants["online"].sort(function (a, b) {
    return +new Date(b.launch_date) - +new Date(a.launch_date);
  });

  restaurants["offline"].sort(function (a, b) {
    return +new Date(b.launch_date) - +new Date(a.launch_date);
  });

  let i = restaurants["online"].length;

  const fourMonthsAgo = new Date();
  fourMonthsAgo.setMonth(fourMonthsAgo.getMonth() - 4);

  while (i--) {
    if (+fourMonthsAgo > +new Date(restaurants["online"][i].launch_date)) {
      restaurants["online"].splice(i, 1);
    }
  }

  i = restaurants["offline"].length;

  while (i--) {
    if (+fourMonthsAgo > +new Date(restaurants["offline"][i].launch_date)) {
      restaurants["offline"].splice(i, 1);
    }
  }

  // Returning online restaurants first then offline.
  return restaurants["online"].concat(restaurants["offline"]);
}
