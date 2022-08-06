import { Filter, IPhoto } from "./data.models";
import { useState } from "react";

const url = "https://stock.adobe.io/Rest/Media/1/Search/Files?locale=en-US";

interface FetchReturn {
  photos: IPhoto[] | null;
  loading: boolean;
  fetchData: (filters: Filter, params?: string) => Promise<void>;
}

const getSearchUrl = (filters: Filter, params?: string) => {
  const videoString = `&serch_parameters[filters][content_type:video]=${
    filters.includes("video") ? "1" : "0"
  }`;
  const photoString = `&search_parameters[filters][content_type:photo]=${
    filters.includes("photo") ? "1" : "0"
  }`;
  const paramString = !!params ? `&search_parameters[words]=${params}` : "";

  return `${url}${videoString}${photoString}${paramString}`;
};

export const useFetchPhotos = (): FetchReturn => {
  const [photos, setPhotos] = useState<IPhoto[] | null>(null);
  const [loading, setLoading] = useState(false);
  const key = process.env.API_KEY;
  console.log(key);

  const fetchData = async (filters: Filter, params?: string): Promise<void> => {
    getSearchUrl(filters);

    const searchUrl = getSearchUrl(filters, params);

    try {
      setLoading(true);
      const res = await fetch(searchUrl, {
        mode: "cors",
        headers: {
          "X-API-Key": "913849f92b6547f0910cf58cc9823047",
          "X-Product": "ErikNeville/1.0",
          Accept: "*/*",
        },
      });

      const data: { files: any[] } = await res.json();

      const photoArray: IPhoto[] = data.files.map((item) => ({
        id: item.id,
        title: item.title,
        creator: item["creator_name"],
        thumbnailUrl: item["thumbnail_url"],
        thumbnailHeight: item["thumbnail_height"],
        thumbnailWidth: item["thumbnail_width"],
        height: item.height,
        width: item.width,
      }));

      setPhotos(photoArray);
    } catch (error) {
      console.log("Error fetching", error);
    } finally {
      setLoading(false);
    }
  };

  return { photos, loading, fetchData };
};
