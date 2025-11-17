import { createRouteHandler } from "uploadthing/next";
import { oauFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: oauFileRouter,
});
