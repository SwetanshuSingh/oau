import { getAuthTokenFromCookie, verifyJwt } from "@/actions/login";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const oauFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 5,
    },
  })
    .middleware(async ({ req }) => {
      const token = await getAuthTokenFromCookie();

      if (!token) {
        throw new UploadThingError("Unauthorized Access");
      }

      const user = await verifyJwt(token);

      if (!user) throw new UploadThingError("Unauthorized Access");

      return { email: user.email };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Uplaod complete by the user", metadata.email);

      console.log("File Url", file.ufsUrl);

      return { uploadedBy: metadata.email };
    }),
} satisfies FileRouter;

export type OAUFileRouter = typeof oauFileRouter;
