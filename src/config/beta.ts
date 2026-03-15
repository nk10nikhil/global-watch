export const BETA_MODE =
  typeof window !== "undefined" &&
  localStorage.getItem("GLOBALWATCH-beta-mode") === "true";
