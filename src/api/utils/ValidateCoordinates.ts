import { Request, Response, NextFunction } from "express";

export async function validateCoordinates(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Getting all parameters in request url
  const params = Object.keys(req.query);

  if (params.length != 2) {
    res.status(400);
    res.json({
      message:
        "query parameters missing or there are unwanted number of parameters",
    });
  } else if (!params.includes("lat") || !params.includes("lon")) {
    // Catches mistakes in query key's names
    res.status(400);
    res.json({
      message:
        "query parameters are wrong - Checkout this example - /discovery?lat=60.1709&lon=24.941",
    });
  } else {
    const lat: number = parseFloat(req.query["lat"]!.toString());
    const lon: number = parseFloat(req.query["lon"]!.toString());

    if (lat <= 90 && lat >= -90 && lon <= 180 && lon >= -180) {
      // Checking if the coordinates are valid
      res.status(200);
      next(); // Query seems valid, moving forward to DiscoverController....
    } else {
      res.status(400);
      res.json({ message: "Invalid Latitude or Longitude passed in request" });
    }
  }
}
