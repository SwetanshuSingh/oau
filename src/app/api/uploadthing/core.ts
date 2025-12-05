import { auth } from "@/lib/auth";
import { headers } from "next/headers";
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
      const session = await auth.api.getSession({
        headers: headers(),
      });

      const user = session?.user;

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
