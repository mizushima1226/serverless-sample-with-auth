import schema from "./schema";
import { handlerPath } from "@libs/handlerResolver";
import { cors } from "src/config";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "hello",
        authorizer: "aws_iam",
        cors,
        request: {
          schema: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
