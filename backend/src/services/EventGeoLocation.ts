import axios from "axios";
import dotenv from "dotenv";
import { createClient } from "redis";

dotenv.config();

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; // Ensure this is set in your backend .env file

// Initialize Redis client
const redisClient = createClient();

redisClient.on("error", (err) => console.error("Redis Client Error", err));

redisClient.connect();

// this will get the geo location
export async function getcodeLocation(location: string) {
  try {
    // check if the location is already in the cache
    const cacheKey = `geocode:${location}`;
    const cachedCoords = await redisClient.get(cacheKey);

    if (cachedCoords) {
      return JSON.parse(cachedCoords);
    }

    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        location
      )}.json`,
      {
        params: {
          access_token: MAPBOX_TOKEN,
          limit: 1,
        },
      }
    );

    if (response.data.features && response.data.features.length > 0) {
      const [longitude, latitude] = response.data.features[0].center;
      const coords = { latitude, longitude };

      // Store in Redis cache with an expiration time (1 day)
      await redisClient.setEx(cacheKey, 86400, JSON.stringify(coords));

      return coords;
    } else {
      return new Error(`No coordinates found for location: ${location} `);
    }
  } catch (error) {
    console.error("Error fetching the geo location", error);
    return new Error("Error fetching the geo location");
  }
}
