export const config = { runtime: "edge" };

import { createDomainGateway, serverOptions } from "../../../server/gateway";
import { createWildfireServiceRoutes } from "../../../src/generated/server/globalwatch/wildfire/v1/service_server";
import { wildfireHandler } from "../../../server/globalwatch/wildfire/v1/handler";

export default createDomainGateway(
  createWildfireServiceRoutes(wildfireHandler, serverOptions),
);
