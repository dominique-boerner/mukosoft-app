import { features } from "@common/config/features";
import { NewsList } from "@mukosoft-home/core";
import React from "react";
import { useFetchNews } from "@hooks/useFetchNews/useFetchNews";

export default function CommunityNews() {
  const [news, isLoading] = useFetchNews();

  if (features.MY_DOC) {
    return <NewsList news={news} isLoading={isLoading} />;
  } else {
    return <></>;
  }
}
