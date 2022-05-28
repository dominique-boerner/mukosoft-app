import { useEffect, useState } from "react";
import CommunityService from "../../services/communityService/community-service";
import { MyDocNews } from "@models/my-doc/MyDocNews";
import { features } from "@common/config/features";

export function useFetchNews(): [MyDocNews[], boolean] {
  const [news, setNews] = useState<MyDocNews[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const communityService = CommunityService.getInstance();

  useEffect(() => {
    if (features.MY_DOC) {
      communityService?.getFavourites().then((favourites) => {
        if (favourites.value) {
          CommunityService.getInstance()
            ?.getNews(JSON.parse(favourites.value))
            .then((response: any) => response.json())
            .then((data: MyDocNews[]) => {
              setNews(data);
              setIsLoading(false);
            });
        } else {
          setIsLoading(false);
          setNews([]);
        }
      });
    }
  }, []);

  return [news, isLoading];
}
