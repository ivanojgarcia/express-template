import { healthCheck } from "./healthCheck/healthCheck.routes";

export const initRoutes = (app) => {
  app.use("/", healthCheck());
};
