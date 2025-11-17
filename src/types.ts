export type Image = {
  customId: string | null;
  fileHash: string;
  key: string;
  lastModified?: number;
  name: string;
  serverData: {
    uploadedBy: string;
  };
  size: number;
  type: string;
  ufsUrl: string;
};

export type Project = {
  title: string;
  description: string;
  images: Image[];
};
