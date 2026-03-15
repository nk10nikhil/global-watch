export const config = { runtime: "edge" };

import { createDomainGateway, serverOptions } from "../../../server/gateway";
import { createNewsServiceRoutes } from "../../../src/generated/server/globalwatch/news/v1/service_server";
import { newsHandler } from "../../../server/globalwatch/news/v1/handler";

export default createDomainGateway(
  createNewsServiceRoutes(newsHandler, serverOptions),
);
