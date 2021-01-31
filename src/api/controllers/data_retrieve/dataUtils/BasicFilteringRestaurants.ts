import restaurantsJson from "../restaurants.json";

// Credits to - https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula/11178145 for this function
// Returns distance between two coordinates in kilometers
function distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295; // Math.PI / 180
  var c = Math.cos;
  var a =
    0.5 -
    c((lat2 - lat1) * p) / 2 +
    (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

let restaurants: any = restaurantsJson["restaurants"];

export function getFilteredRestaurants(lat: number, lon: number) {
  // Adding a new field - 'distance' to this object which is the distance from the queried location to that restaurant's location
  restaurants.forEach((restaurant) => {
    restaurant["distance"] = distance(
      lat,
      lon,
      restaurant["location"][0],
      restaurant["location"][1]
    );
  });

  // Sorting the list of objects in ascending order
  restaurants.sort(function (a: any, b: any) {
    return a["distance"] - b["distance"];
  });

  let onlineRestaurant: any = [];
  let offlineRestaurant: any = [];

  // Getting the nearest 10 restaurants
  for (let restaurant of restaurants.slice(0, 10)) {
    // If distance is more than 1.5 km, I will break out of the loop
    // since everything after it will be greater than 1.5 km as the list was
    // sorted in ascending order of distance.
    if (restaurant["distance"] > 1.5) break;
    // Separating offline and online
    else {
      if (restaurants["online"]) onlineRestaurant.push(restaurant);
      else offlineRestaurant.push(restaurant);
    }
  }

  const data = {
    online: onlineRestaurant,
    offline: offlineRestaurant,
  };

  return data;
}
