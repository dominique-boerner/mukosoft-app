import { Box, Button, Typography } from "@mui/material";
import EmptyIcon from "../../../../assets/icons/favourite.svg";
import NewsCard from "@module/home/components/newsCard/NewsCard";
import React from "react";
import { MyDocNews } from "@models/my-doc/MyDocNews";

interface NewsListProps {
  news: MyDocNews[];
  isLoading: boolean;
}

export function NewsList({ news = [], isLoading = true }: NewsListProps) {
  const SKELETON_NEWS_AMOUNT = 3;

  return (
    <Box px="1rem" py="1rem">
      {!isLoading && news.length === 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            textAlign: "center",
          }}
        >
          <EmptyIcon style={{ width: "50%", height: "50%" }} />
          <Typography variant="h1" sx={{ marginBottom: "1rem" }}>
            Keine Neuigkeiten
          </Typography>
          <Typography variant="h3">
            Derzeit scheint es keine Neuigkeiten aus deinen Communites zu geben.
          </Typography>
          <Button
            sx={{ marginTop: "1rem" }}
            onClick={() => {}}
            variant="contained"
            color="tertiary"
          >
            Zur Community
          </Button>
        </Box>
      )}
      {isLoading &&
        [...Array(SKELETON_NEWS_AMOUNT)].map((v, index) => (
          <NewsCard key={index} isLoading={true} />
        ))}
      {news.map((news) => (
        <NewsCard
          key={news.slug}
          title={news.name}
          text={news.content}
          createdAt={news.created_at}
          image={news.url_picture}
          isLoading={false}
        />
      ))}
    </Box>
  );
}
