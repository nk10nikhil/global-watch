export const SEVERITY_SCORE: {
  AIS_DISRUPTION_SEVERITY_LOW: number;
  AIS_DISRUPTION_SEVERITY_ELEVATED: number;
  AIS_DISRUPTION_SEVERITY_HIGH: number;
};

export const THREAT_LEVEL: {
  war_zone: number;
  critical: number;
  high: number;
  elevated: number;
  normal: number;
};

export function warningComponent(warningCount: number): number;

export function aisComponent(maxCongestionSeverity: number): number;

export function computeDisruptionScore(
  threatLevel: number,
  warningCount: number,
  maxCongestionSeverity: number,
): number;

export function scoreToStatus(score: number): "green" | "yellow" | "red";

export function computeHHI(shares: number[]): number;

export function riskRating(
  hhi: number,
): "critical" | "high" | "moderate" | "low";

export function detectSpike(
  history: Array<number | { value: number }> | null | undefined,
): boolean;
