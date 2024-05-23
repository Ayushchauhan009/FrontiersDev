import cron from "node-cron";
import axios from "axios";

// Replace with your Next.js API URL
const url = "/api/ping";

// Schedule a task to run every 15 minutes
cron.schedule("*/15 * * * *", async () => {
  try {
    const response = await axios.get(url);
    console.log("Ping successful:", response.status);
  } catch (error) {
    console.error("Error pinging server:", error);
  }
});

console.log("Cron job scheduled to ping every 15 minutes.");
