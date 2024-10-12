import { StaticImageData } from "next/image";

export interface ProjectType {
  Done_By?: string;
  id?: string;
  transaction_date?: string;
  otherDoc?: string;
  Record_State?: number;
  proj_title: string;
  proj_desc: string;
  Image_URL?: string | StaticImageData;
  url: string;
  video_url?: string;
  width?: number;
  height?: number;
  featured?: boolean;
  category?: string;
  subCategory?: string;
}
