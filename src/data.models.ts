export interface IPhoto {
  id: number;
  title: string;
  creator: string;
  thumbnailUrl: string;
  thumbnailHeight: number;
  thumbnailWidth: number;
  height: number;
  width: number;
}

export type Filter = ("video" | "photo")[];
