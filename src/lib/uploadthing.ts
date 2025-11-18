import { generateReactHelpers } from "@uploadthing/react";
import type { OAUFileRouter } from "@/app/api/uploadthing/core";

export const { useUploadThing } = generateReactHelpers<OAUFileRouter>();
