import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function publicAsset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
