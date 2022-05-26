import { Box, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommunityService from "../../common/services/community-service/community-service";
import { MyDocNews } from "./../../common/models/my-doc/MyDocNews";
import { NewsList } from "./components/NewsList/NewsList";

const Home = () => {
  const [news, setNews] = useState<MyDocNews[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const communityService = CommunityService.getInstance();

  useEffect(() => {
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
  }, [communityService]);

  return (
    <Box>
      {isLoading && <LinearProgress />}
      <Box px="1rem" py={"1rem"}>
        <Typography variant="h2" color="primary">
          Hallo,
        </Typography>
        <Typography variant="h1" color="text.primary">
          Dominique!
        </Typography>
      </Box>
      <NewsList news={news} isLoading={isLoading} />
    </Box>
  );
};

export default Home;
