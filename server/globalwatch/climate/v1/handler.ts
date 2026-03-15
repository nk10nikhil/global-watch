import type { ClimateServiceHandler } from "../../../../src/generated/server/globalwatch/climate/v1/service_server";

import { listClimateAnomalies } from "./list-climate-anomalies";

export const climateHandler: ClimateServiceHandler = {
  listClimateAnomalies,
};
