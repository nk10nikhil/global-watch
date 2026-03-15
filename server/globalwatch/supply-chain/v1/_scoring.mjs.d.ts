export declare const SEVERITY_SCORE: {
  AIS_DISRUPTION_SEVERITY_LOW: number;
  AIS_DISRUPTION_SEVERITY_ELEVATED: number;
  AIS_DISRUPTION_SEVERITY_HIGH: number;
};

export declare const THREAT_LEVEL: {
  war_zone: number;
  critical: number;
  high: number;
  elevated: number;
  normal: number;
};

export declare function warningComponent(warningCount: number): number;

export declare function aisComponent(maxCongestionSeverity: number): number;

export declare function computeDisruptionScore(
  threatLevel: number,
  warningCount: number,
  maxCongestionSeverity: number,
): number;

export declare function scoreToStatus(
  score: number,
): "green" | "yellow" | "red";

export declare function computeHHI(shares: number[]): number;

export declare function riskRating(
  hhi: number,
): "critical" | "high" | "moderate" | "low";

export declare function detectSpike(
  history: Array<number | { value: number }> | null | undefined,
): boolean;
