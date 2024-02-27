import { url } from "@/constants";
import { logger } from "../logger";

export const fetcher = async <T = any>(body: string): Promise<T> => {
  const method = "POST";
  try {
    logger("method", url, "Pending");
    const res = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body,
    });
    const { data } = await res.json();
    logger(method, url, res.status);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
};
