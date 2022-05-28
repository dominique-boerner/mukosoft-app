import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import Moment from "react-moment";

const NewsCard = ({ title, text, createdAt, isLoading, image }: any) => {
  const textLineAmount = 14;

  return (
    <Box mb="1rem">
      <Card>
        <CardHeader
          title={isLoading ? <Skeleton variant="text" width="80%" /> : title}
          subheader={
            isLoading ? (
              <Skeleton variant="text" width="50%" />
            ) : (
              <Moment date={createdAt} format="DD.MM.YYYY" />
            )
          }
        />
        {image && <CardMedia component="img" height="240" image={image} />}
        <CardContent>
          <Typography color="text.secondary">
            {isLoading
              ? [...Array(textLineAmount)].map((v, index) => {
                  return <Skeleton key={index} variant="text" height={14} />;
                })
              : text}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewsCard;
