import { Box, LinearProgress, TextField, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import CommunityCard from "./components/communityCard/CommunityCard";
import { MyDocResponse } from "@models/my-doc/MyDocResponse";
import { useFetchCommunity } from "@hooks/useFetchCommunity/useFetchCommunity";

const Community: FunctionComponent = () => {
  const community = useFetchCommunity();

  return (
    <Box py={"3.5rem"}>
      {community.loading && <LinearProgress />}
      <Box px="1rem" py="1rem">
        <Typography
          variant="h4"
          color="text.primary"
          sx={{ fontSize: "1.8rem" }}
        >
          Unsere Community
        </Typography>
        <TextField id="search-community" label="Name" variant="outlined" />
        {community.data.map((community: MyDocResponse) => {
          const communityData = community.data;
          return (
            <CommunityCard
              key={communityData.id}
              id={communityData.uuid}
              name={communityData.company}
              image={communityData._image}
              location={communityData.city}
              isFavourite={true}
              onFavouriteClick={() => {}}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Community;
