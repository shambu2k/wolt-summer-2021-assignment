import { Request, Response } from "express";
import { getPopularRestaurants } from "./data_retrieve/PopularRestaurants";
import { getNewRestaurants } from "./data_retrieve/NewRestaurants";
import { getNearbyRestaurants } from "./data_retrieve/NearbyRestaurants";

export function discoverController(req: Request, res: Response) {
  const popularRestaurantsData = getPopularRestaurants(
    parseFloat(req.query["lat"]!.toString()),
    parseFloat(req.query["lon"]!.toString())
  );
  const nearbyRestaurantsData = getNearbyRestaurants(
    parseFloat(req.query["lat"]!.toString()),
    parseFloat(req.query["lon"]!.toString())
  );
  const newRestaurantsData = getNewRestaurants(
    parseFloat(req.query["lat"]!.toString()),
    parseFloat(req.query["lon"]!.toString())
  );
  const data = {
    sections: [
      {
        title: "Popular Restaurants",
        restaurants: popularRestaurantsData,
      },
      {
        title: "New Restaurants",
        restaurants: newRestaurantsData,
      },
      {
        title: "Nearby Restaurants",
        restaurants: nearbyRestaurantsData,
      },
    ],
  };
  res.status(200).json(data);
}
